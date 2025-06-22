import Image from 'next/image';

// Import all the technology icons
import JavaScriptIcon from '../icons/javascript-1.svg';
import TypeScriptIcon from '../icons/typescript.svg';
import CIcon from '../icons/c.svg';
import PostgreSQLIcon from '../icons/postgresql.svg';
import ReactIcon from '../icons/react-2.svg';
import ReduxIcon from '../icons/redux.svg';
import GitIcon from '../icons/git-icon.svg';
import PostmanIcon from '../icons/postman.svg';
import FastAPIIcon from '../icons/fastapi-1.svg';
import RubyIcon from '../icons/ruby.svg';
import PythonIcon from '../icons/python.svg';
import FlaskIcon from '../icons/icons8-flask.svg';
import RubyOnRailsIcon from '../icons/rails-1.svg';
import NextIcon from '../icons/nextjs-icon-svgrepo-com.svg';
import HTMLIcon from '../icons/html-1.svg';
import CSSIcon from '../icons/css-3.svg';
import TailwindIcon from '../icons/tailwind-css-2.svg';
import DockerIcon from '../icons/docker-4.svg';
import LiveKitIcon from '../icons/livekit-color.svg';
import SidekiqIcon from '../icons/sidekiq-svgrepo-com.svg';
import ExpressIcon from '../icons/expressjs-icon.svg';
import BootstrapIcon from '../icons/bootstrap-5-1.svg';

export default function Skills() {
  return (
    <section id="skills" className="py-10 section-padding">
      <div className="container-max">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h2>
          
          {/* First Row - Web Technologies */}
          <div className="mb-12">
            <div className="glow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.95 8.9 10.91c.69.13 1.41.13 2.1 0C18.16 26.95 22 22.55 22 17V7L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Web Technologies</h3>
              </div>
              <div className="grid grid-cols-5 gap-6">
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={ReactIcon} alt="React" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">React</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={HTMLIcon} alt="HTML5" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">HTML5</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={CSSIcon} alt="CSS3" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">CSS3</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={ReduxIcon} alt="Redux" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Redux</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={BootstrapIcon} alt="Bootstrap" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Bootstrap</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={RubyOnRailsIcon} alt="Ruby on Rails" width={64} height={64} />
                  </div>
                  <p className="text-slate-300 font-medium">Ruby on Rails</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={FlaskIcon} alt="Flask" width={64} height={64} />
                  </div>
                  <p className="text-slate-300 font-medium">Flask</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={FastAPIIcon} alt="FastAPI" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">FastAPI</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={SidekiqIcon} alt="Sidekiq" width={70} height={70} />
                  </div>
                  <p className="text-slate-300 font-medium">Sidekiq</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={ExpressIcon} alt="Express.js" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Express.js</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Tools & Programming Languages */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Tools & Platforms */}
            <div className="glow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 7v10l11 5 11-5V7L12 2zm8.5 14.5L12 20.5l-8.5-4V8.5L12 12.5l8.5-4v8z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Tools & Platforms</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={GitIcon} alt="Git" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Git</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={PostmanIcon} alt="Postman" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Postman</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={DockerIcon} alt="Docker" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Docker</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12" viewBox="0 0 32 32">
                      <rect width="32" height="32" fill="#24292e"/>
                      <path fill="#ffffff" d="M16 3.6C9.5 3.6 4.2 8.9 4.2 15.4c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.7-1.6 8.1-6 8.1-11.2C27.8 8.9 22.5 3.6 16 3.6z"/>
                    </svg>
                  </div>
                  <p className="text-slate-300 font-medium">GitHub</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={PostgreSQLIcon} alt="PostgreSQL" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">PostgreSQL</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={LiveKitIcon} alt="LiveKit" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">LiveKit</p>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="glow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3 7L12 12L21 7L12 2Z"/>
                    <path d="M3 17L12 22L21 17"/>
                    <path d="M3 12L12 17L21 12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={JavaScriptIcon} alt="JavaScript" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">JavaScript</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={TypeScriptIcon} alt="TypeScript" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">TypeScript</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={CIcon} alt="C++" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">C++</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={PythonIcon} alt="Python" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Python</p>
                </div>
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={RubyIcon} alt="Ruby" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Ruby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 