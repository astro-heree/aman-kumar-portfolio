import { 
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  ChevronRightIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/outline";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Iksha Labs Private Limited",
      location: "Gurugram, Haryana",
      duration: "August 2024 - Present",
      type: "Full-time",
      description: "Working on cutting-edge AI solutions and microservice architectures for automated customer service platforms.",
      achievements: [
        "Developed microservice-based AI call agent platform supporting Hindi and English languages, automating customer requirement gathering and reducing manual call handling by 80%.",
        "Architected multi-repository system using Python, FastAPI, and Pydantic validation, enabling concurrent call processing across distributed services.",
        "Optimized speech-to-text and text-to-speech pipeline by benchmarking Deepgram, Amazon Polly, OpenAI, and Grok APIs, achieving 35% faster processing and 40% improved audio quality.",
        "Designed PostgreSQL database schema with optimized queries for bilingual call processing, improving response times by 70%.",
        "Extended Activepieces open-source automation tool with custom code contributions for post-call workflows, reducing development time by 95% and cutting SaaS costs.",
        "Created multilingual AI prompt engineering systems (500+ lines) for healthcare, sales, and loan recovery use cases, reducing call handling time by 40%."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Pydantic", "Deepgram", "OpenAI", "Grok APIs", "Amazon Polly"]
    },
    {
      title: "Software Engineer Intern",
      company: "Iksha Labs Private Limited", 
      location: "Gurugram, Haryana",
      duration: "October 2023 - July 2024",
      type: "Internship",
      description: "Built AI-powered interview platforms and scalable backend systems with focus on performance optimization.",
      achievements: [
        "Built AI Interview Platform automating candidate assessment processes, reducing interviewer workload by 60% and improving assessment accuracy by 30%.",
        "Migrated AWS S3 upload architecture from presigned URLs to multipart uploads, decreasing upload failure rate from 40% to under 5%.",
        "Implemented queue-based upload system ensuring 99% upload success rate despite network interruptions, significantly improving user retention.",
        "Developed real-time microphone monitoring system using custom React hooks, reducing help requests by 80% and enabling independent interview completion.",
        "Built 50+ REST APIs using Flask for backend data processing and integrated 80+ frontend APIs with Redux for state management."
      ],
      technologies: ["React", "Redux", "Flask", "AWS S3", "Python", "REST APIs", "JavaScript", "Custom React Hooks"]
    }
  ];

  return (
    <section id="experience" className="py-10 section-padding">
      <div className="container-max">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 gradient-text">Professional Experience</h2>
          
          {/* Mobile: Full width, Desktop: Constrained width */}
          <div className="w-full md:max-w-4xl md:mx-auto">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="glow-card group hover:scale-[1.02] md:hover:scale-105 transition-all duration-300">
                    {/* Header - Responsive Layout */}
                    <div className="mb-4">
                      {/* Mobile Layout - Vertical */}
                      <div className="md:hidden">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <BriefcaseIcon className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <BuildingOfficeIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
                            <span className="px-1.5 py-1 bg-green-900/50 text-green-300 text-xs rounded-md border border-green-700/50 ml-auto">
                              {exp.type}
                            </span>
                          </div>
                          
                          <div className="flex flex-col gap-2 text-xs text-slate-400">
                            <div className="flex items-center gap-2">
                              <MapPinIcon className="w-3 h-3 flex-shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="w-3 h-3 flex-shrink-0" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                          
                          <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
                        </div>
                      </div>

                      {/* Desktop Layout - Horizontal */}
                      <div className="hidden md:flex md:items-start md:gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BriefcaseIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                          <div className="flex items-center gap-2 mb-2">
                            <BuildingOfficeIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <p className="text-blue-400 font-medium text-base">{exp.company}</p>
                                                         <span className="px-1.5 py-1 bg-green-900/50 text-green-300 text-xs rounded-md border border-green-700/50">
                               {exp.type}
                             </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 text-sm text-slate-400 mb-3">
                            <div className="flex items-center gap-1">
                              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                          <p className="text-slate-300 text-base leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievements - Responsive margins */}
                    <div className="ml-0 md:ml-16 mb-4">
                      <h5 className="text-sm md:text-base font-medium text-slate-300 mb-3">Key Achievements:</h5>
                      <div className="space-y-2 md:space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-400 leading-relaxed">
                            <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies - Responsive margins */}
                    <div className="ml-0 md:ml-16">
                      <h5 className="text-sm md:text-base font-medium text-slate-300 mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 md:px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 hover:bg-slate-600/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
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