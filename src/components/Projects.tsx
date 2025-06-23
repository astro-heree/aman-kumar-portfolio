import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  UsersIcon,
  SignalIcon
} from "@heroicons/react/24/outline";

export default function Projects() {
  return (
    <section id="projects" className="py-20 section-padding bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container-max">
        <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Project</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A showcase of innovative real-time collaboration technology
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Code Together Project */}
            <div className="glow-card">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Project Info */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <CodeBracketIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Code Together</h3>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full border border-blue-700/50 font-medium">
                          Personal Project
                        </span>
                        <span className="text-slate-400 text-sm">Real-time Collaboration Platform</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed">
                    A sophisticated real-time collaborative code editor that enables multiple developers to write, edit, and debug code simultaneously. 
                    Built with modern web technologies to provide seamless pair programming and team coding experiences with integrated communication features.
                  </p>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                      <SignalIcon className="w-6 h-6 text-blue-400" />
                      Core Features
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-white font-medium">Multi-language Support</p>
                            <p className="text-slate-400 text-sm">JavaScript, Python, Java, C++</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-white font-medium">Real-time Synchronization</p>
                            <p className="text-slate-400 text-sm">Instant code changes across all users</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-white font-medium">Advanced Code Editor</p>
                            <p className="text-slate-400 text-sm">Syntax highlighting, autocomplete, themes</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-white font-medium">Integrated Communication</p>
                            <p className="text-slate-400 text-sm">Voice, video, and text chat</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-white font-medium">Session Management</p>
                            <p className="text-slate-400 text-sm">Create, join, and manage coding sessions</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-white font-medium">Conflict Resolution</p>
                            <p className="text-slate-400 text-sm">Smart handling of simultaneous edits</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-2 bg-blue-900/50 text-blue-300 text-sm rounded-lg border border-blue-700/50 hover:border-blue-600/50 transition-colors">
                        React.js
                      </span>
                      <span className="px-3 py-2 bg-purple-900/50 text-purple-300 text-sm rounded-lg border border-purple-700/50 hover:border-purple-600/50 transition-colors">
                        Socket.io
                      </span>
                      <span className="px-3 py-2 bg-green-900/50 text-green-300 text-sm rounded-lg border border-green-700/50 hover:border-green-600/50 transition-colors">
                        Express.js
                      </span>
                      <span className="px-3 py-2 bg-yellow-900/50 text-yellow-300 text-sm rounded-lg border border-yellow-700/50 hover:border-yellow-600/50 transition-colors">
                        LiveKit
                      </span>
                      <span className="px-3 py-2 bg-red-900/50 text-red-300 text-sm rounded-lg border border-red-700/50 hover:border-red-600/50 transition-colors">
                        WebRTC
                      </span>
                      <span className="px-3 py-2 bg-indigo-900/50 text-indigo-300 text-sm rounded-lg border border-indigo-700/50 hover:border-indigo-600/50 transition-colors">
                        CodeMirror
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Project Highlights */}
                <div className="space-y-6">
                  {/* Project Showcase */}
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 border border-slate-700/50">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                        <UsersIcon className="w-10 h-10" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Project Achievements</h4>
                      <p className="text-slate-400 text-sm">Real-world impact and technical accomplishments</p>
                    </div>
                    
                    {/* Achievement Stats */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/30">
                        <div>
                          <p className="text-white font-semibold">Concurrent Users</p>
                          <p className="text-slate-400 text-sm">Maximum supported per session</p>
                        </div>
                        <div className="text-2xl font-bold text-blue-400">10+</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/30">
                        <div>
                          <p className="text-white font-semibold">Real-time Latency</p>
                          <p className="text-slate-400 text-sm">Average synchronization delay</p>
                        </div>
                        <div className="text-2xl font-bold text-green-400">&lt;100ms</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/30">
                        <div>
                          <p className="text-white font-semibold">Code Languages</p>
                          <p className="text-slate-400 text-sm">Supported programming languages</p>
                        </div>
                        <div className="text-2xl font-bold text-yellow-400">4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700/50">
                <div className="flex items-center gap-4">
                  <span className="text-green-400 font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Real-time Collaboration Platform
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://code-together-qxbl.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <span className="text-sm font-medium">Live Demo</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors">
                    <span className="text-sm font-medium">GitHub</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 