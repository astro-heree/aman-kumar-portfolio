'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Coding from "@/components/Coding";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  const [particles, setParticles] = useState<Array<{left: string; animationDelay: string; animationDuration: string}>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = [...Array(25)].map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 20}s`,
      animationDuration: `${20 + Math.random() * 10}s`
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 relative">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50 shadow-lg">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 z-10">
              Aman Kumar
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="#about" className="nav-link">
                About
              </Link>
              <Link href="#experience" className="nav-link">
                Experience
              </Link>
              <Link href="#skills" className="nav-link">
                Skills
              </Link>
              <Link href="#projects" className="nav-link">
                Projects
              </Link>
              <Link href="#coding" className="nav-link">
                Coding
              </Link>
              <Link href="#education" className="nav-link">
                Education
              </Link>
              <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button - Improved */}
            <button 
              className="md:hidden relative z-10 text-slate-300 hover:text-white transition-colors duration-200 p-3 -m-1 rounded-lg hover:bg-slate-800/50 active:bg-slate-700/50"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                const button = document.querySelector('[data-mobile-menu-button]');
                if (mobileMenu && button) {
                  mobileMenu.classList.toggle('hidden');
                  // Add visual feedback
                  button.classList.toggle('text-blue-400');
                }
              }}
              data-mobile-menu-button
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu - Improved */}
          <div id="mobile-menu" className="hidden md:hidden">
            <div className="pt-4 pb-4 space-y-1 border-t border-slate-700/30 mt-3">
              <Link 
                href="#about" 
                className="nav-link block py-3 px-4 rounded-lg hover:bg-slate-800/50 active:bg-slate-700/50 transition-colors duration-200" 
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  const button = document.querySelector('[data-mobile-menu-button]');
                  if (mobileMenu && button) {
                    mobileMenu.classList.add('hidden');
                    button.classList.remove('text-blue-400');
                  }
                }}
              >
                About
              </Link>
              <Link 
                href="#experience" 
                className="nav-link block py-3 px-4 rounded-lg hover:bg-slate-800/50 active:bg-slate-700/50 transition-colors duration-200" 
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  const button = document.querySelector('[data-mobile-menu-button]');
                  if (mobileMenu && button) {
                    mobileMenu.classList.add('hidden');
                    button.classList.remove('text-blue-400');
                  }
                }}
              >
                Experience
              </Link>
              <Link 
                href="#skills" 
                className="nav-link block py-3 px-4 rounded-lg hover:bg-slate-800/50 active:bg-slate-700/50 transition-colors duration-200" 
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  const button = document.querySelector('[data-mobile-menu-button]');
                  if (mobileMenu && button) {
                    mobileMenu.classList.add('hidden');
                    button.classList.remove('text-blue-400');
                  }
                }}
              >
                Skills
              </Link>
              <Link 
                href="#projects" 
                className="nav-link block py-3 px-4 rounded-lg hover:bg-slate-800/50 active:bg-slate-700/50 transition-colors duration-200" 
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  const button = document.querySelector('[data-mobile-menu-button]');
                  if (mobileMenu && button) {
                    mobileMenu.classList.add('hidden');
                    button.classList.remove('text-blue-400');
                  }
                }}
              >
                Projects
              </Link>
              <Link 
                href="#coding" 
                className="nav-link block py-3 px-4 rounded-lg hover:bg-slate-800/50 active:bg-slate-700/50 transition-colors duration-200" 
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  const button = document.querySelector('[data-mobile-menu-button]');
                  if (mobileMenu && button) {
                    mobileMenu.classList.add('hidden');
                    button.classList.remove('text-blue-400');
                  }
                }}
              >
                Coding
              </Link>
              <Link 
                href="#education" 
                className="nav-link block py-3 px-4 rounded-lg hover:bg-slate-800/50 active:bg-slate-700/50 transition-colors duration-200" 
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  const button = document.querySelector('[data-mobile-menu-button]');
                  if (mobileMenu && button) {
                    mobileMenu.classList.add('hidden');
                    button.classList.remove('text-blue-400');
                  }
                }}
              >
                Education
              </Link>
              <Link 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 mt-3 block" 
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  const button = document.querySelector('[data-mobile-menu-button]');
                  if (mobileMenu && button) {
                    mobileMenu.classList.add('hidden');
                    button.classList.remove('text-blue-400');
                  }
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Coding Section */}
      <Coding />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer /> 
    </main>
  );
}
