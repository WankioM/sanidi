import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
    // ... existing code generation logic ...
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    const items = Array.from(components);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setComponents(items);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const [components] = useState([
    { id: 'chains', content: 'Chains Configuration' },
    { id: 'connectors', content: 'Wallet Connectors' },
  ]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
      <div className="max-w-3xl mx-auto">
        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowSwahili(!showSwahili)}
            className="bg-tertiary px-4 py-2 text-sm font-aspekta"
          >
            {showSwahili ? "Switch to English" : "Badili lugha"}
          </button>
        </div>

        {/* Main Form Section */}
        <div className="space-y-12">
          <div className="mb-16">
            <h1 className="text-5xl font-gordquick mb-4">Let's get started.</h1>
            <p className="text-gray-400 font-aspekta">Configure your Wagmi setup with a few simple steps.</p>
          </div>

          <div className="space-y-8">
            {/* Chains Section */}
            <div className="space-y-4">
              <label className="block text-2xl font-gordquick">
                <FaEthereum className="inline-block mr-2" />
                Select Your Chains
              </label>
              <input
                type="text"
                placeholder="e.g., mainnet, sepolia"
                className="w-full bg-transparent border-b-2 border-gray-600 p-4 font-aspekta text-lg
                         focus:outline-none focus:border-primary"
                onChange={(e) => setConfig(prev => ({ ...prev, chains: e.target.value }))}
                value={config.chains}
              />
            </div>

            {/* Wallet Connectors Section */}
            <div className="space-y-4">
              <label className="block text-2xl font-gordquick">
                <FaWallet className="inline-block mr-2" />
                Choose Your Wallets
              </label>
              
              <div className="space-y-6 pl-4">
                {/* MetaMask */}
                <div className="flex items-center gap-4">
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
                  <label htmlFor="metamask" className="text-xl font-aspekta">MetaMask</label>
                </div>

                {/* WalletConnect */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
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
                    <label htmlFor="walletconnect" className="text-xl font-aspekta">WalletConnect</label>
                  </div>
                  {config.connectors.includes('WalletConnect') && (
                    <input
                      type="text"
                      placeholder="Project ID"
                      className="w-full bg-transparent border-b-2 border-gray-600 p-4 font-aspekta
                               focus:outline-none focus:border-primary ml-10"
                      onChange={(e) => setConfig(prev => ({ ...prev, projectId: e.target.value }))}
                      value={config.projectId}
                    />
                  )}
                </div>

                {/* Coinbase */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
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
                    <label htmlFor="coinbase" className="text-xl font-aspekta">Coinbase Wallet</label>
                  </div>
                  {config.connectors.includes('Coinbase') && (
                    <input
                      type="text"
                      placeholder="App Name"
                      className="w-full bg-transparent border-b-2 border-gray-600 p-4 font-aspekta
                               focus:outline-none focus:border-primary ml-10"
                      onChange={(e) => setConfig(prev => ({ ...prev, appName: e.target.value }))}
                      value={config.appName}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Infura ID Section */}
            <div className="space-y-4">
              <label className="block text-2xl font-gordquick">Infura ID</label>
              <input
                type="text"
                placeholder="Enter your Infura ID"
                className="w-full bg-transparent border-b-2 border-gray-600 p-4 font-aspekta
                         focus:outline-none focus:border-primary"
                onChange={(e) => setConfig(prev => ({ ...prev, infuraId: e.target.value }))}
                value={config.infuraId}
              />
            </div>
          </div>

          {/* View Code Button */}
          <div className="pt-12">
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-gordquick text-xl
                       hover:bg-primary/90 transition-colors"
            >
              <BiCode className="w-6 h-6" />
              VIEW CODE
            </button>

            {showCode && (
              <div className="mt-8 relative bg-[#2a2a2a] p-8 font-aspekta">
                <button
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                >
                  {copiedCode ? <BiCheck className="w-6 h-6" /> : <BiCopy className="w-6 h-6" />}
                </button>
                <pre className="text-gray-300 overflow-x-auto">
                  <code>{generateCode()}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigBuilder;