import { 
  AcademicCapIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-max">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Building the Future with Code
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Currently working as a Software Engineer at Iksha Labs, where I've developed 
                a microservice-based AI call agent platform supporting Hindi and English languages, 
                reducing manual call handling by 80%.
              </p>
              <p className="text-slate-300 mb-4 leading-relaxed">
                I specialize in architecting multi-repository systems, optimizing speech processing 
                pipelines, and designing scalable database schemas. My work focuses on creating 
                innovative solutions that bridge the gap between complex technology and real-world applications.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-4 skill-card-enhanced">
                  <div className="text-2xl font-bold text-blue-400">80%</div>
                  <div className="text-sm text-slate-400">Reduced Manual Work</div>
                </div>
                <div className="text-center p-4 skill-card-enhanced">
                  <div className="text-2xl font-bold text-purple-400">35%</div>
                  <div className="text-sm text-slate-400">Faster Processing</div>
                </div>
              </div>
            </div>
            <div>
              <div className="glow-card mb-4">
                <h4 className="text-xl font-semibold mb-4 text-white">Quick Overview</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AcademicCapIcon className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h5 className="font-medium text-white">BTech in Computer Science</h5>
                      <p className="text-slate-300">Vellore Institute of Technology</p>
                      <p className="text-sm text-slate-400">CGPA: 8.97/10.00 • 2020-2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glow-card">
                <h4 className="text-xl font-semibold mb-4 text-white">Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <TrophyIcon className="w-5 h-5 text-yellow-400 mt-1" />
                    <div className="text-sm">
                      <p className="font-medium text-white">3rd Place - AdVITya at VIT</p>
                      <p className="text-slate-400">Among 300+ participants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon className="w-5 h-5 text-yellow-400 mt-1" />
                    <div className="text-sm">
                      <p className="font-medium text-white">LeetCode Rating: 1725</p>
                      <p className="text-slate-400">100+ days coding challenge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon className="w-5 h-5 text-yellow-400 mt-1" />
                    <div className="text-sm">
                      <p className="font-medium text-white">500+ Problem Solver</p>
                      <p className="text-slate-400">LeetCode, GeeksForGeeks, Codeforces</p>
                    </div>
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