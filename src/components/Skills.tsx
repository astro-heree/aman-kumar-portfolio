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

export default function Skills() {
  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div className="dark-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
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
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={JavaScriptIcon} alt="JavaScript" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">JavaScript</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={TypeScriptIcon} alt="TypeScript" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">TypeScript</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={CIcon} alt="C++" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">C++</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={RubyIcon} alt="Ruby" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">Ruby</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={PythonIcon} alt="Python" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">Python</p>
              </div>
            </div>
          </div>

          {/* Technologies & Frameworks */}
          <div className="dark-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Technologies & Frameworks</h3>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={ReactIcon} alt="React" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">React</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={ReduxIcon} alt="Redux" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">Redux</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={GitIcon} alt="Git" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">Git</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={PostmanIcon} alt="Postman" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">Postman</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={PostgreSQLIcon} alt="PostgreSQL" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">PostgreSQL</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={FlaskIcon} alt="Flask" width={62} height={62} />
                </div>
                <p className="text-slate-300 font-medium">Flask</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={FastAPIIcon} alt="FastAPI" width={48} height={48} />
                </div>
                <p className="text-slate-300 font-medium">FastAPI</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <Image src={RubyOnRailsIcon} alt="Ruby on Rails" width={62} height={62} />
                </div>
                <p className="text-slate-300 font-medium">Ruby on Rails</p>
              </div>
            </div>
          </div>

          {/* Web Technologies */}
          <div className="dark-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.95 8.9 10.91c.69.13 1.41.13 2.1 0C18.16 26.95 22 22.55 22 17V7L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Web Technologies</h3>
            </div>
            <div className="grid grid-cols-5 gap-6">
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#e34c26" d="M6 2l2.5 28.1L16 32l7.5-1.9L26 2H6z"/>
                    <path fill="#ef652a" d="M16 30V4h10l-2.5 26L16 30z"/>
                    <path fill="#ebebeb" d="M16 13.4H9.8l-.3-3.7H16V6.3H5.8l.8 8.8H16v-1.7z"/>
                    <path fill="#fff" d="M22.2 9.7l-.3 3.7H16v3.4h5.3l-.5 5.7L16 24v3.5l7.5-2.1.8-8.8H16V13.4h6.5z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">HTML5</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#1572b6" d="M6 2l2.5 28.1L16 32l7.5-1.9L26 2H6z"/>
                    <path fill="#33a9dc" d="M16 30V4h10l-2.5 26L16 30z"/>
                    <path fill="#fff" d="M16 13.4v3.4h5.3l-.5 5.7L16 24v3.5l7.5-2.1.8-8.8H16z"/>
                    <path fill="#ebebeb" d="M16 13.4H9.8l-.3-3.7H16V6.3H5.8l.8 8.8H16v-1.7zm0 7.1l-4.3-1.2-.3-3.2h3.4v3.4h1.2z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">CSS3</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#7952b3" d="M16 2L4 6v20l12 4 12-4V6L16 2z"/>
                    <path fill="#fff" d="M8 12h16v2H8v-2zm0 4h12v2H8v-2zm0 4h8v2H8v-2z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">Bootstrap</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14" fill="#009688"/>
                    <path fill="#fff" d="M8 10h16v2H8v-2zm0 4h12v2H8v-2zm0 4h8v2H8v-2zm0 4h6v2H8v-2z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">REST APIs</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#cc0000" d="M16 2L4 6v20l12 4 12-4V6L16 2z"/>
                    <path fill="#fff" d="M10 8h12v2H10V8zm0 4h8v2h-8v-2zm0 4h10v2H10v-2zm0 4h6v2h-6v-2z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">Sidekiq</p>
              </div>
            </div>
          </div>

          {/* Core Concepts */}
          <div className="dark-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Core Concepts</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Data Structures', desc: 'Arrays, Trees, Graphs, Hash Tables' },
                { name: 'Algorithms', desc: 'Sorting, Searching, Dynamic Programming' },
                { name: 'Object Oriented Programming', desc: 'Encapsulation, Inheritance, Polymorphism' },
                { name: 'Operating System', desc: 'Process Management, Memory Management' },
                { name: 'Database Management System', desc: 'SQL, Normalization, Indexing' },
                { name: 'Standard Template Library', desc: 'C++ STL, Containers, Iterators' }
              ].map((concept) => (
                <div key={concept.name} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
                  <h4 className="text-white font-semibold mb-2">{concept.name}</h4>
                  <p className="text-slate-400 text-sm">{concept.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 