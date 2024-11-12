import React, { useState } from 'react';
import { BiCopy, BiCheck } from 'react-icons/bi';

const InstallTS = ({ isOpen, onClose }) => {
  const [copiedCommand, setCopiedCommand] = useState(false);

  const copyToClipboard = (command) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Install TypeScript</h2>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Install TypeScript globally on your system:
          </p>
          <div className="transition-all duration-300 hover:shadow-md bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">npm</span>
              <button
                onClick={() => copyToClipboard('npm install -g typescript')}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {copiedCommand ? (
                  <BiCheck className="w-5 h-5" />
                ) : (
                  <BiCopy className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="bg-gray-900 rounded-md p-4 font-mono text-sm text-white">
              npm install -g typescript
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Verify Installation</h3>
          <p className="text-gray-600 mb-2">
            After installation, verify TypeScript is installed correctly by checking its version:
          </p>
          <div className="transition-all duration-300 hover:shadow-md bg-gray-50 rounded-lg p-4">
            <div className="bg-gray-900 rounded-md p-4 font-mono text-sm text-white">
              tsc --version
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Setup</h3>
          <p className="text-gray-600 mb-2">
            Initialize TypeScript in your project by creating a tsconfig.json:
          </p>
          <div className="transition-all duration-300 hover:shadow-md bg-gray-50 rounded-lg p-4">
            <div className="bg-gray-900 rounded-md p-4 font-mono text-sm text-white">
              tsc --init
            </div>
          </div>
        </div>

        <div className="p-4 bg-primary/5 rounded-lg">
          <p className="text-gray-600 mb-2">
            For more detailed installation instructions and documentation, visit:
          </p>
          <a 
            href="https://www.typescriptlang.org/download/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            typescriptlang.org/download →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstallTS;