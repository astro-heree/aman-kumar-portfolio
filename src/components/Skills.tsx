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
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">JavaScript</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">TypeScript</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="#00599C" d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">C++</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#336791" d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2z"/>
                    <path fill="#fff" d="M23.5 8.5h-15c-.275 0-.5.225-.5.5v14c0 .275.225.5.5.5h15c.275 0 .5-.225.5-.5V9c0-.275-.225-.5-.5-.5zM21 20h-2v-2h2v2zm0-4h-2v-6h2v6z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">SQL</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="#3776ab" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                    <path fill="#ffcf46" d="M16.115 29.9c7.1 0 6.651-3.07 6.651-3.07l-.008-3.18h-6.752v-.96h6.929s4.362.49 4.362-6.39c0-6.881-3.84-6.651-3.84-6.651H21.18v3.193s.124 3.84-3.77 3.84h-6.703s-3.653-.061-3.653 3.538v6.502s-.537 6.188 6.963 6.188zm3.385-2.7a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">Python</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="#00ADD8" d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">Go</p>
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
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">React</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#764abc" d="M23.5 8a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"/>
                    <path fill="#fff" d="M16 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM9.5 17a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM22.5 17a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM16 22.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                    <path fill="#fff" d="M16 9.5l-4.5 7.5h9l-4.5-7.5zM9.5 17l4.5-7.5v15l-4.5-7.5zM22.5 17l-4.5 7.5v-15l4.5 7.5z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">Redux</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#f14e32" d="M29.472 14.753L17.247 2.528a1.8 1.8 0 00-2.55 0L12.158 5.067l3.22 3.22a2.141 2.141 0 012.712 2.73l3.104 3.104a2.143 2.143 0 11-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 11-1.764-.062V12.3a2.146 2.146 0 01-.948-2.87L10.97 6.097 2.528 14.54a1.8 1.8 0 000 2.551L14.753 29.316a1.8 1.8 0 002.55 0L29.472 17.3a1.8 1.8 0 000-2.551z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">Git</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#ff6c37" d="M16 2.5c7.456 0 13.5 6.044 13.5 13.5S23.456 29.5 16 29.5 2.5 23.456 2.5 16 8.544 2.5 16 2.5z"/>
                    <path fill="#fff" d="M13.33 17.441l1.521-2.484 5.363-8.787h-3.711l-3.173 5.198-3.173-5.198H6.445l5.363 8.787 1.521 2.484z"/>
                    <path fill="#fff" d="M16 13.5l3.173 5.198h3.711l-5.363-8.787L16 13.5z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">Postman</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#336791" d="M27.5 21.5h-4v-4h4v4zm-23-8v-4h4v4h-4zm4-8h4v4h-4v-4zm19 0h-4v4h4v-4zm-8 4v4h-4v-4h4zm0 8h4v-4h-4v4zm-8-4h4v-4h-4v4z"/>
                    <circle cx="16" cy="16" r="12" fill="none" stroke="#336791" strokeWidth="2"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">PostgreSQL</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#000" d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"/>
                    <path fill="#fff" d="M12 10h8v2h-6v4h4v2h-4v4h6v2h-8V10z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">Flask</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14" fill="#009485"/>
                    <path fill="#fff" d="M10 12h12v2H10v-2zm0 4h8v2H10v-2zm0 4h10v2H10v-2z"/>
                  </svg>
                </div>
                <p className="text-slate-300 font-medium">FastAPI</p>
              </div>
              <div className="group text-center">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-12 h-12" viewBox="0 0 32 32">
                    <path fill="#cc0000" d="M16 2L4 6v20l12 4 12-4V6L16 2z"/>
                    <path fill="#fff" d="M10 8h12v2H10V8zm0 4h8v2h-8v-2zm0 4h10v2H10v-2zm0 4h6v2h-6v-2z"/>
                  </svg>
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