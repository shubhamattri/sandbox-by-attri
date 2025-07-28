'use client';

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Work() {
  const projects = [
    {
      title: 'Personal Command Center',
      description: 'A cinematic personal website with Gen Z aesthetics, built with Next.js, Framer Motion, and Tailwind CSS.',
      stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/shubham-attri/personal-website',
      live: 'https://shubham-attri.vercel.app',
      featured: true
    },
    {
      title: 'AI-Powered Task Manager',
      description: 'Intelligent task management system with natural language processing and smart prioritization.',
      stack: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      github: 'https://github.com/shubham-attri/ai-task-manager',
      live: null
    },
    {
      title: 'Real-time Chat Platform',
      description: 'Scalable chat application with real-time messaging, file sharing, and end-to-end encryption.',
      stack: ['Socket.io', 'Express.js', 'React', 'PostgreSQL'],
      github: 'https://github.com/shubham-attri/chat-platform',
      live: 'https://chat-platform-demo.vercel.app'
    },
    {
      title: 'E-commerce Analytics Dashboard',
      description: 'Comprehensive analytics platform for e-commerce businesses with real-time data visualization.',
      stack: ['Vue.js', 'D3.js', 'Python', 'Redis'],
      github: 'https://github.com/shubham-attri/analytics-dashboard',
      live: null
    },
    {
      title: 'GitHub Copilot Integration',
      description: 'Custom IDE extension that enhances GitHub Copilot with project-specific context and suggestions.',
      stack: ['TypeScript', 'VS Code API', 'OpenAI', 'GitHub API'],
      github: 'https://github.com/shubham-attri/copilot-extension',
      live: null
    },
    {
      title: 'Microservices Orchestrator',
      description: 'Container orchestration platform for managing microservices with automatic scaling and load balancing.',
      stack: ['Docker', 'Kubernetes', 'Go', 'gRPC'],
      github: 'https://github.com/shubham-attri/micro-orchestrator',
      live: null
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Navigation removed, now handled by Navbar component */}
        {/* Hero Section */}
        <section className="min-h-screen bg-[#0A0A0A] relative flex items-center justify-center overflow-hidden">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection reducedMotion={true}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight font-space-grotesk leading-none mb-8">
                <span className="bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
                  Things I&#39;ve
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-200 via-green-100 to-white bg-clip-text text-transparent">
                  Built
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} reducedMotion={true}>
              <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
                Systems, tools, and experiments that solve real problems.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} reducedMotion={true}>
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection reducedMotion={true}>
              <h2 className="text-4xl font-bold text-center mb-16 text-white font-space-grotesk">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={project.title} delay={index * 0.05} reducedMotion={true}>
                  <div
                    className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Featured badge */}
                        {project.featured && (
                          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            Featured
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                          {project.description}
                        </p>

                        {/* Stack tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4 mt-auto">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/link"
                            >
                              <span className="text-sm font-medium">GitHub</span>
                              <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                          
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                            >
                              <span className="text-sm font-medium">Live Demo</span>
                              <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection reducedMotion={true}>
              <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/10 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-6 font-space-grotesk">
                  Want a walkthrough of these builds?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Dive deeper into the technical decisions, challenges, and learnings behind each project.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                >
                  Read My Blog
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection reducedMotion={true}>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="text-4xl font-bold text-purple-400 mb-2 font-space-grotesk">6+</div>
                  <div className="text-gray-400">Projects Shipped</div>
                </div>
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="text-4xl font-bold text-blue-400 mb-2 font-space-grotesk">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="text-4xl font-bold text-green-400 mb-2 font-space-grotesk">15+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="text-4xl font-bold text-yellow-400 mb-2 font-space-grotesk">∞</div>
                  <div className="text-gray-400">Learning Mindset</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
} 