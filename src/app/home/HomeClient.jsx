'use client';
// app/home/HomeClient.jsx
import Link from 'next/link'
import { useEffect, useState } from 'react'

const GeometricShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Original shapes */}
    <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
    <div className="absolute bottom-40 right-20 w-32 h-32 bg-tertiary/20 rounded-full animate-float-slow" />
    <div className="absolute top-40 right-40 w-16 h-16 bg-secondary rotate-45 animate-spin-slow" />
    
    {/* New decorative elements */}
    <div className="absolute top-32 left-1/4 w-8 h-8 border-4 border-primary/30 rounded-full animate-bounce-slow" />
    <div className="absolute bottom-20 left-40 w-24 h-3 bg-tertiary/20 rotate-12" />
    <div className="absolute top-60 right-1/3 w-12 h-12 border-2 border-secondary rotate-45 animate-pulse" />
    
    {/* Dots pattern */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-20 left-1/3 w-2 h-2 bg-primary/40 rounded-full" />
      <div className="absolute top-40 left-2/3 w-2 h-2 bg-tertiary/40 rounded-full" />
      <div className="absolute top-60 left-1/4 w-2 h-2 bg-secondary/40 rounded-full" />
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-primary/40 rounded-full" />
    </div>
    
    {/* Grid lines */}
    <div className="absolute right-0 top-0 w-32 h-32 opacity-10">
      <div className="border-r-2 border-primary h-full absolute right-0" />
      <div className="border-r-2 border-primary h-full absolute right-8" />
      <div className="border-r-2 border-primary h-full absolute right-16" />
      <div className="border-r-2 border-primary h-full absolute right-24" />
    </div>
    
    {/* Curved lines */}
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary/20" />
      <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-tertiary/20" />
    </svg>
    
    {/* Code-like symbols */}
    <div className="absolute top-10 right-10 font-mono text-4xl text-primary/20 animate-pulse">{`{ }`}</div>
    <div className="absolute bottom-20 left-20 font-mono text-2xl text-tertiary/20 animate-pulse">{`</>`}</div>
  </div>
)

const FloatingCodeBlocks = () => (
    <>
      <div className="absolute -bottom-10 right-0 max-w-xs p-4 bg-white/80 backdrop-blur-sm 
                    rounded-lg shadow-xl transform rotate-2 hidden lg:block font-aspekta font-[250] text-sm">
        <pre className="text-left text-gray-600">
          <code>{`import { wagmi } from './config'
  // Build faster 🚀`}</code>
        </pre>
      </div>
      <div className="absolute top-20 -left-10 max-w-xs p-4 bg-white/80 backdrop-blur-sm 
                    rounded-lg shadow-xl transform -rotate-3 hidden lg:block font-aspekta font-[250] text-sm">
        <pre className="text-left text-gray-600">
          <code>{`// No code needed! 
  export default wagmi`}</code>
        </pre>
      </div>
    </>
  )
  
  export default function HomeClient() {
    const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
      console.log('Component mounted');
      setIsMounted(true);
    }, []);
  
    console.log('Rendering HomeClient, isMounted:', isMounted);
  
    if (!isMounted) {
      console.log('Returning loading state');
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl">Loading...</div>
        </div>
      );
    }
  
    return (
      <main className="min-h-screen bg-secondary/10 relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-secondary/20" />
        
        {/* Pattern background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(79, 135, 177, 0.08) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <GeometricShapes />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="py-20 sm:py-32 flex flex-col items-center text-center relative">
            {/* Main heading */}
            <h1 className="font-gordquick text-6xl sm:text-8xl text-gray-900 mb-4 tracking-tight">
              <span className="block transform -rotate-2 text-primary hover:rotate-0 transition-transform cursor-default">
                Build
              </span>
              <span className="block transform rotate-2 mt-2 hover:rotate-0 transition-transform cursor-default">
                WAGMI
              </span>
              <span className="block transform -rotate-1 text-tertiary mt-2 text-5xl sm:text-7xl hover:rotate-0 transition-transform cursor-default">
                No-Code!
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="space-y-4 mb-12 mt-8 font-aspekta">
              <div className="text-xl sm:text-2xl text-gray-600 font-[250]">
                Easily generate web3 code blocks and export WAGMI files
              </div>
              <div className="text-lg text-gray-500 font-[150] transform -rotate-1">
                Unda kwa urahisi vipande vya msimbo wa web3
              </div>
            </div>
  
            {/* CTA Buttons */}
            <div className="flex gap-6 relative">
              <Link 
                href="/intro" 
                className="group px-8 py-4 bg-primary text-white rounded-2xl 
                        font-aspekta font-[700] text-lg transform hover:scale-105 
                        hover:-rotate-2 transition-all shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Try Now →</span>
                <div className="absolute inset-0 bg-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <Link 
                href="/intro" 
                className="group px-8 py-4 bg-secondary text-tertiary rounded-2xl 
                        font-aspekta font-[700] text-lg transform hover:scale-105 
                        hover:rotate-2 transition-all shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Jaribu Sasa →</span>
                <div className="absolute inset-0 bg-secondary-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </div>
  
            <FloatingCodeBlocks />
          </div>
        </div>
      </main>
    );
  }