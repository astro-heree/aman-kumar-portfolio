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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="container-max section-padding py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Aman Kumar
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                About
              </Link>
              <Link href="#education" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                Education
              </Link>
              <Link href="#experience" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                Experience
              </Link>
              <Link href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                Skills
              </Link>
              <Link href="#coding" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                Coding
              </Link>
              <Link href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                Projects
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
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

      {/* Education Section */}
      <Education />

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Coding Section */}
      <Coding />

      {/* Projects Section */}
      <section id="projects" className="py-20 section-padding">
        <div className="container-max">
          <div className="section-container">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="glow-card group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Call Agent Platform</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Microservice-based AI platform supporting Hindi and English languages for automated customer service.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-md border border-blue-700/50">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-md border border-purple-700/50">
                      FastAPI
                    </span>
                    <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded-md border border-green-700/50">
                      AI/ML
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm font-medium">80% efficiency boost</span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>

              {/* Project 2 */}
              <div className="glow-card group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 3l3.09 6.26L22 10.27l-5 4.87 1.18 6.88L13 19.77l-6.18 3.25L8 16.14 3 11.27l6.91-1.01L13 3z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Speech Processing Pipeline</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Real-time speech recognition and processing system with optimized performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-md border border-blue-700/50">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-md border border-purple-700/50">
                      WebSocket
                    </span>
                    <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded-md border border-green-700/50">
                      Redis
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm font-medium">35% faster processing</span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>

              {/* Project 3 */}
              <div className="glow-card group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Full-Stack Web Application</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Modern web application with responsive design and seamless user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-md border border-blue-700/50">
                      React
                    </span>
                    <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-md border border-purple-700/50">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded-md border border-green-700/50">
                      MongoDB
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm font-medium">Modern & Responsive</span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
