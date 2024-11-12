import React, { useState } from 'react';
import { BiCopy, BiCheck } from 'react-icons/bi';

const InstallWagmi = ({ isOpen, onClose }) => {
  const [copiedPackage, setCopiedPackage] = useState(null);

  const packages = [
    {
      name: 'pnpm',
      command: 'pnpm add wagmi viem@2.x @tanstack/react-query'
    },
    {
      name: 'npm',
      command: 'npm install wagmi viem@2.x @tanstack/react-query'
    },
    {
      name: 'yarn',
      command: 'yarn add wagmi viem@2.x @tanstack/react-query'
    },
    {
      name: 'bun',
      command: 'bun add wagmi viem@2.x @tanstack/react-query'
    }
  ];

  const copyToClipboard = (command, name) => {
    navigator.clipboard.writeText(command);
    setCopiedPackage(name);
    setTimeout(() => setCopiedPackage(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="transform transition-all duration-300 ease-in-out relative bg-white rounded-xl shadow-lg p-8 mt-4 mb-8">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        ✕
      </button>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Install WAGMI</h2>
        
        <div className="space-y-6">
          {packages.map(({ name, command }) => (
            <div 
              key={name} 
              className="transition-all duration-300 hover:shadow-md bg-gray-50 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">{name}</span>
                <button
                  onClick={() => copyToClipboard(command, name)}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {copiedPackage === name ? (
                    <BiCheck className="w-5 h-5" />
                  ) : (
                    <BiCopy className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="bg-gray-900 rounded-md p-4 font-mono text-sm text-white">
                {command}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-primary/5 rounded-lg">
          <p className="text-gray-600 mb-2">
            For more detailed installation instructions and documentation, visit:
          </p>
          <a 
            href="https://wagmi.sh/react/installation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            wagmi.sh/react/installation →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstallWagmi;