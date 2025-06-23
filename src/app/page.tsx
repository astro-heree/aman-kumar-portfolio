import Link from "next/link";
import { 
  CalendarIcon,
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/outline";

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
  return (
    <main className="min-h-screen bg-slate-900 relative">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50 shadow-lg">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">
              Aman Kumar
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto mr-0">
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

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
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
