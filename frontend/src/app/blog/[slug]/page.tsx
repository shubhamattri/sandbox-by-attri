import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogLayout from '@/components/BlogLayout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const postPath = path.join(process.cwd(), 'src/content/blog', `${params.slug}.mdx`);
  if (!fs.existsSync(postPath)) return notFound();
  const source = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(source);

  return (
    <BlogLayout meta={data} slug={params.slug}>
      <article className="prose prose-lg prose-invert max-w-3xl mx-auto">
        <MDXRemote source={content} />
      </article>
    </BlogLayout>
  );
} 