import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogListClient from '@/components/BlogListClient';
import Navbar from '@/components/Navbar';

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  excerpt?: string;
};

export default async function BlogPage() {
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDir);
  const posts: PostMeta[] = files.map((file) => {
    const source = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const { data } = matter(source);
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title || 'Untitled',
      date: data.date || '',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
    };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-white">
        <div className="max-w-3xl mx-auto pt-16 px-4 pb-24">
          <h1 className="text-5xl font-bold font-space-grotesk mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Blog
            </span>
          </h1>
          <BlogListClient posts={posts} />
        </div>
      </div>
    </>
  );
} 