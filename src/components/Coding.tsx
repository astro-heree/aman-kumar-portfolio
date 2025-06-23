import Image from 'next/image';

// Import platform icons
import LeetCodeIcon from '../icons/leetcode.svg';
import CodeChefIcon from '../icons/codechef.svg';
import GeeksforGeeksIcon from '../icons/geeksforgeeks-svgrepo-com.svg';
import CodeforcesIcon from '../icons/code-forces.svg';
import MonkeytypeIcon from '../icons/monkeytype.png';
import TyperracerIcon from '../icons/TypeRacer_logo.svg.png';

export default function Coding() {
  const competitivePlatforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/astro-here",
      peakRating: "1725",
      achievement: "Peak Rating",
      contests: "50+ Contests",
      ranking: "Top 12% Globally",
      rankDetail: "83K / 707K Users",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:shadow-orange-500/20",
      bgColor: "bg-orange-500/10",
      icon: LeetCodeIcon
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/astro_here",
      peakRating: "1438",
      achievement: "2⭐ Rating",
      contests: "23 Contests",
      ranking: "Active Participant",
      rankDetail: "Consistent Performance",
      color: "from-yellow-500 to-yellow-600",
      hoverColor: "hover:shadow-yellow-500/20",
      bgColor: "bg-yellow-500/10",
      icon: CodeChefIcon
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/astrohere/",
      peakRating: "200+",
      achievement: "Problems Solved",
      contests: "Practice Focus",
      ranking: "Consistent Learner",
      rankDetail: "DSA Mastery",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:shadow-green-500/20",
      bgColor: "bg-green-500/10",
      icon: GeeksforGeeksIcon
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/astro-here",
      peakRating: "1151",
      achievement: "Peak Rating",
      contests: "Regular Participant",
      ranking: "Active Competitor",
      rankDetail: "Growing Strong",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      bgColor: "bg-blue-500/10",
      icon: CodeforcesIcon
    },
  ];

  const overallStats = [
    {
      title: "Peak LeetCode Rating",
      value: "1725",
      subtitle: "Top 12% Globally",
      icon: "🏆",
      color: "text-orange-400"
    },
    {
      title: "Total Contests",
      value: "70+",
      subtitle: "Across All Platforms",
      icon: "⚔️",
      color: "text-purple-400"
    },
    {
      title: "Problems Solved",
      value: "500+",
      subtitle: "Multi-Platform Practice",
      icon: "🎯",
      color: "text-green-400"
    },
    {
      title: "Typing Speed",
      value: "Top 5%",
      subtitle: "Global Ranking",
      icon: "⌨️",
      color: "text-blue-400"
    }
  ];

  const typingPlatforms = [
    {
      name: "TypeRacer",
      url: "https://data.typeracer.com/pit/profile?user=astro_here",
      achievement: "Top 5% Globally",
      description: "Speed Typing Champion",
      icon: TyperracerIcon,
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:shadow-indigo-500/20",
      bgColor: "bg-indigo-500/10"
    },
    {
      name: "Monkeytype",
      url: "https://monkeytype.com/profile/Astro_here",
      achievement: "High Accuracy",
      description: "Precision & Speed",
      icon: MonkeytypeIcon,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:shadow-purple-500/20",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section id="coding" className="py-8 sm:py-10 lg:py-16 section-padding">
      <div className="container-max">
        <div className="section-container section-skills">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text leading-tight py-2">
              Competitive Programming Journey
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Passionate algorithmic problem solver with consistent contest participation and strong ratings across multiple competitive programming platforms.
            </p>
          </div>

          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:block">
            {/* Overall Achievement Stats */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center text-white mb-8 flex items-center justify-center gap-3">
                <span className="text-3xl">📊</span>
                Achievement Overview
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {overallStats.map((stat, index) => (
                  <div key={index} className="glow-card text-center group hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-lg font-semibold text-white mb-1">{stat.title}</div>
                    <div className="text-sm text-slate-400">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform-Specific Achievements */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-center text-white mb-8 flex items-center justify-center gap-3">
                <span className="text-3xl">🏅</span>
                Platform Achievements
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {competitivePlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glow-card group transition-all duration-500 hover:scale-105 ${platform.hoverColor} cursor-pointer`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl ${platform.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2`}>
                          <Image 
                            src={platform.icon} 
                            alt={platform.name} 
                            width={28} 
                            height={28}
                            className="w-7 h-7 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {platform.name}
                          </h4>
                          <p className="text-sm text-slate-400">{platform.achievement}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                          {platform.peakRating}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/50">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-slate-300 mb-1">{platform.contests}</div>
                        <div className="text-xs text-slate-500">Participation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-slate-300 mb-1">{platform.ranking}</div>
                        <div className="text-xs text-slate-500">{platform.rankDetail}</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Click to view profile</span>
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Typing Speed Excellence */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-center text-white mb-8 flex items-center justify-center gap-3">
                <span className="text-3xl">⌨️</span>
                Typing Speed Excellence
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {typingPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glow-card group transition-all duration-500 hover:scale-105 ${platform.hoverColor} cursor-pointer`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl ${platform.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2`}>
                          <Image 
                            src={platform.icon} 
                            alt={platform.name} 
                            width={32} 
                            height={32}
                            className="w-7 h-7 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {platform.name}
                          </h4>
                          <p className="text-sm text-slate-400">{platform.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                          {platform.achievement}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Click to view profile</span>
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center justify-center gap-3">
                <span className="text-3xl">✨</span>
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="glow-card">
                  <div className="text-3xl mb-4">🎯</div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">
                    Competitive Excellence
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Achieved <strong>1725 peak rating</strong> on LeetCode, placing in the <strong>top 12%</strong> of all users globally through consistent practice and contest participation.
                  </p>
                </div>
                <div className="glow-card">
                  <div className="text-3xl mb-4">⚡</div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3">
                    Speed & Efficiency
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong>Top 5% globally</strong> in typing speed, demonstrating exceptional efficiency and precision that translates to faster coding and development productivity.
                  </p>
                </div>
                <div className="glow-card">
                  <div className="text-3xl mb-4">📈</div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">
                    Continuous Growth
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Participated in <strong>70+ contests</strong> across platforms with <strong>500+ problems solved</strong>, focusing on algorithmic thinking and optimization techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Visible only on mobile */}
          <div className="block md:hidden">
            {/* Mobile Achievement Overview */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-center text-white mb-4 sm:mb-6 flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">📊</span>
                Achievement Overview
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {overallStats.map((stat, index) => (
                  <div key={index} className="glow-card text-center p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl mb-2">{stat.icon}</div>
                    <div className={`text-lg sm:text-xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1">{stat.title}</div>
                    <div className="text-xs text-slate-400">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Platform Achievements */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-center text-white mb-4 sm:mb-6 flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">🏅</span>
                Platform Achievements
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {competitivePlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-card block p-3 sm:p-4 cursor-pointer"
                  >
                    {/* Mobile Platform Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${platform.bgColor} flex items-center justify-center p-1.5 sm:p-2 flex-shrink-0`}>
                          <Image 
                            src={platform.icon} 
                            alt={platform.name} 
                            width={28} 
                            height={28}
                            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm sm:text-lg font-bold text-white truncate">{platform.name}</h4>
                          <p className="text-xs text-slate-400 truncate">{platform.achievement}</p>
                        </div>
                      </div>
                      <div className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent ml-2 flex-shrink-0`}>
                        {platform.peakRating}
                      </div>
                    </div>
                    
                    {/* Mobile Platform Stats */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-slate-700/50">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-semibold text-slate-300 mb-1">{platform.contests}</div>
                        <div className="text-xs text-slate-500">Participation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-semibold text-slate-300 mb-1">{platform.ranking}</div>
                        <div className="text-xs text-slate-500">{platform.rankDetail}</div>
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:mt-3 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Click to view profile</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Typing Speed Excellence */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-center text-white mb-4 sm:mb-6 flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">⌨️</span>
                Typing Speed Excellence
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {typingPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-card block p-3 sm:p-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${platform.bgColor} flex items-center justify-center flex-shrink-0 p-1.5 sm:p-2`}>
                        <Image 
                          src={platform.icon} 
                          alt={platform.name} 
                          width={24} 
                          height={24}
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-lg font-bold text-white">{platform.name}</h4>
                        <p className="text-xs text-slate-400">{platform.description}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        {platform.achievement === "Top 5% Globally" ? (
                          <>
                            <div className="text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                              Top 5%
                            </div>
                            <div className="text-xs text-slate-400">
                              Globally
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                              High
                            </div>
                            <div className="text-xs text-slate-400">
                              Accuracy
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:mt-3 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Click to view profile</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Key Highlights */}
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">✨</span>
                Key Highlights
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="glow-card p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl mb-2 sm:mb-3">🎯</div>
                  <h4 className="text-sm sm:text-base font-semibold text-orange-400 mb-2">
                    Competitive Excellence
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Achieved <strong>1725 peak rating</strong> on LeetCode, placing in the <strong>top 12%</strong> of all users globally through consistent practice and contest participation.
                  </p>
                </div>
                <div className="glow-card p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl mb-2 sm:mb-3">⚡</div>
                  <h4 className="text-sm sm:text-base font-semibold text-yellow-400 mb-2">
                    Speed & Efficiency
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    <strong>Top 5% globally</strong> in typing speed, demonstrating exceptional efficiency and precision that translates to faster coding and development productivity.
                  </p>
                </div>
                <div className="glow-card p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl mb-2 sm:mb-3">📈</div>
                  <h4 className="text-sm sm:text-base font-semibold text-green-400 mb-2">
                    Continuous Growth
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Participated in <strong>70+ contests</strong> across platforms with <strong>500+ problems solved</strong>, focusing on algorithmic thinking and optimization techniques.
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