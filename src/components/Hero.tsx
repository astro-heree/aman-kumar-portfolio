'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const roles = [
  "Web Developer",
  "Problem Solver", 
  "Frontend Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "Software Engineer",
  "AI Enthusiast"
];

export default function Hero() {

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }, 100);
    } else if (!isDeleting && currentText.length === currentRole.length) {
      // Pause after typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      }, 50);
    } else if (isDeleting && currentText.length === 0) {
      // Move to next role
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentText, isDeleting, currentRoleIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-blue-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 border-2 border-pink-400/30 rounded-full animate-spin"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 border-2 border-green-400/30 rotate-12 animate-pulse"></div>
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Greeting with Enhanced Animation */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-300 mb-6 relative">
            <span className="wave-animation">👋</span> Hi, I&apos;m
          </h1>
          
          {/* Large Name with Glow Effect */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-tight animate-glow">
            Aman Kumar
          </h2>
        </div>

        {/* Enhanced Typewriter Role */}
        <div className="mb-16 animate-fade-in-up animation-delay-500">
          <div className="flex items-center justify-center min-h-[60px] bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
            <span className="text-2xl md:text-3xl lg:text-4xl font-light text-white">
              {currentText}
              <span 
                className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-blue-400`}
              >
                |
              </span>
            </span>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="mb-16 animate-fade-in-up animation-delay-1000">
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Specialized in AI-powered platforms, microservices architecture, and 
            enterprise developer tools. Experienced in building scalable, maintainable 
            systems with a focus on performance and reliability.
          </p>
          
          {/* Philosophy Banner */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-slate-900 rounded-2xl px-8 py-4 border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">💡</div>
                  <div className="text-center">
                    <div className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Turning Complex Problems into Elegant Solutions
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Code • Design • Innovation
                    </div>
                  </div>
                  <div className="text-2xl">✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up animation-delay-1500">
          <Link 
            href="#projects" 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link 
            href="#contact" 
            className="group bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 border-2 border-slate-600 hover:border-blue-500 relative overflow-hidden"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Enhanced Social Icons */}
        <div className="flex justify-center gap-8 mb-4 animate-fade-in-up animation-delay-2000">
          <a 
            href="https://github.com/astro-heree" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group text-slate-500 hover:text-white transition-all duration-300 transform hover:scale-110 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600"
          >
            <svg className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/astro-here" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group text-slate-500 hover:text-white transition-all duration-300 transform hover:scale-110 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600"
          >
            <svg className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="mailto:amanastro.work@gmail.com" 
            className="group text-slate-500 hover:text-white transition-all duration-300 transform hover:scale-110 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600"
          >
            <svg className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Scroll Down Indicator - Positioned below social icons */}
        <div className="flex flex-col items-center mb-8 animate-fade-in-up animation-delay-2500">
          <p className="text-slate-500 text-sm mb-2">Scroll Down</p>
          <div className="animate-bounce">
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>


    </section>
  );
} 