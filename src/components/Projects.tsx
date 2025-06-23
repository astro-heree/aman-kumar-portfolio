import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  UsersIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

export default function Projects() {
  return (
    <section id="projects" className="py-20 section-padding bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container-max">
        <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Featured Project</h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              A showcase of innovative real-time collaboration technology
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop Layout - Hidden on mobile */}
            <div className="hidden md:block">
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
                    <a 
                      href="https://github.com/astro-heree/Code-Together" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors"
                    >
                      <span className="text-sm font-medium">GitHub</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Visible only on mobile */}
            <div className="block md:hidden">
              <div className="glow-card p-4">
                {/* Mobile Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CodeBracketIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Code Together</h3>
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full border border-blue-700/50 font-medium">
                    Personal Project
                  </span>
                  <p className="text-slate-400 text-sm mt-2">Real-time Collaboration Platform</p>
                </div>

                {/* Mobile Description */}
                <div className="mb-6">
                  <p className="text-slate-300 text-base leading-relaxed text-center">
                    A sophisticated real-time collaborative code editor that enables multiple developers to write, edit, and debug code simultaneously. Built with modern web technologies to provide seamless pair programming and team coding experiences with integrated communication features.
                  </p>
                </div>

                {/* Mobile Stats */}
                <div className="mb-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-3">
                      <UsersIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Project Achievements</h4>
                    <p className="text-slate-400 text-sm">Real-world impact and technical accomplishments</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-xl border border-slate-700/30">
                      <div>
                        <p className="text-white font-medium text-sm">Concurrent Users</p>
                        <p className="text-slate-400 text-xs">Maximum supported per session</p>
                      </div>
                      <div className="text-xl font-bold text-blue-400">10+</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-xl border border-slate-700/30">
                      <div>
                        <p className="text-white font-medium text-sm">Real-time Latency</p>
                        <p className="text-slate-400 text-xs">Average synchronization delay</p>
                      </div>
                      <div className="text-xl font-bold text-green-400">&lt;100ms</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-xl border border-slate-700/30">
                      <div>
                        <p className="text-white font-medium text-sm">Code Languages</p>
                        <p className="text-slate-400 text-xs">Supported programming languages</p>
                      </div>
                      <div className="text-xl font-bold text-yellow-400">4</div>
                    </div>
                  </div>
                </div>

                {/* Mobile Core Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white flex items-center justify-center gap-2 mb-4">
                    <SignalIcon className="w-5 h-5 text-blue-400" />
                    Core Features
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-medium text-sm">Multi-language Support</p>
                        <p className="text-slate-400 text-xs">JavaScript, Python, Java, C++</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-medium text-sm">Real-time Synchronization</p>
                        <p className="text-slate-400 text-xs">Instant code changes across all users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-medium text-sm">Advanced Code Editor</p>
                        <p className="text-slate-400 text-xs">Syntax highlighting, autocomplete, themes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-medium text-sm">Integrated Communication</p>
                        <p className="text-slate-400 text-xs">Voice, video, and text chat</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-medium text-sm">Session Management</p>
                        <p className="text-slate-400 text-xs">Create, join, and manage coding sessions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-medium text-sm">Conflict Resolution</p>
                        <p className="text-slate-400 text-xs">Smart handling of simultaneous edits</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-base font-semibold text-white mb-3 text-center">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-lg border border-blue-700/50">
                      React.js
                    </span>
                    <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-lg border border-purple-700/50">
                      Socket.io
                    </span>
                    <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded-lg border border-green-700/50">
                      Express.js
                    </span>
                    <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 text-xs rounded-lg border border-yellow-700/50">
                      LiveKit
                    </span>
                    <span className="px-2 py-1 bg-red-900/50 text-red-300 text-xs rounded-lg border border-red-700/50">
                      WebRTC
                    </span>
                    <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 text-xs rounded-lg border border-indigo-700/50">
                      CodeMirror
                    </span>
                  </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-slate-700/50">
                  <div className="text-center">
                    <span className="text-green-400 font-medium flex items-center justify-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Real-time Collaboration Platform
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://code-together-qxbl.onrender.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors w-full"
                    >
                      <span className="text-sm font-medium">Live Demo</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://github.com/astro-heree/Code-Together" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors w-full"
                    >
                      <span className="text-sm font-medium">GitHub</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 