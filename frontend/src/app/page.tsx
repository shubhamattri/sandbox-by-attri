'use client';

import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import LoadingScreen from '@/components/LoadingScreen';
import SparkleEffect from '@/components/SparkleEffect';

import * as React from 'react';
import { Command } from 'cmdk';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(true);
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const paletteRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey && e.key.toLowerCase() === 'k') || e.key === '/') {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if (e.key === 'Escape') setPaletteOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);



  // Navigation handlers
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const actions = [
    { label: 'Go to About', shortcut: 'A', onSelect: () => window.location.href = '/about' },
    { label: 'See Projects', shortcut: 'W', onSelect: () => window.location.href = '/work' },
    { label: 'Peek My Brain', shortcut: 'B', onSelect: () => window.location.href = '/blog' },
    { label: 'Send a Message', shortcut: 'C', onSelect: () => scrollToSection('contact') },
    { label: 'Read Operating Principles', shortcut: 'P', onSelect: () => scrollToSection('principles') },
    { label: 'Open GitHub', shortcut: 'G', onSelect: () => window.open('https://github.com/shubham-attri', '_blank') },
  ];
  const [search, setSearch] = React.useState('');
  const filtered = actions.filter(a => a.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {/* Command Palette */}
      <Command.Dialog
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        label="Command Palette"
        className="fixed z-[100] inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <div ref={paletteRef} className="w-full max-w-md mx-auto rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden">
          <Command.Input
            autoFocus
            value={search}
            onValueChange={setSearch}
            placeholder="Type a command or search..."
            className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none border-b border-white/10"
          />
          <Command.List className="max-h-72 overflow-y-auto">
            {filtered.length === 0 && (
              <Command.Empty className="text-gray-400 px-4 py-6">No results found.</Command.Empty>
            )}
            {filtered.map((action) => (
              <Command.Item
                key={action.label}
                onSelect={action.onSelect}
                className="flex items-center justify-between px-4 py-3 cursor-pointer text-white hover:bg-white/10 transition-all group"
              >
                <span>{action.label}</span>
                <span className="text-xs text-gray-400 group-hover:text-purple-400 transition">{action.shortcut}</span>
              </Command.Item>
            ))}
          </Command.List>
          <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-400 bg-white/5 border-t border-white/10">
            <span>Navigate with ↑ ↓, Enter</span>
            <span>Shortcut: <kbd className="px-1 py-0.5 bg-black/30 rounded">⌘K</kbd> or <kbd className="px-1 py-0.5 bg-black/30 rounded">/</kbd></span>
          </div>
        </div>
      </Command.Dialog>

      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />

        {/* Manifest Drop - Hero Section */}
        <section className="min-h-screen bg-[#0A0A0A] flex flex-col justify-center items-center px-2 sm:px-4 md:px-8 py-10 md:py-24 z-0 overflow-hidden scroll-snap-align-start" style={{ scrollMarginBottom: '4rem' }}>
          {/* Animated Terminal Grid Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.10 }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a855f7" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] opacity-90"></div>
          
          {/* Floating emoji Easter eggs */}
          <motion.div 
            className="absolute top-20 left-10 text-2xl opacity-20"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            👀
          </motion.div>
          <motion.div 
            className="absolute top-40 right-20 text-2xl opacity-20"
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            💥
          </motion.div>
          <motion.div 
            className="absolute bottom-40 left-20 text-2xl opacity-20"
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            🫠
          </motion.div>

          <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-8 md:gap-0 items-center md:items-stretch overflow-hidden">
            {/* Left Side - Headline/Card */}
            <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start mb-8 md:mb-0">
              <div className="rounded-2xl border border-purple-500/30 bg-[#18122B]/80 p-4 sm:p-6 md:p-12 max-w-full sm:max-w-xl w-full mx-auto relative overflow-hidden z-0 shadow-lg" style={{ background: 'radial-gradient(ellipse at center, rgba(161, 127, 255, 0.08), transparent 80%)' }}>
                <AnimatedSection>
                  {/* Main 3-line headline with enhanced scroll-reveal */}
                  <SparkleEffect>
                    <div className="group cursor-pointer">
                      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight font-space-grotesk leading-none mb-6 sm:mb-8 max-w-full break-words text-balance text-center md:text-left">
                        <motion.span 
                          className="block bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          whileHover={{ 
                            filter: "contrast(1.2) brightness(1.1)",
                            textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
                            scale: 1.02
                          }}
                        >
                          Attri
                        </motion.span>
                        <motion.span 
                          className="block bg-gradient-to-r from-purple-200 via-blue-100 to-white bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          whileHover={{ 
                            filter: "contrast(1.2) brightness(1.1)",
                            textShadow: "0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.3)",
                            scale: 1.02
                          }}
                        >
                          / Systems
                        </motion.span>
                        <motion.span 
                          className="block bg-gradient-to-r from-blue-200 via-purple-100 to-white bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          whileHover={{ 
                            filter: "contrast(1.2) brightness(1.1)",
                            textShadow: "0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.3)",
                            scale: 1.02
                          }}
                        >
                          / Unfiltered
                        </motion.span>
                      </h1>
                      {/* Subtitle */}
                      <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                        <span className="text-sm sm:text-base md:text-lg text-purple-300 font-mono tracking-tight border-l-4 border-purple-500/40 pl-3 sm:pl-4 py-1 max-w-full break-words text-center md:text-left">
                          A sandbox for building, breaking, and rebuilding.
                        </span>
                      </div>
                      {/* CTA Button */}
                      <SparkleEffect>
                        <motion.button
                          whileHover={{ scale: 1.07, boxShadow: '0 0 24px 4px #a855f7', filter: 'drop-shadow(0 0 12px #a855f7)', background: 'linear-gradient(90deg, #a855f7 0%, #6366f1 100%)' }}
                          whileTap={{ scale: 0.96 }}
                          className="mt-2 px-4 sm:px-6 md:px-8 py-3 rounded-full bg-purple-600 text-white font-bold text-sm sm:text-base md:text-lg shadow-lg hover:bg-purple-700 transition-all duration-300 border-2 border-purple-500/30 w-full max-w-xs mx-auto md:mx-0 focus:outline-none focus:ring-2 focus:ring-purple-400"
                          onClick={() => window.location.href = '/work'}
                          tabIndex={0}
                          aria-label="Step Into My Sandbox"
                        >
                          Step Into My Sandbox →
                        </motion.button>
                      </SparkleEffect>
                    </div>
                  </SparkleEffect>
                </AnimatedSection>
              </div>

              {/* Vertical subtext */}
              <AnimatedSection delay={0.3}>
                <div className="relative mb-12">
                  <motion.p 
                    className="text-lg md:text-xl text-gray-400 font-light transform -rotate-90 origin-left absolute left-0 top-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    No trend-jumping. Just timeless builds.
                  </motion.p>
                </div>
              </AnimatedSection>

              {/* Removed duplicate CTA to avoid repetition */}
            </div>

            {/* Right Side - 40% */}
            <div className="w-full md:w-[320px] flex items-center justify-center mx-auto py-4 md:py-0">
              <AnimatedSection delay={0.4}>
                <div className="relative h-56 sm:h-72 md:h-96 flex flex-col justify-center overflow-hidden w-full max-w-xs mx-auto gap-y-4 sm:gap-y-6">
                  {/* Auto-scrolling vertical marquee */}
                  <motion.div 
                    className="space-y-8"
                    animate={{ y: [0, -400] }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear",
                      repeatDelay: 2
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Duplicate items for seamless loop */}
                    {[
                      { emoji: "🧠", label: "Ideas", color: "purple" },
                      { emoji: "🛠️", label: "Projects", color: "blue" },
                      { emoji: "📸", label: "Visuals", color: "green" },
                      { emoji: "⚗️", label: "Experiments", color: "yellow" },
                      { emoji: "🧠", label: "Ideas", color: "purple" },
                      { emoji: "🛠️", label: "Projects", color: "blue" },
                      { emoji: "📸", label: "Visuals", color: "green" },
                      { emoji: "⚗️", label: "Experiments", color: "yellow" }
                    ].map((item, index) => (
                      <motion.div
                        key={`${item.label}-${index}`}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (index % 4) * 0.2, duration: 0.6 }}
                        whileHover={{ 
                          x: -10,
                          scale: 1.05,
                          filter: "brightness(1.2)",
                          boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                        }}
                      >
                        <div className="flex items-center gap-4 backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/10 hover:border-white/20 shadow-lg transition-all duration-300">
                          <span className="text-2xl md:text-3xl flex items-center justify-center">{item.emoji}</span>
                          <span className="text-base md:text-xl font-medium text-white font-mono tracking-wide">{item.label}</span>
                          <motion.svg 
                            className="w-5 h-5 text-white/60 group-hover:text-white transition-colors ml-auto"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Glass footer strip with enhanced marquee */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/5 backdrop-blur-xl border-t border-white/10 overflow-hidden">
            <motion.div
              className="flex items-center h-full text-white/60 text-sm font-medium whitespace-nowrap"
              animate={{ x: [0, -1200] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <span className="mr-8">Built with angst & chai</span>
              <span className="mr-8">•</span>
              <span className="mr-8">Published in public</span>
              <span className="mr-8">•</span>
              <span className="mr-8">No trend-jumping</span>
              <span className="mr-8">•</span>
              <span className="mr-8">Built with angst & chai</span>
              <span className="mr-8">•</span>
              <span className="mr-8">Published in public</span>
              <span className="mr-8">•</span>
              <span className="mr-8">No trend-jumping</span>
              <span className="mr-8">•</span>
              <span className="mr-8">Built with angst & chai</span>
              <span className="mr-8">•</span>
              <span className="mr-8">Published in public</span>
              <span className="mr-8">•</span>
              <span className="mr-8">No trend-jumping</span>
              <span className="mr-8">•</span>
            </motion.div>
            
            {/* Static signature */}
            <div className="absolute bottom-2 right-4 text-white/40 text-xs font-light tracking-widest">
              Shubham Attri © 2025 — Break the feed
            </div>
          </div>
        </section>

        {/* Build in Public Wall - Responsive tweaks */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-2 sm:px-4 md:px-8">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-space-grotesk">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Build in Public
                </span>
              </h2>
            </AnimatedSection>
            <div className="flex flex-col gap-4 sm:gap-6">
              {[
                { emoji: '🚀', text: 'Launched: Guestbook MVP', date: 'Jul 2025', link: '/guestbook' },
                { emoji: '✍️', text: 'Wrote: “How a Spark Job Almost Broke Production”', date: 'Jul 2025', link: '/blog/spark-prod-incident' },
                { emoji: '📢', text: 'Published: “Unfiltered Manifesto”', date: 'Jun 2025', link: '/about' },
              ].map((item, i) => (
                <AnimatedSection key={item.text} delay={0.15 + i * 0.08}>
                  <a
                    href={item.link}
                    className={`group flex items-center gap-3 sm:gap-4 backdrop-blur-xl bg-white/10 glass-card p-4 sm:p-5 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.04] transition-all duration-300 hover:bg-purple-500/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400`}
                    style={{ textDecoration: 'none' }}
                    tabIndex={0}
                    aria-label={item.text}
                  >
                    <span className="text-2xl md:text-3xl select-none flex items-center justify-center">{item.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium text-base sm:text-lg">{item.text}</span>
                        {item.date && <span className="text-xs text-gray-400 ml-2">{item.date}</span>}
                        {i === 0 && <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">NEW</span>}
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12 text-white font-space-grotesk">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection delay={0.2}>
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 text-white font-space-grotesk">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">📧</span>
                      <a href="mailto:sattri12@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors underline">sattri12@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">💼</span>
                      <a href="https://www.linkedin.com/in/shubham-attri/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors underline">LinkedIn: /in/shubham-attri</a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">🐙</span>
                      <a href="https://github.com/shubhamattri" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors underline">GitHub: shubhamattri</a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">📍</span>
                      <span className="text-gray-300">Delhi, India</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <motion.textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                        required
                        whileFocus={{ scale: 1.03, boxShadow: '0 0 0 2px #a855f7' }}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.04, boxShadow: '0 2px 16px 0 #a855f7' }}
                      className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <span>Sent!</span>
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="inline-block text-green-400"
                          >
                            ✅
                          </motion.span>
                        </>
                      ) : isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                    {submitStatus === 'error' && (
                      <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                    )}
                    <p className="text-gray-400 text-xs text-center mt-2">Not a recruiter? Drop a note anyway.</p>
                  </form>
                </div>
              </AnimatedSection>
            </div>
        </div>
        </section>

        {/* Animated Footer */}
        <footer className="bg-[#0A0A0A] border-t border-white/10 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-8">
                <p className="text-gray-400 mb-4">
                  Made with <span className="text-yellow-400">⚡</span>, <span className="text-orange-400">☕</span> and a dash of <span className="text-purple-400">chaos</span>
                </p>
                <div className="flex justify-center items-center gap-4 sm:gap-6 mb-6">
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
                <a
                  href="/guestbook"
                  className="inline-block mt-2 px-4 sm:px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-200 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                  tabIndex={0}
                  aria-label="Leave a note in the guestbook"
                >
                  <span className="text-2xl align-middle">👋</span> Leave a note
                </a>
                <p className="text-gray-500 text-sm">
                  &copy; 2024 Shubham Attri. All rights reserved.
                </p>
              </div>
            </AnimatedSection>
          </div>
      </footer>
      </motion.div>
    </>
  );
}
