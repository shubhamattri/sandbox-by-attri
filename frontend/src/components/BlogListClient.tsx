'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  excerpt?: string;
}

export default function BlogListClient({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="space-y-8">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
          className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 relative overflow-hidden"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl font-bold font-serif group-hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              <span className="ml-auto text-gray-400 text-sm">{post.date}</span>
            </div>
            <div className="flex gap-2 mb-4">
              {post.tags && post.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-purple-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 text-lg font-light">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-purple-400 font-medium group-hover:translate-x-1 transition-transform">
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
} 