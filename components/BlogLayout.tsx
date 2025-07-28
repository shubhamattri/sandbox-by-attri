import React from 'react';
import Link from 'next/link';

export default function BlogLayout({ children }: { children: unknown }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-purple-400 hover:underline">← Back to Blog</Link>
        </nav>
        <article className="prose prose-invert max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
} 