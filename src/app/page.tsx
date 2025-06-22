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
