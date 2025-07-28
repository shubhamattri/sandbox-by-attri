'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface BlogLayoutProps {
  children: ReactNode;
  meta: any;
  slug: string;
}

const BlogLayout = ({ children, meta, slug }: BlogLayoutProps) => {
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const el = contentRef.current;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = el.scrollHeight - winH;
      const scrolled = window.scrollY - el.offsetTop;
      setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Back Link */}
      <div className="max-w-3xl mx-auto pt-8 px-4">
        <Link href="/blog" className="text-purple-400 hover:text-white text-sm font-medium flex items-center gap-2 mb-8">
          ← Back to Blog
        </Link>
      </div>
      {/* Blog Content */}
      <div ref={contentRef} className="max-w-3xl mx-auto px-4 pb-24 pt-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
          {meta.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
          <span>{meta.date}</span>
          {meta.tags && (
            <div className="flex gap-2">
              {meta.tags.map((tag: string) => (
                <span key={tag} className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-purple-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {children}
      </div>
      {/* Footer CTA */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <h3 className="text-xl font-bold mb-2">Like this piece? Let’s talk.</h3>
          <Link href="/about" className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all duration-300 mt-2">
            About Shubham
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout; 