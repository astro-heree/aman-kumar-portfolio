import Link from "next/link";
import { 
  CalendarIcon,
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/outline";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

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
      <section id="education" className="py-20 section-padding">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Education</h2>
          <div className="space-y-8">
            {/* Bachelor's Degree */}
            <div className="dark-card dark-card-hover p-8 rounded-2xl card-hover">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Technology</h3>
                      <p className="text-xl text-slate-300 mb-2">Computer Science and Engineering</p>
                      <p className="text-blue-400 font-semibold">Vellore Institute of Technology</p>
                    </div>
                    <div className="text-right mt-4 lg:mt-0">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span>2020 - 2024</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">CGPA: 8.97/10.00</div>
                    </div>
                  </div>
                  <div className="text-slate-300 mb-4">
                    <p className="mb-2">Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and system design.</p>
                    <p>Specialized in full-stack development, machine learning, and database management systems.</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50">
                      Data Structures & Algorithms
                    </span>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/50">
                      Software Engineering
                    </span>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm border border-green-700/50">
                      Database Management
                    </span>
                    <span className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-sm border border-orange-700/50">
                      Machine Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className="dark-card dark-card-hover p-8 rounded-2xl card-hover">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Higher Secondary Education</h3>
                      <p className="text-xl text-slate-300 mb-2">Science (PCM - Physics, Chemistry, Mathematics)</p>
                      <p className="text-green-400 font-semibold">Central Board of Secondary Education</p>
                    </div>
                    <div className="text-right mt-4 lg:mt-0">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span>2018 - 2020</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">93%</div>
                      <div className="text-sm text-slate-400">Top 1% in District</div>
                    </div>
                  </div>
                  <div className="text-slate-300 mb-4">
                    <p>Strong foundation in mathematics, physics, and chemistry with focus on analytical thinking and problem-solving skills.</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50">
                      Mathematics
                    </span>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/50">
                      Physics
                    </span>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm border border-green-700/50">
                      Chemistry
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="dark-card dark-card-hover p-8 rounded-2xl card-hover">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">High School Education</h3>
                      <p className="text-xl text-slate-300 mb-2">Secondary School Certificate</p>
                      <p className="text-orange-400 font-semibold">Central Board of Secondary Education</p>
                    </div>
                    <div className="text-right mt-4 lg:mt-0">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span>2018</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">95%</div>
                    </div>
                  </div>
                  <div className="text-slate-300 mb-4">
                    <p>Excellent academic performance with strong foundation in core subjects including mathematics, science, and English.</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50">
                      Mathematics
                    </span>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/50">
                      Science
                    </span>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm border border-green-700/50">
                      English
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 section-padding bg-slate-800/30">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Professional Experience</h2>
          <div className="space-y-8">
            {/* Current Role */}
            <div className="dark-card dark-card-hover p-8 rounded-2xl card-hover">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Software Engineer</h3>
                  <p className="text-xl text-blue-400 font-semibold mb-2">Iksha Labs</p>
                  <div className="flex items-center gap-2 text-slate-400">
                    <CalendarIcon className="w-5 h-5" />
                    <span>October 2024 - Present</span>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="px-4 py-2 bg-green-900/50 text-green-300 rounded-full text-sm border border-green-700/50">
                    Current Position
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-slate-300 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p>Developed a microservice-based AI call agent platform supporting Hindi and English languages, reducing manual call handling by 80% and improving customer response time.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p>Architected multi-repository system with optimized speech processing pipeline, accelerating audio processing by 35% through efficient data flow design.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p>Designed and implemented scalable database schema and RESTful APIs, supporting high-volume concurrent operations with 99.9% uptime.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50">AI/ML</span>
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/50">Microservices</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm border border-green-700/50">REST APIs</span>
                <span className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-sm border border-orange-700/50">Database Design</span>
              </div>
            </div>

            {/* Previous Role */}
            <div className="dark-card dark-card-hover p-8 rounded-2xl card-hover">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Software Engineer Intern</h3>
                  <p className="text-xl text-blue-400 font-semibold mb-2">Iksha Labs</p>
                  <div className="flex items-center gap-2 text-slate-400">
                    <CalendarIcon className="w-5 h-5" />
                    <span>July 2024 - September 2024</span>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="px-4 py-2 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600">
                    3 Months
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-slate-300 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p>Contributed to the development of AI-powered call management system, focusing on backend infrastructure and API development.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p>Implemented data processing pipelines and optimized database queries, improving system performance and reliability.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p>Collaborated with cross-functional teams to deliver features on schedule and maintain code quality standards.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50">Backend Development</span>
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/50">API Development</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm border border-green-700/50">Data Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section id="projects" className="py-20 section-padding bg-slate-800/30">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
          <div className="space-y-8">
            {/* Code Together Project */}
            <div className="dark-card dark-card-hover p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Code Together</h3>
                  <p className="text-slate-300">React.js, Socket.io, Express.js, LiveKit</p>
                </div>
                <Link href="https://github.com" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 lg:mt-0">
                  <span>View on GitHub</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              </div>
              <ul className="space-y-4 text-slate-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Engineered real-time collaborative code editor supporting 4 programming languages with Socket.io integration, reducing latency by 30% and improving session join time by 25%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Integrated LiveKit WebRTC solution for audio and video streaming, accelerating collaborative debugging by 35% and enabling seamless team communication.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Integrated CodeMirror editor with advanced features including syntax highlighting, auto-completion and bracket matching reducing syntax errors by 35%.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Real-time Collaboration', 'WebRTC', 'Socket.io', 'Code Editor', 'Video Chat'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Algorithm Visualizer Project */}
            <div className="dark-card dark-card-hover p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Algorithm Visualizer & Explainer</h3>
                  <p className="text-slate-300">Python, Flask, React.js, TensorFlow, D3.js</p>
                </div>
                <Link href="https://github.com" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 lg:mt-0">
                  <span>View on GitHub</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              </div>
              <ul className="space-y-4 text-slate-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Developed an intelligent algorithm visualization platform using AI to generate step-by-step explanations, improving algorithm comprehension by 60% for computer science students and professionals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Implemented machine learning models with TensorFlow to analyze algorithm complexity patterns and provide personalized learning recommendations, increasing user engagement by 45%.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['AI/ML', 'Algorithm Visualization', 'TensorFlow', 'Educational Technology', 'Interactive Learning'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 section-padding bg-slate-900 border-t border-slate-700/50">
        <div className="container-max">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">Aman Kumar</h3>
            <p className="text-slate-400 mb-6">
              Building the future with code, one project at a time.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <Link href="mailto:ashudev0987@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                Email
              </Link>
              <Link href="https://github.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                GitHub
              </Link>
              <Link href="https://linkedin.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                LinkedIn
              </Link>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 Aman Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
