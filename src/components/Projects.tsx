import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Projects() {
  return (
    <section id="projects" className="py-10 section-padding">
      <div className="container-max">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Code Together Project */}
            <div className="glow-card group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Code Together</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Engineered real-time collaborative code editor supporting 4 programming languages with Socket.io integration, reducing latency by 30% and improving session join time by 25%.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Key Features:</h4>
                    <ul className="text-xs text-slate-400 space-y-1">
                      <li>• Real-time collaborative editing</li>
                      <li>• 4 programming languages support</li>
                      <li>• Integrated audio and video streaming</li>
                      <li>• Advanced CodeMirror editor features</li>
                      <li>• Seamless team communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Impact:</h4>
                    <ul className="text-xs text-slate-400 space-y-1">
                      <li>• 30% latency reduction</li>
                      <li>• 25% faster session join time</li>
                      <li>• 35% accelerated collaborative debugging</li>
                      <li>• 35% reduction in syntax errors</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-md border border-blue-700/50">
                    React.js
                  </span>
                  <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-md border border-purple-700/50">
                    Socket.io
                  </span>
                  <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded-md border border-green-700/50">
                    Express.js
                  </span>
                  <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 text-xs rounded-md border border-yellow-700/50">
                    LiveKit
                  </span>
                  <span className="px-2 py-1 bg-red-900/50 text-red-300 text-xs rounded-md border border-red-700/50">
                    WebRTC
                  </span>
                  <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 text-xs rounded-md border border-indigo-700/50">
                    CodeMirror
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-400 text-sm font-medium">Real-time Collaboration</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">GitHub</span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 