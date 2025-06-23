import Image from 'next/image';

// Import platform icons
import LeetCodeIcon from '../icons/leetcode.svg';
import CodeChefIcon from '../icons/codechef.svg';
import GeeksforGeeksIcon from '../icons/geeksforgeeks-svgrepo-com.svg';
import CodeforcesIcon from '../icons/code-forces.svg';

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
      icon: "🏁",
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:shadow-indigo-500/20",
      bgColor: "bg-indigo-500/10"
    },
    {
      name: "Monkeytype",
      url: "https://monkeytype.com/profile/Astro_here",
      achievement: "High Accuracy",
      description: "Precision & Speed",
      icon: "🐵",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:shadow-purple-500/20",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section id="coding" className="py-10 section-padding">
      <div className="container-max">
        <div className="section-container section-skills">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight py-2">
              Competitive Programming Journey
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Passionate algorithmic problem solver with consistent contest participation and strong ratings across multiple competitive programming platforms.
            </p>
          </div>

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
                      <div className={`w-12 h-12 rounded-xl ${platform.bgColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {platform.icon}
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
      </div>
    </section>
  );
} 