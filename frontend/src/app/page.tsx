'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Live clock effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="backdrop-blur-xl bg-black/20 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white font-space-grotesk">Shubham Attri</h1>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#awards" className="text-gray-300 hover:text-white transition-colors">Awards</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Neo-Hero Section */}
      <section className="min-h-screen bg-[#0A0A0A] relative flex items-center justify-center overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-16 border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl"></div>
              
              <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent font-space-grotesk">
                Shubham Attri
              </h1>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="mt-8 space-y-2">
              {['Engineering systems.', 'Exploring ideas.', 'Building in public.'].map((word, index) => (
                <motion.p
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  className="text-xl md:text-2xl text-gray-300 font-light"
                >
                  {word}
                </motion.p>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.8}>
            <button className="group relative px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 mt-12">
              <span className="relative z-10 flex items-center gap-2">
                Explore My World
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </button>
          </AnimatedSection>
          
          {/* Scroll down chevron */}
          <AnimatedSection delay={1.2}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/60 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Command Panel Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white font-space-grotesk">
              Command Panel
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="group cursor-pointer">
                <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-purple-500/5 rounded-3xl p-10 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:ring-2 hover:ring-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">🧠</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">Blog</h3>
                    <p className="text-gray-400 mb-6">Deep dives, ideas, mental models</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-400">Read latest</span>
                      <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="group cursor-pointer">
                <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-blue-500/5 rounded-3xl p-10 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:ring-2 hover:ring-blue-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">🛠️</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">Projects</h3>
                    <p className="text-gray-400 mb-6">Systems, tools, products</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-400">View portfolio</span>
                      <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="group cursor-pointer">
                <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-green-500/5 rounded-3xl p-10 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:ring-2 hover:ring-green-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">⚗️</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">Playground</h3>
                    <p className="text-gray-400 mb-6">Experiments, AI tests</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-400">Try experiments</span>
                      <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Personal Manifesto Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white font-space-grotesk">
              My Operating Principles
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Build > Talk",
                description: "Ship fast, iterate faster. Code speaks louder than words.",
                emoji: "⚡"
              },
              {
                title: "Curiosity First",
                description: "Always learning, always exploring new technologies and ideas.",
                emoji: "🔍"
              },
              {
                title: "Systems Thinking",
                description: "Design for scale, build for impact, think in patterns.",
                emoji: "🧩"
              },
              {
                title: "Mentorship Matters",
                description: "Lift others up. Knowledge shared is knowledge multiplied.",
                emoji: "🚀"
              },
              {
                title: "Quality Over Speed",
                description: "But speed with quality. Find the sweet spot.",
                emoji: "🎯"
              },
              {
                title: "Embrace Chaos",
                description: "Innovation happens at the edge of order and disorder.",
                emoji: "🌀"
              }
            ].map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-purple-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{principle.emoji}</div>
                      <h3 className="text-xl font-bold text-white mb-3 font-space-grotesk">{principle.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Quote + Clock Section */}
      <section className="py-8 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">💭</div>
                  <div>
                    <p className="text-white font-medium">"The best way to predict the future is to invent it."</p>
                    <p className="text-gray-400 text-sm">— Alan Kay</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">🕐</div>
                  <div className="text-right">
                    <p className="text-white font-mono text-lg" id="clock">
                      {currentTime.toLocaleTimeString('en-US', { 
                        hour12: false, 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        second: '2-digit' 
                      })}
                    </p>
                    <p className="text-gray-400 text-sm">Local Time</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Smart Link Hub Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-space-grotesk">
              Explore by Intent
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "🔍 Looking to Hire Me", color: "purple" },
                { label: "🧠 Want to Learn Something", color: "blue" },
                { label: "🤝 Want to Collaborate", color: "green" },
                { label: "💼 View My Resume", color: "yellow" },
                { label: "📧 Get in Touch", color: "pink" },
                { label: "🐙 Check My GitHub", color: "gray" }
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group backdrop-blur-sm bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white font-medium hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-${item.color}-500/20 hover:border-${item.color}-500/30`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </motion.button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 text-white font-space-grotesk">About Me</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a senior software engineer and tech leader with over 5 years of experience in full-stack development, 
                  cloud solutions, and team leadership. I graduated from IIT Delhi with a strong foundation in computer science 
                  and have led high-performing teams of 5+ engineers.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in modern technologies including MEAN stack, Azure cloud solutions, and AI/ML applications. 
                  As a GitHub Copilot SPOC, I've driven adoption for 30+ engineers and delivered knowledge transfer sessions 
                  on architecture, clean code, and performance optimization.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I've received multiple awards including "Star of the Quarter" for leading critical modernization projects 
                  and have been recognized for delivery excellence and platform leadership. I'm passionate about mentoring, 
                  legacy system modernization, and building scalable, secure applications.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold font-space-grotesk shadow-2xl shadow-purple-500/20">
                    SA
                  </div>
                  <div className="absolute inset-0 w-64 h-64 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Senior Software Engineer & Tech Leader</h3>
              <p className="text-blue-600 mb-2">Societe Generale • 2022 - Present</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Led high-performing team of 5 engineers, focusing on scalable, secure, testable delivery</li>
                <li>• Drove GitHub Copilot adoption as SPOC for 30+ engineers across the organization</li>
                <li>• Provided 1:1 mentorship on architecture, clean code, and performance optimization</li>
                <li>• Served as SME for legacy UC4 + PL/SQL systems, managing production support and incident resolution</li>
                <li>• Conducted design reviews and steered roadmap for legacy decomposition</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
              <p className="text-blue-600 mb-2">Capgemini • 2020 - 2022</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Developed and maintained enterprise-level applications using modern technologies</li>
                <li>• Collaborated with cross-functional teams in agile environment</li>
                <li>• Implemented CI/CD pipelines and automated testing procedures</li>
                <li>• Contributed to knowledge transfer sessions and technical workshops</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">MEAN Stack Developer</h3>
              <p className="text-blue-600 mb-2">TheRightDoctors, Hyderabad • May 2019 - July 2019</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Created Single Sign-on layer for 7 platforms using JSON Web Tokens</li>
                <li>• Redesigned storage structures for web platforms in MySQL</li>
                <li>• Built platform for Public Relationship Teams with Razorpay integration</li>
                <li>• Designed complex archiving architecture for videos/audios</li>
                <li>• Implemented social media buttons and weekly scheduler functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="bg-gray-50 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2">Indian Institute of Technology, Delhi</h3>
            <p className="text-blue-600 mb-2">Bachelor of Technology in Computer Science & Engineering</p>
            <p className="text-gray-600 mb-4">2016 - 2020</p>
            <p className="text-gray-700">
              Graduated with distinction. Specialized in algorithms, data structures, and software engineering. 
              Completed research projects in AI/ML including Atari Breakout CNN model and Yinsh AI-Bot development.
            </p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section id="awards" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Star of the Quarter</h3>
              <p className="text-blue-600 mb-2">2024</p>
              <p className="text-gray-700">For leading critical modernization and cross-border project execution</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Selected for SA Role in Paris</h3>
              <p className="text-blue-600 mb-2">2023</p>
              <p className="text-gray-700">In recognition of delivery excellence, client collaboration, and platform leadership</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Award for Value of Commitment & Responsibility</h3>
              <p className="text-blue-600 mb-2">2022</p>
              <p className="text-gray-700">For delivering deadline-driven projects without delay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Full-Stack & Cloud</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>MEAN Stack</span>
                  <span className="text-blue-600">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Microsoft Azure</span>
                  <span className="text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>React.js</span>
                  <span className="text-blue-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span className="text-blue-600">90%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Data & AI/ML</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Spark & Hadoop</span>
                  <span className="text-blue-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>PL/SQL</span>
                  <span className="text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>PyTorch</span>
                  <span className="text-blue-600">80%</span>
                </div>
                <div className="flex justify-between">
                  <span>CNN Models</span>
                  <span className="text-blue-600">75%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Leadership & Tools</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>GitHub Copilot</span>
                  <span className="text-blue-600">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Team Leadership</span>
                  <span className="text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>Legacy Modernization</span>
                  <span className="text-blue-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Mentorship</span>
                  <span className="text-blue-600">90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">GitHub Copilot SPOC Enablement Program</h3>
              <p className="text-blue-600 mb-2">Capgemini, 2024</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-lg font-semibold mb-2">Microsoft AZ-204: Developing Solutions for Microsoft Azure</h3>
              <p className="text-blue-600 mb-2">Microsoft</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Data Engineering Level 2</h3>
              <p className="text-blue-600 mb-2">Societe Generale, 2023</p>
              <p className="text-sm text-gray-600">Spark, Hadoop & ADLS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📧</span>
                  <span>shubham.kumar@email.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📱</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">💼</span>
                  <span>LinkedIn: /in/shubham-kumar</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="text-gray-400 mb-4">
                Made with <span className="text-yellow-400">⚡</span>, <span className="text-orange-400">☕</span> and a dash of <span className="text-purple-400">chaos</span>
              </p>
              <div className="flex justify-center items-center gap-6 mb-6">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="mailto:shubham@example.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-gray-500 text-sm">
                &copy; 2024 Shubham Attri. All rights reserved.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
}
