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
      description: "Working on cutting-edge AI solutions and microservice architectures for automated customer service platforms",
      achievements: [
        "Developed microservice-based AI call agent platform supporting Hindi and English languages, automating customer requirement gathering and reducing manual call handling by 80%",
        "Architected multi-repository system using Python, FastAPI, and Pydantic validation, enabling concurrent call processing across distributed services",
        "Optimized speech-to-text and text-to-speech pipeline by benchmarking Deepgram, Amazon Polly, OpenAI, and Grok APIs, achieving 35% faster processing and 40% improved audio quality",
        "Designed PostgreSQL database schema with optimized queries for bilingual call processing, improving response times by 70%",
        "Extended Activepieces open-source automation tool with custom code contributions for post-call workflows, reducing development time by 95% and cutting SaaS costs",
        "Created multilingual AI prompt engineering systems (500+ lines) for healthcare, sales, and loan recovery use cases, reducing call handling time by 40%"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Pydantic", "Deepgram", "OpenAI", "Grok APIs", "Amazon Polly"]
    },
    {
      title: "Software Engineer Intern",
      company: "Iksha Labs Private Limited",
      location: "Gurugram, Haryana",
      duration: "October 2023 - July 2024",
      type: "Internship",
      description: "Built AI-powered interview platforms and scalable backend systems with focus on performance optimization",
      achievements: [
        "Built AI Interview Platform automating candidate assessment processes, reducing interviewer workload by 60% and improving assessment accuracy by 30%",
        "Migrated AWS S3 upload architecture from presigned URLs to multipart uploads, decreasing upload failure rate from 40% to under 5%",
        "Implemented queue-based upload system ensuring 99% upload success rate despite network interruptions, significantly improving user retention",
        "Developed real-time microphone monitoring system using custom React hooks, reducing help requests by 80% and enabling independent interview completion",
        "Built 50+ REST APIs using Flask for backend data processing and integrated 80+ frontend APIs with Redux for state management"
      ],
      technologies: ["React", "Redux", "Flask", "AWS S3", "Python", "REST APIs", "JavaScript", "Custom React Hooks"]
    }
  ];



  return (
    <section id="experience" className="py-10 section-padding">
      <div className="container-max">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <BriefcaseIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-white">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="glow-card">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BriefcaseIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <BuildingOfficeIcon className="w-4 h-4 text-blue-400" />
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                          <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded-md border border-green-700/50">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPinIcon className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {exp.duration}
                          </div>
                        </div>
                        <p className="text-slate-300 text-sm mb-4">{exp.description}</p>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="ml-16 mb-4">
                      <h5 className="text-sm font-medium text-slate-300 mb-3">Key Achievements:</h5>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                            <ChevronRightIcon className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="ml-16">
                      <h5 className="text-sm font-medium text-slate-300 mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
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