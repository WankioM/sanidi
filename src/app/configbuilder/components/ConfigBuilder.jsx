import React, { useState } from 'react';
import { BiCopy, BiCheck, BiCode } from 'react-icons/bi';
import { FaEthereum, FaWallet } from 'react-icons/fa';

const ConfigBuilder = () => {
  const [showSwahili, setShowSwahili] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [config, setConfig] = useState({
    chains: '',
    connectors: [],
    projectId: '',
    infuraId: '',
    appName: '',
  });

  const generateCode = () => {
    const code = `import { configureChains, createConfig } from 'wagmi'
import { mainnet, base, baseGoerli } from 'wagmi/chains'
import { createPublicClient, http } from 'viem'
${config.connectors.includes('MetaMask') ? "import { MetaMaskConnector } from 'wagmi/connectors/metaMask'" : ''}
${config.connectors.includes('WalletConnect') ? "import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'" : ''}
${config.connectors.includes('Coinbase') ? "import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'" : ''}
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const { chains } = configureChains(
  [mainnet, base, baseGoerli],
  [
    infuraProvider({ apiKey: '${config.infuraId}' }),
    publicProvider()
  ]
)

const connectors = [
  ${config.connectors.map(connector => {
    switch(connector) {
      case 'MetaMask':
        return 'new MetaMaskConnector({ chains }),';
      case 'WalletConnect':
        return `new WalletConnectConnector({
    chains,
    options: {
      projectId: '${config.projectId}',
      qrcode: true,
    },
  }),`;
      case 'Coinbase':
        return `new CoinbaseWalletConnector({
    chains,
    options: {
      appName: '${config.appName}',
    },
  }),`;
      default:
        return '';
    }
  }).join('\n  ')}
]

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  })
})`;
    
    return code;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Let's Get Started */}
        <div className="bg-primary p-12 flex flex-col justify-between relative">
          <div>
            <h1 className="text-7xl font-gordquick text-white mb-6">
              Let's get started.
            </h1>
            <p className="text-xl font-aspekta text-white/80">
              Configure your Wagmi setup with a few simple steps.
            </p>
          </div>
          
          {/* Decorative Image */}
          <div className="absolute bottom-0 right-0 p-8">
            <img 
              src="/api/placeholder/400/320" 
              alt="Decorative" 
              className="opacity-20"
            />
          </div>
          
          {/* Language Toggle */}
          <div className="relative z-10">
            <button
              onClick={() => setShowSwahili(!showSwahili)}
              className="text-white/80 hover:text-white font-aspekta text-sm underline"
            >
              {showSwahili ? "Switch to English" : "Badili lugha"}
            </button>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-12 overflow-y-auto">
          <div className="max-w-xl mx-auto space-y-12">
            {/* Chains Section */}
            <div className="space-y-6">
              <label className="inline-flex items-center gap-3 text-2xl font-gordquick text-gray-800">
                <FaEthereum className="text-primary" />
                Select Your Chains
              </label>
              <input
                type="text"
                placeholder="e.g., mainnet, sepolia"
                className="w-full bg-transparent border-b-2 border-gray-300 p-4 font-aspekta text-lg
                         focus:outline-none focus:border-primary"
                onChange={(e) => setConfig(prev => ({ ...prev, chains: e.target.value }))}
                value={config.chains}
              />
            </div>

            {/* Wallet Connectors Section */}
            <div className="space-y-6">
              <label className="inline-flex items-center gap-3 text-2xl font-gordquick text-gray-800">
                <FaWallet className="text-primary" />
                Choose Your Wallets
              </label>
              
              <div className="space-y-8 pl-4">
                {/* MetaMask */}
                <div className="inline-flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="metamask"
                    className="w-6 h-6 accent-primary"
                    onChange={(e) => {
                      const newConnectors = e.target.checked 
                        ? [...config.connectors, 'MetaMask']
                        : config.connectors.filter(c => c !== 'MetaMask');
                      setConfig(prev => ({ ...prev, connectors: newConnectors }));
                    }}
                  />
                  <label htmlFor="metamask" className="text-xl font-aspekta text-gray-700">MetaMask</label>
                </div>

                {/* WalletConnect */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="walletconnect"
                      className="w-6 h-6 accent-primary"
                      onChange={(e) => {
                        const newConnectors = e.target.checked 
                          ? [...config.connectors, 'WalletConnect']
                          : config.connectors.filter(c => c !== 'WalletConnect');
                        setConfig(prev => ({ ...prev, connectors: newConnectors }));
                      }}
                    />
                    <label htmlFor="walletconnect" className="text-xl font-aspekta text-gray-700">WalletConnect</label>
                  </div>
                  {config.connectors.includes('WalletConnect') && (
                    <input
                      type="text"
                      placeholder="Project ID"
                      className="w-full bg-transparent border-b-2 border-gray-300 p-4 font-aspekta
                               focus:outline-none focus:border-primary ml-10"
                      onChange={(e) => setConfig(prev => ({ ...prev, projectId: e.target.value }))}
                      value={config.projectId}
                    />
                  )}
                </div>

                {/* Coinbase */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="coinbase"
                      className="w-6 h-6 accent-primary"
                      onChange={(e) => {
                        const newConnectors = e.target.checked 
                          ? [...config.connectors, 'Coinbase']
                          : config.connectors.filter(c => c !== 'Coinbase');
                        setConfig(prev => ({ ...prev, connectors: newConnectors }));
                      }}
                    />
                    <label htmlFor="coinbase" className="text-xl font-aspekta text-gray-700">Coinbase Wallet</label>
                  </div>
                  {config.connectors.includes('Coinbase') && (
                    <input
                      type="text"
                      placeholder="App Name"
                      className="w-full bg-transparent border-b-2 border-gray-300 p-4 font-aspekta
                               focus:outline-none focus:border-primary ml-10"
                      onChange={(e) => setConfig(prev => ({ ...prev, appName: e.target.value }))}
                      value={config.appName}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Infura ID Section */}
            <div className="space-y-6">
              <label className="inline-flex text-2xl font-gordquick text-gray-800">Infura ID</label>
              <input
                type="text"
                placeholder="Enter your Infura ID"
                className="w-full bg-transparent border-b-2 border-gray-300 p-4 font-aspekta
                         focus:outline-none focus:border-primary"
                onChange={(e) => setConfig(prev => ({ ...prev, infuraId: e.target.value }))}
                value={config.infuraId}
              />
            </div>

            {/* View Code Button */}
            <div className="pt-6">
              <button
                onClick={() => setShowCode(!showCode)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-gordquick text-xl
                         hover:bg-primary/90 transition-colors rounded-lg"
              >
                <BiCode className="w-6 h-6" />
                VIEW CODE
              </button>

              {showCode && (
                <div className="mt-8 relative bg-gray-100 p-8 rounded-lg font-aspekta">
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-4 right-4 text-gray-600 hover:text-primary transition-colors"
                  >
                    {copiedCode ? <BiCheck className="w-6 h-6" /> : <BiCopy className="w-6 h-6" />}
                  </button>
                  <pre className="text-gray-800 overflow-x-auto text-sm">
                    <code>{generateCode()}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast Message */}
      {copiedCode && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg
                      shadow-lg font-aspekta animate-fade-in-up">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ConfigBuilder;