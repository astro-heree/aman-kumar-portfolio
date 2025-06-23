import {
  StarIcon
} from "@heroicons/react/24/outline";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vellore Institute of Technology",
      duration: "2020 — 2024",
      cgpa: "8.97/10",
      type: "BTech",
      color: "from-blue-500 to-purple-600"
    },
    {
      degree: "Higher Secondary, Science (PCM)",
      institution: "Guru Gobind Singh Public School - Chas, Bokaro Steel City",
      duration: "2019 — 2020", 
      cgpa: "93%",
      type: "12th Grade",
      color: "from-emerald-500 to-teal-600"
    },
    {
      degree: "High School Diploma",
      institution: "Guru Gobind Singh Public School - Chas, Bokaro Steel City",
      duration: "2017 — 2018",
      cgpa: "95%",
      type: "10th Grade",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="education" className="py-8 sm:py-10 lg:py-16 section-padding">
      <div className="container-max">
        <div className="section-container">
          {/* Enhanced Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-20">
            <div className="inline-flex items-center gap-4 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                Education
              </h2>
            </div>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4">
              My academic journey through various institutions that shaped my technical foundation
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Desktop Layout - Hidden on mobile */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Enhanced Vertical Timeline Line with Gradient */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full opacity-60"></div>
                
                <div className="space-y-16">
                  {education.map((edu, index) => (
                    <div key={index} className="relative group">
                      {/* Enhanced Timeline Dot */}
                      <div className={`absolute left-5 w-6 h-6 bg-gradient-to-br ${edu.color} rounded-full border-4 border-slate-900 z-10 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <div className={`absolute inset-1 bg-gradient-to-br ${edu.color} rounded-full opacity-60 animate-pulse`}></div>
                      </div>
                      
                      {/* Content with Enhanced Styling */}
                      <div className="ml-20 flex-1">
                        {/* Duration with Gradient Background */}
                        <div className="mb-4">
                          <div className={`inline-block px-6 py-2 bg-gradient-to-r ${edu.color} rounded-full text-white font-bold text-xl shadow-lg`}>
                            {edu.duration}
                          </div>
                        </div>
                        
                        {/* Enhanced Content Card */}
                        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                          {/* Subtle Background Pattern */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
                          
                          <div className="relative z-10">
                            {/* Institution Name with Enhanced Typography */}
                            <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                              {edu.institution}
                            </h4>
                            
                            {/* Degree with Better Styling */}
                            <h5 className="text-xl text-slate-300 mb-6 font-medium leading-relaxed">
                              {edu.degree}
                            </h5>
                            
                            {/* Enhanced Details Section */}
                            <div className="flex flex-wrap gap-6 mb-4">
                              {/* CGPA/Percentage with Enhanced Styling */}
                              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
                                <StarIcon className="w-4 h-4 text-yellow-400" />
                                <span className="text-yellow-300 font-semibold text-sm">
                                  {edu.type === 'BTech' ? 'CGPA' : 'Percentage'}: {edu.cgpa}
                                </span>
                              </div>
                              
                              {/* Type Badge with Gradient */}
                              <div className={`px-4 py-2 bg-gradient-to-r ${edu.color} rounded-full text-white text-sm font-medium shadow-lg`}>
                                {edu.type}
                              </div>
                            </div>
                          </div>
                          
                          {/* Decorative Corner Elements */}
                          <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${edu.color} rounded-full opacity-10`}></div>
                          <div className={`absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br ${edu.color} rounded-full opacity-10`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom Gradient Fade Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent rounded-b-2xl"></div>
              </div>
            </div>

            {/* Mobile Layout - Visible only on mobile */}
            <div className="block md:hidden">
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Mobile Card */}
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                      {/* Subtle Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl sm:rounded-2xl"></div>
                      
                      <div className="relative z-10">
                        {/* Mobile Header */}
                        <div className="text-center mb-3 sm:mb-4">
                          {/* Duration Badge */}
                          <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${edu.color} rounded-full text-white font-bold text-sm sm:text-lg shadow-lg mb-2 sm:mb-3`}>
                            {edu.duration}
                          </div>
                          
                          {/* Institution Name */}
                          <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight px-1">
                            {edu.institution}
                          </h4>
                          
                          {/* Degree */}
                          <h5 className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed px-1">
                            {edu.degree}
                          </h5>
                        </div>
                        
                        {/* Mobile Details */}
                        <div className="flex flex-col gap-2 sm:gap-3">
                          {/* CGPA/Percentage */}
                          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 sm:px-4 py-2 rounded-full border border-yellow-500/30">
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                            <span className="text-yellow-300 font-semibold text-xs sm:text-sm">
                              {edu.type === 'BTech' ? 'CGPA' : 'Percentage'}: {edu.cgpa}
                            </span>
                          </div>
                          
                          {/* Type Badge */}
                          <div className="text-center">
                            <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${edu.color} rounded-full text-white text-xs sm:text-sm font-medium shadow-lg`}>
                              {edu.type}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Mobile Decorative Elements */}
                      <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${edu.color} rounded-full opacity-10`}></div>
                      <div className={`absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br ${edu.color} rounded-full opacity-10`}></div>
                    </div>
                    
                    {/* Mobile Timeline Connector */}
                    {index < education.length - 1 && (
                      <div className="flex justify-center my-3 sm:my-4">
                        <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-60"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 