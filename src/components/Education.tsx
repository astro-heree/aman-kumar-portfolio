import { 
  AcademicCapIcon,
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
    <section id="education" className="py-10 section-padding">
      <div className="container-max">
        <div className="section-container">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
                <AcademicCapIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Education
              </h2>
            </div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              My academic journey through various institutions that shaped my technical foundation
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
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
                             {/* CGPA with Enhanced Styling */}
                             <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
                               <StarIcon className="w-4 h-4 text-yellow-400" />
                               <span className="text-yellow-300 font-semibold text-sm">CGPA: {edu.cgpa}</span>
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
        </div>
      </div>
    </section>
  );
} 