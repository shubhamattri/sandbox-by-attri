import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

// This would typically come from a CMS or file system
const blogPosts = [
  {
    slug: 'first-post',
    title: 'Building My Personal Website with Next.js',
    date: '2024-07-28',
    description: 'A journey through building a modern personal website with the latest tech stack',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    slug: 'coming-soon',
    title: 'The Future of Web Development',
    date: '2024-08-01',
    description: 'Exploring emerging trends and technologies in web development',
    tags: ['Web Development', 'Trends', 'Technology'],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <article className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl font-semibold mb-3">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              More posts coming soon...
            </p>
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              ← Back to Home
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
} 