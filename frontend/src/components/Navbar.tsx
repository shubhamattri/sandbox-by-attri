'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  // On homepage mount, scroll to contact if needed
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/' && window.sessionStorage.getItem('scrollToContact')) {
      window.sessionStorage.removeItem('scrollToContact');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  }, [pathname]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('scrollToContact', '1');
      }
      router.push('/');
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-2xl bg-black/40 h-12' : 'backdrop-blur-xl bg-black/20 h-16'
      }`}
      style={{ boxShadow: scrolled ? '0 2px 16px 0 rgba(80,80,120,0.10)' : undefined }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full transition-all duration-300">
          <div className="flex items-center">
            <a
              href="/"
              onClick={handleHomeClick}
              className={`font-space-grotesk cursor-pointer font-bold transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              } text-white hover:text-purple-400`}
            >
              Shubham Attri
            </a>
          </div>
          <div className="flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname.startsWith(link.href.replace('/#contact', ''));
              if (link.label === 'Contact') {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleContactClick}
                    className={`relative transition-colors duration-200 px-1 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      isActive
                        ? 'text-purple-400 font-medium bg-purple-400/10 rounded'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{ transition: 'background 0.3s, color 0.3s' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-400 rounded"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors duration-200 px-1 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    isActive
                      ? 'text-purple-400 font-medium bg-purple-400/10 rounded'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={{ transition: 'background 0.3s, color 0.3s' }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-400 rounded"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            {/* Command Palette Button with Tooltip */}
            <div className="relative flex items-center">
              <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { metaKey: true, key: 'k' }))}
                className="ml-2 px-3 py-2 min-h-[44px] rounded bg-white/10 border border-white/20 text-white text-xs hover:bg-white/20 transition flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                title="Open Command Palette (⌘K)"
                tabIndex={0}
                role="button"
                aria-label="Open Command Palette"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4m0 0V7m0 4l-4-4m4 4l-4 4" /></svg>
                <span className="hidden sm:inline">Palette</span>
                <kbd className="ml-1 px-1 py-0.5 bg-black/30 rounded">⌘K</kbd>
              </button>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-black/90 text-xs text-white rounded shadow-lg z-50 whitespace-nowrap"
                >
                  Press <kbd className="px-1 py-0.5 bg-white/10 rounded">⌘K</kbd> to open the command palette
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 