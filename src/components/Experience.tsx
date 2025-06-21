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
      company: "Iksha Labs",
      location: "Remote",
      duration: "2024 - Present",
      type: "Full-time",
      description: "Working on cutting-edge AI solutions and microservice architectures",
      achievements: [
        "Developed a microservice-based AI call agent platform supporting Hindi and English languages",
        "Reduced manual call handling by 80% through automated AI-driven solutions",
        "Optimized speech processing pipelines, improving response time by 35%",
        "Architected multi-repository systems with scalable database schemas",
        "Implemented real-time communication features using WebSocket technology"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AI/ML", "WebSocket"]
    },
    {
      title: "Software Development Intern",
      company: "Tech Startup",
      location: "Bangalore, India",
      duration: "Summer 2023",
      type: "Internship",
      description: "Contributed to full-stack web development projects and gained hands-on experience",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Integrated third-party APIs and payment gateways",
        "Collaborated with cross-functional teams in agile development environment",
        "Participated in code reviews and maintained high code quality standards"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Git"]
    }
  ];

  const projects = [
    {
      name: "AI Call Agent Platform",
      role: "Lead Developer",
      description: "Microservice-based platform for automated customer service",
      impact: "80% reduction in manual handling"
    },
    {
      name: "Speech Processing Pipeline",
      role: "Backend Engineer",
      description: "Real-time speech recognition and processing system",
      impact: "35% faster response times"
    },
    {
      name: "Multi-language Support System",
      role: "Full-stack Developer",
      description: "Bilingual AI system supporting Hindi and English",
      impact: "Expanded market reach significantly"
    }
  ];

  return (
    <section id="experience" className="py-20 section-padding">
      <div className="container-max">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Professional Experience</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Work Experience */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
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

            {/* Key Projects */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Key Projects</h3>
              </div>
              
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="skill-card-enhanced">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{project.name}</h4>
                      <p className="text-purple-400 text-sm font-medium mb-2">{project.role}</p>
                      <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 text-sm font-medium">Impact: {project.impact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="mt-6 glow-card">
                <h4 className="text-lg font-semibold text-white mb-4">Professional Stats</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Years of Experience</span>
                    <span className="text-blue-400 font-semibold">1+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Projects Completed</span>
                    <span className="text-green-400 font-semibold">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Technologies Mastered</span>
                    <span className="text-purple-400 font-semibold">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Code Commits</span>
                    <span className="text-yellow-400 font-semibold">500+</span>
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