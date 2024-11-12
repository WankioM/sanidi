import React from 'react';

const AboutWagmi = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="relative bg-white rounded-xl shadow-lg p-8 mt-4 mb-8 
                 transform transition-all duration-300 ease-in-out opacity-100 translate-y-0"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        ✕
      </button>
      
      <div className="prose max-w-none">
        <section className="space-y-6">
          <div className="border-l-4 border-primary/20 pl-4 transition-all duration-300 hover:border-primary/40">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              Building on Blockchain & Ethereum
              <span className="text-2xl">🚀</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Building applications on the blockchain—especially on Ethereum—is a game-changer. 
              But with all the potential comes a big to-do list: connecting wallets, managing 
              multiple chains, signing data, handling transactions, tracking changes, and 
              refreshing data. Plus, with Ethereum's fast-evolving ecosystem, you're constantly 
              adjusting to new updates and best practices. It's a thrilling, but pretty complex, 
              world to dive into!
            </p>
          </div>

          <div className="border-l-4 border-secondary/40 pl-4 transition-all duration-300 hover:border-secondary/60">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              Enter Wagmi
              <span className="text-2xl">🌐</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Wagmi</strong> makes Ethereum app development smoother and way more fun. 
              It solves the hard parts—think wallet integration, type safety, and efficient 
              data handling—so you can focus on crafting the best user experiences. With 
              modular and intuitive building blocks, Wagmi brings you flexible APIs, automatic 
              type safety, and a library of React hooks for everything Ethereum.
            </p>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 transition-all duration-300 hover:bg-primary/10">
            <p className="text-gray-600 leading-relaxed">
              Built for performance and stability, Wagmi is designed to minimize code size 
              and loading times, caching data intelligently to save you money on compute 
              costs and keep things speedy for your users.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutWagmi;