'use client';
import { useState } from 'react';
import { BiCheck, BiRightArrowAlt } from 'react-icons/bi';

export function ActionButton({ 
  icon: Icon, 
  step, 
  completed, 
  onClick, 
  translations,
  initialLanguage = 'en' // Add this prop
}) {
  const [showSwahili, setShowSwahili] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setShowSwahili(true)}
      onMouseLeave={() => setShowSwahili(false)}
      className="w-full group relative flex items-center justify-between p-6 bg-white hover:bg-gray-50 
                rounded-xl shadow-sm border-2 border-gray-100 transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            {/* Add keys to help React track changes */}
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
      <div className="flex items-center space-x-4">
        {completed ? (
          <BiCheck className="w-6 h-6 text-green-500" />
        ) : (
          <BiRightArrowAlt className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
        )}
      </div>
    </button>
  );
}