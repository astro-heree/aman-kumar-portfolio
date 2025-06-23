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
import HTMLIcon from '../icons/html-1.svg';
import CSSIcon from '../icons/css-3.svg';
import DockerIcon from '../icons/docker-4.svg';
import LiveKitIcon from '../icons/livekit-color.svg';
import SidekiqIcon from '../icons/sidekiq-svgrepo-com.svg';
import ExpressIcon from '../icons/expressjs-icon.svg';
import BootstrapIcon from '../icons/bootstrap-5-1.svg';

export default function Skills() {
  return (
    <section id="skills" className="py-10 section-padding">
      <div className="container-max">
        <div className="section-container section-skills">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h2>
          
          {/* First Row - Web Technologies */}
          <div className="mb-12">
            <div className="glow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Web Technologies</h3>
              </div>
              <div className="grid grid-cols-5 gap-6">
                {/* 1. React */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={ReactIcon} alt="React" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">React</p>
                </div>
                {/* 2. Redux */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={ReduxIcon} alt="Redux" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Redux</p>
                </div>
                {/* 3. Ruby on Rails */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={RubyOnRailsIcon} alt="Ruby on Rails" width={64} height={64} />
                  </div>
                  <p className="text-slate-300 font-medium">Ruby on Rails</p>
                </div>
                {/* 4. FastAPI */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={FastAPIIcon} alt="FastAPI" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">FastAPI</p>
                </div>
                {/* 5. Flask */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={FlaskIcon} alt="Flask" width={64} height={64} />
                  </div>
                  <p className="text-slate-300 font-medium">Flask</p>
                </div>
                {/* 6. Sidekiq */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={SidekiqIcon} alt="Sidekiq" width={70} height={70} />
                  </div>
                  <p className="text-slate-300 font-medium">Sidekiq</p>
                </div>
                {/* 7. Express */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={ExpressIcon} alt="Express.js" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Express.js</p>
                </div>
                {/* 8. Bootstrap */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={BootstrapIcon} alt="Bootstrap" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">Bootstrap</p>
                </div>
                {/* 9. HTML5 */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={HTMLIcon} alt="HTML5" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">HTML5</p>
                </div>
                {/* 10. CSS3 */}
                <div className="group text-center">
                  <div className="w-20 h-20 tech-icon-card flex items-center justify-center mx-auto mb-4">
                    <Image src={CSSIcon} alt="CSS3" width={48} height={48} />
                  </div>
                  <p className="text-slate-300 font-medium">CSS3</p>
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
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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