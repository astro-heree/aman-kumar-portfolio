export default function Coding() {
  const competitivePlatforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/astro-here",
      color: "hover:bg-orange-600 hover:border-orange-500",
      description: "Algorithm Challenges",
      stats: "Active Problem Solver"
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/astro-here",
      color: "hover:bg-blue-600 hover:border-blue-500",
      description: "Competitive Programming",
      stats: "Contest Participant"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/astro-here",
      color: "hover:bg-yellow-600 hover:border-yellow-500",
      description: "Monthly Contests",
      stats: "303+ Problems Solved"
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/astrohere/",
      color: "hover:bg-green-600 hover:border-green-500",
      description: "DSA Practice",
      stats: "205+ Problems Solved"
    }
  ];

  const typingPlatforms = [
    {
      name: "TypeRacer",
      url: "https://data.typeracer.com/pit/profile?user=astro_here",
      color: "hover:bg-indigo-600 hover:border-indigo-500",
      description: "Speed Typing Races"
    },
    {
      name: "Monkeytype",
      url: "https://monkeytype.com/profile/Astro_here",
      color: "hover:bg-purple-600 hover:border-purple-500",
      description: "Typing Speed Practice"
    }
  ];

  return (
    <section id="coding" className="py-20 section-padding">
      <div className="container-max">
        <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight py-2">
              Problem Solving & Programming
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Passionate about algorithmic problem solving and competitive programming. 
              Continuously sharpening skills through regular practice and contest participation.
            </p>
          </div>

          {/* Competitive Programming Platforms */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-slate-300 mb-6 text-center">
              🏆 Competitive Programming Platforms
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {competitivePlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`skill-card-enhanced ${platform.color} text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105 group`}
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2">{platform.name}</h4>
                    <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors mb-2">
                      {platform.description}
                    </p>
                    <p className="text-xs text-blue-400 group-hover:text-blue-300 font-medium">
                      {platform.stats}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Typing Speed Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-slate-300 mb-6 text-center">
              ⌨️ Typing & Speed Training
            </h3>
            
            {/* Typing Platforms */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                {typingPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`skill-card-enhanced ${platform.color} text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105 group`}
                  >
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">{platform.name}</h4>
                      <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                        {platform.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="glow-card">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  📊 Problem Solving Stats
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong>500+</strong> problems solved across multiple platforms with focus on 
                  data structures, algorithms, and competitive programming challenges.
                </p>
              </div>
              <div className="glow-card">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  🎯 Continuous Growth
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Regular participation in coding contests and maintaining consistent practice 
                  to improve problem-solving speed and algorithmic thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 