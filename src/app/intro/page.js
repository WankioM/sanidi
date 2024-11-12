'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BiBook, BiDownload, BiCode } from 'react-icons/bi';
import AboutWagmi from './components/AboutWagmi';
import InstallWagmi from './components/InstallWagmi';
import InstallTS from './components/InstallTS';

// Translation object
const translations = {
  welcome: {
    en: "Welcome to WAGMI Builder",
    sw: "Karibu kwenye WAGMI Builder"
  },
  subtitle: {
    en: "Complete these steps to get started with your Web3 journey",
    sw: "Kamilisha hatua hizi kuanza safari yako ya Web3"
  },
  progress: {
    en: "Progress",
    sw: "Maendeleo"
  },
  completed: {
    en: "completed",
    sw: "imekamilika"
  },
  of: {
    en: "of",
    sw: "kati ya"
  },
  steps: {
    about: {
      title: {
        en: "About WAGMI",
        sw: "Kuhusu WAGMI"
      },
      description: {
        en: "Learn about WAGMI and its benefits",
        sw: "Jifunze kuhusu WAGMI na faida zake"
      }
    },
    install: {
      title: {
        en: "Install WAGMI",
        sw: "Sakinisha WAGMI"
      },
      description: {
        en: "Set up WAGMI in your project",
        sw: "Weka WAGMI kwenye mradi wako"
      }
    },
    typescript: {
      title: {
        en: "Install TypeScript",
        sw: "Sakinisha TypeScript"
      },
      description: {
        en: "Add TypeScript support to your project",
        sw: "Ongeza msaada wa TypeScript kwenye mradi wako"
      }
    }
  },
  continue: {
    en: "Continue to Builder",
    sw: "Endelea kujenga"
  }
};

function ActionButton({ icon: Icon, step, completed, onClick, translations, isActive }) {
  const [showSwahili, setShowSwahili] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setShowSwahili(true)}
      onMouseLeave={() => setShowSwahili(false)}
      className={`w-full group relative flex items-center justify-between p-6 
                hover:bg-gray-50 rounded-xl shadow-sm border-2 transition-all duration-300
                ${isActive ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white'}`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20' : 'bg-primary/10'}`}>
          <Icon className={`w-6 h-6 ${isActive ? 'text-primary/90' : 'text-primary'}`} />
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <span key="title-en" className={showSwahili ? 'opacity-40' : 'opacity-100'}>
              {translations.title.en}
            </span>
            <span key="title-sw" className={`${showSwahili ? 'opacity-100' : 'opacity-40'} text-tertiary`}>
              {translations.title.sw}
            </span>
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span key="desc-en" className={showSwahili ? 'opacity-40' : 'opacity-100'}>
              {translations.description.en}
            </span>
            <span key="desc-sw" className={`${showSwahili ? 'opacity-100' : 'opacity-40'} text-tertiary`}>
              {translations.description.sw}
            </span>
          </p>
        </div>
      </div>
      {completed && (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
}

export default function Intro() {
  const [completed, setCompleted] = useState({
    about: false,
    install: false,
    typescript: false
  });
  const [showSwahili, setShowSwahili] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const totalSteps = 3;
  const completedSteps = Object.values(completed).filter(Boolean).length;
  const progress = (completedSteps / totalSteps) * 100;

  const toggleStep = (step) => {
    setActiveSection(activeSection === step ? null : step);
    setCompleted(prev => ({
      ...prev,
      [step]: !prev[step]
    }));
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutWagmi isOpen={true} onClose={() => setActiveSection(null)} />;
      case 'install':
        return <InstallWagmi isOpen={true} onClose={() => setActiveSection(null)} />;
      case 'typescript':
        return <InstallTS isOpen={true} onClose={() => setActiveSection(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Language Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowSwahili(!showSwahili)}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {showSwahili ? "Switch to English" : "Badili lugha"}
            </button>
          </div>

          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 font-gordquick">
            {showSwahili ? translations.welcome.sw : translations.welcome.en}
          </h1>
          <div className="text-lg text-gray-600 mb-12 font-aspekta font-[250]">
            {showSwahili ? translations.subtitle.sw : translations.subtitle.en}
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                {showSwahili ? translations.progress.sw : translations.progress.en}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {completedSteps} {showSwahili ? translations.of.sw : translations.of.en} {totalSteps} {showSwahili ? translations.completed.sw : translations.completed.en}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <ActionButton
              icon={BiBook}
              step="about"
              completed={completed.about}
              onClick={() => toggleStep('about')}
              translations={translations.steps.about}
              isActive={activeSection === 'about'}
            />
            {activeSection === 'about' && renderActiveSection()}
            
            <ActionButton
              icon={BiDownload}
              step="install"
              completed={completed.install}
              onClick={() => toggleStep('install')}
              translations={translations.steps.install}
              isActive={activeSection === 'install'}
            />
            {activeSection === 'install' && renderActiveSection()}
            
            <ActionButton
              icon={BiCode}
              step="typescript"
              completed={completed.typescript}
              onClick={() => toggleStep('typescript')}
              translations={translations.steps.typescript}
              isActive={activeSection === 'typescript'}
            />
            {activeSection === 'typescript' && renderActiveSection()}
          </div>

          {/* Continue Button */}
          <div className="flex justify-end mt-12">
            <Link 
              href="/configbuilder" 
              className={`
                px-8 py-4 rounded-xl font-aspekta font-[700] text-lg 
                transition-all duration-300 shadow-lg
                ${completedSteps === totalSteps 
                  ? 'bg-primary text-white hover:bg-primary/90 cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
              onClick={(e) => completedSteps !== totalSteps && e.preventDefault()}
            >
              {showSwahili ? translations.continue.sw : translations.continue.en} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}