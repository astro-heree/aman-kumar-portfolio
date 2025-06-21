import { 
  AcademicCapIcon,
  CalendarIcon,
  MapPinIcon,
  StarIcon
} from "@heroicons/react/24/outline";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      duration: "2020 - 2024",
      cgpa: "8.97/10.00",
      highlights: [
        "Specialized in Data Structures and Algorithms",
        "Machine Learning and Artificial Intelligence",
        "Database Management Systems",
        "Software Engineering Principles"
      ]
    }
  ];

  const certifications = [
    {
      name: "Machine Learning Specialization",
      provider: "Stanford University (Coursera)",
      year: "2023",
      skills: ["Python", "TensorFlow", "Neural Networks"]
    },
    {
      name: "Full Stack Web Development",
      provider: "freeCodeCamp",
      year: "2022",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      name: "Data Structures and Algorithms",
      provider: "GeeksforGeeks",
      year: "2021",
      skills: ["Problem Solving", "Competitive Programming"]
    }
  ];

  return (
    <section id="education" className="py-20 section-padding">
      <div className="container-max">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Education & Certifications</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <div key={index} className="glow-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AcademicCapIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-4 h-4" />
                          CGPA: {edu.cgpa}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <h5 className="text-sm font-medium text-slate-300 mb-3">Key Areas of Study:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="skill-card-enhanced">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                        <p className="text-blue-400 text-sm mb-2">{cert.provider}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                          <CalendarIcon className="w-3 h-3" />
                          {cert.year}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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