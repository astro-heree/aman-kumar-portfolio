'use client';

import { useState } from 'react';
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Web3Forms - Direct email sending (No templates needed!)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c2b9a83b-d40b-400c-9aa6-ecb2a8df6f48',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }

      // Option 2: EmailJS with your service (if you want to stick with EmailJS)
      /*
      const emailjs = (await import('@emailjs/browser')).default;
      
      await emailjs.send(
        'service_dsgwwii', // Your actual service ID
        'YOUR_TEMPLATE_ID', // You still need to create a simple template
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Get from EmailJS dashboard
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      */

      // Option 3: Simple mailto fallback
      /*
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:ashudev0987@gmail.com?subject=${subject}&body=${body}`;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      */
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-10 section-padding">
      <div className="container-max">
        <div className="section-container section-contact">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glow-card">
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 md:mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {/* Email Contact Item */}
                  <div className="group relative p-3 md:p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">Email</h4>
                        <p className="text-sm md:text-base text-slate-300 group-hover:text-slate-200 transition-colors duration-300 break-all">amanastro.work@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Profiles Contact Item */}
                  <div className="group relative p-3 md:p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">Social Profiles</h4>
                        <div className="flex gap-2 md:gap-3 mt-2 md:mt-3">
                          {/* GitHub */}
                          <a 
                            href="https://github.com/astro-heree" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group/icon w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-lg md:rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/20"
                            onClick={(e) => e.stopPropagation()}
                            title="GitHub"
                          >
                            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover/icon:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                          
                          {/* LinkedIn */}
                          <a 
                            href="https://www.linkedin.com/in/astro-here" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group/icon w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                            onClick={(e) => e.stopPropagation()}
                            title="LinkedIn"
                          >
                            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover/icon:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glow-card">
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 md:mb-6">Let&apos;s Connect</h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  I&apos;m currently open to new opportunities and collaborations. 
                  Feel free to reach out if you&apos;d like to discuss a project or just 
                  say hello!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glow-card">
              <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6 md:mb-8">Send Me a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-green-900/50 border border-green-700 rounded-lg">
                  <p className="text-green-300 text-sm md:text-base">Message sent successfully! I&apos;ll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-900/50 border border-red-700 rounded-lg">
                  <p className="text-red-300 text-sm md:text-base">Failed to send message. Please try again or contact me directly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 md:px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 md:px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 md:px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-3 md:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <EnvelopeIcon className="w-4 h-4 md:w-5 md:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 