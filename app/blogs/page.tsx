import Link from 'next/link'
import { ArrowRight, Calendar, Clock, BookOpen, Sparkles } from 'lucide-react'

const blogs = [
  {
    id: 1,
    title: 'Dynamic Programming: The Art of Efficient Computation',
    excerpt: 'Master the fundamentals of dynamic programming with real-world examples and step-by-step explanations.',
    author: 'Ahmed Hassan',
    date: '2025-11-15',
    category: 'Algorithms',
    readTime: '12 min',
  },
  {
    id: 2,
    title: 'System Design Fundamentals for Beginners',
    excerpt: 'Learn the core principles of system design and how to architect scalable applications.',
    author: 'Sarah Khan',
    date: '2025-11-10',
    category: 'System Design',
    readTime: '15 min',
  },
  {
    id: 3,
    title: 'Competitive Programming: Strategies That Work',
    excerpt: 'Proven strategies and tips from competitive programmers to help you rank higher in contests.',
    author: 'Muhammad Ali',
    date: '2025-11-05',
    category: 'Competitive Programming',
    readTime: '10 min',
  },
  {
    id: 4,
    title: 'Graph Theory Explained: Nodes and Edges',
    excerpt: 'Deep dive into graph algorithms with visual explanations and code implementations.',
    author: 'Fatima Zahra',
    date: '2025-11-01',
    category: 'Data Structures',
    readTime: '18 min',
  },
  {
    id: 5,
    title: 'Web Development Best Practices',
    excerpt: 'Essential practices for building fast, secure, and maintainable web applications.',
    author: 'Hassan Ahmed',
    date: '2025-10-28',
    category: 'Web Development',
    readTime: '14 min',
  },
  {
    id: 6,
    title: 'The Future of AI in Competitive Programming',
    excerpt: 'Exploring how artificial intelligence is changing the landscape of competitive programming.',
    author: 'Zainab Khan',
    date: '2025-10-25',
    category: 'AI & ML',
    readTime: '11 min',
  },
]

export default function BlogsPage() {
  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Sparkles size={16} className="animate-pulse" />
              Knowledge Base
            </div>

            <h1 className="text-foreground">
              <span className="text-gradient">Blogs & Articles</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Deep dives into algorithms, system design, competitive programming, and everything in between.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>{blogs.length} Articles</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>10-18 min reads</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Blogs Grid */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.id}`}
                className="group"
              >
                <article
                  className="glass h-full p-8 rounded-2xl flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4 py-2 rounded-full border border-primary/20">
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={14} />
                        {blog.readTime}
                      </div>
                    </div>

                    <h3 className="font-bold text-xl mb-4 leading-tight group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-border text-xs">
                      <span className="font-medium text-foreground">{blog.author}</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar size={14} />
                        {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20" />

          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Animated Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 space-y-8">
              <h2 className="text-white mb-4">Never Miss an Article</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Get the latest blog posts, tutorials, and programming insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
                />
                <button className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
