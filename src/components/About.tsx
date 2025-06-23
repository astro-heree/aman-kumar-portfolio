import { 
  AcademicCapIcon,
  TrophyIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section id="about" className="py-20 section-padding bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container-max">
        <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Passionate software engineer crafting innovative solutions at the intersection of AI and technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="glow-card">
                <div className="flex items-center gap-3 mb-6">
                  <SparklesIcon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-semibold text-white">My Journey</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  My journey in software engineering began with a curiosity for problem-solving and has evolved into a passion for building 
                  <span className="text-blue-400 font-semibold"> AI-powered solutions</span> that make a real impact. Currently working as a 
                  <span className="text-green-400 font-semibold"> Software Engineer at Iksha Labs</span>, I&apos;ve been at the forefront of 
                  developing cutting-edge conversational AI systems.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  From building comprehensive interview platforms during my internship to now architecting 
                  <span className="text-purple-400 font-semibold"> microservice-based AI call agent platforms</span> supporting multiple languages, 
                  I focus on creating solutions that bridge complex technology with user-friendly experiences. What drives me is the intersection of 
                  <span className="text-yellow-400 font-semibold"> artificial intelligence</span>, 
                  <span className="text-pink-400 font-semibold"> scalable architecture</span>, and 
                  <span className="text-cyan-400 font-semibold"> performance optimization</span>.
                </p>

                {/* Enhanced Impact Stats */}
                {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                    <div className="text-2xl font-bold text-blue-400 mb-1">80%</div>
                    <div className="text-xs text-slate-400">Manual Call<br/>Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                    <div className="text-2xl font-bold text-purple-400 mb-1">35%</div>
                    <div className="text-xs text-slate-400">Faster Speech<br/>Processing</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-colors">
                    <div className="text-2xl font-bold text-green-400 mb-1">99%</div>
                    <div className="text-xs text-slate-400">Upload Success<br/>Rate</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-yellow-500/50 transition-colors">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">95%</div>
                    <div className="text-xs text-slate-400">Development<br/>Time Saved</div>
                  </div>
                </div> */}
              </div>

              {/* Core Values */}
             <div className="glow-card">
                <div className="flex items-center gap-3 mb-6">
                  <LightBulbIcon className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-semibold text-white">Core Values</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ChartBarIcon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Performance First</h4>
                      <p className="text-slate-300 text-sm">Every optimization matters - from 70% database query improvements to 40% faster processing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RocketLaunchIcon className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Scalable Innovation</h4>
                      <p className="text-slate-300 text-sm">Building systems that grow - from 50+ REST APIs to multi-repository architectures</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <SparklesIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">User-Centric Design</h4>
                      <p className="text-slate-300 text-sm">Technology should empower users - reducing workloads and improving experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Education & Achievements */}
            <div className="space-y-8">
              {/* Education */}
              <div className="glow-card">
                <div className="flex items-center gap-3 mb-6">
                  <AcademicCapIcon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="ml-6">
                      <h4 className="font-semibold text-white text-lg">BTech in Computer Science</h4>
                      <p className="text-blue-400 font-medium">Vellore Institute of Technology</p>
                      <p className="text-slate-300 text-sm mb-2">2020 - 2024</p>
                      <div className="flex items-center gap-2">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          CGPA: 8.97/10.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="glow-card">
                <div className="flex items-center gap-3 mb-6">
                  <TrophyIcon className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-semibold text-white">Achievements</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">3rd Place - AdVITya Competition</h4>
                      <p className="text-slate-300 text-sm">Secured 3rd position among 300+ participants at VIT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">LeetCode Expert</h4>
                      <p className="text-slate-300 text-sm">Rating: 1725 | 100+ days coding streak</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">500+ Problems Solved</h4>
                      <p className="text-slate-300 text-sm">Across LeetCode, GeeksForGeeks, and Codeforces</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="glow-card border-2 border-gradient-to-r from-blue-500 to-purple-500">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fun Fact</h3>
                  <p className="text-slate-300 text-sm">
                    I believe in writing code that not only works but tells a story. 
                    Every line should have a purpose, every function a clear mission!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 