import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import Image from 'next/image';

const spotlight = {
  logo: '/logo-placeholder.svg',
  title: 'Personal Command Center',
  tagline: 'Helping 10,000+ users manage their focus',
  tags: ['Next.js', 'TypeScript', 'Framer Motion', 'MongoDB'],
  bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  cta: {
    label: 'View Case Study →',
    href: '/work',
  },
};

const SpotlightProject = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <section className="relative py-32 bg-transparent">
      <div className="sticky top-24 z-20">
        <motion.div
          ref={ref}
          style={{ opacity, y }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl bg-white/5 relative"
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image src={spotlight.bg} alt="Spotlight Background" fill className="object-cover object-center opacity-60" priority unoptimized={spotlight.bg.startsWith('http')} />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-purple-900/30" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 p-12">
            {/* Logo */}
            <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center shadow-lg">
              <Image src={spotlight.logo} alt="Logo" width={64} height={64} className="w-16 h-16 object-contain" priority />
            </div>
            {/* Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {spotlight.title}
              </h2>
              <p className="text-xl text-white/80 mb-6 font-serif">{spotlight.tagline}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {spotlight.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1 bg-white/10 text-white/80 text-sm font-medium rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={spotlight.cta.href}
                className="inline-block px-8 py-4 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {spotlight.cta.label}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotlightProject; 