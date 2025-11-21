import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'

const blogPosts: Record<number, any> = {
  1: {
    title: 'Dynamic Programming: The Art of Efficient Computation',
    author: 'Ahmed Hassan',
    date: '2025-11-15',
    category: 'Algorithms',
    readTime: '12 min',
    content: `
      <h2>Introduction</h2>
      <p>Dynamic Programming (DP) is one of the most powerful problem-solving techniques in computer science. It combines two key concepts: breaking problems into overlapping subproblems and storing results to avoid redundant calculations.</p>

      <h2>What is Dynamic Programming?</h2>
      <p>Dynamic Programming is an optimization technique that solves complex problems by breaking them down into simpler subproblems and storing the results to avoid recalculating them.</p>

      <h2>Key Principles</h2>
      <p>1. <strong>Optimal Substructure:</strong> The solution to a problem can be constructed from solutions to its subproblems.</p>
      <p>2. <strong>Overlapping Subproblems:</strong> The same subproblems are solved multiple times in a naive recursive approach.</p>

      <h2>Applications</h2>
      <p>Dynamic Programming is used in:</p>
      <ul>
        <li>Fibonacci sequence calculation</li>
        <li>Longest Common Subsequence</li>
        <li>0/1 Knapsack Problem</li>
        <li>Matrix Chain Multiplication</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Mastering Dynamic Programming is essential for competitive programming. Start with simple problems and gradually move to complex ones. Practice is the key to mastery!</p>
    `,
  },
  2: {
    title: 'System Design Fundamentals for Beginners',
    author: 'Sarah Khan',
    date: '2025-11-10',
    category: 'System Design',
    readTime: '15 min',
    content: `
      <h2>What is System Design?</h2>
      <p>System design is the process of defining the elements of a system and how they interact. It's crucial for building scalable, reliable applications.</p>

      <h2>Core Concepts</h2>
      <p>Learn about load balancing, databases, caching, and more in this comprehensive guide.</p>

      <h2>Practical Tips</h2>
      <p>Start small, think about scalability from day one, and always consider trade-offs in your design decisions.</p>
    `,
  },
  3: {
    title: 'Competitive Programming: Strategies That Work',
    author: 'Muhammad Ali',
    date: '2025-11-05',
    category: 'Competitive Programming',
    readTime: '10 min',
    content: `
      <h2>Getting Started</h2>
      <p>Competitive programming requires practice, strategy, and a deep understanding of algorithms and data structures.</p>

      <h2>Proven Strategies</h2>
      <p>1. Read problems carefully</p>
      <p>2. Start with easier problems</p>
      <p>3. Practice regularly</p>
      <p>4. Learn from others' solutions</p>

      <h2>Final Thoughts</h2>
      <p>Success in competitive programming comes with consistent practice and a positive mindset.</p>
    `,
  },
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts[parseInt(id)] || blogPosts[1]

  return (
    <main className="flex-1">
      {/* Back Button & Header */}
      <section className="relative overflow-hidden py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 mb-8 font-bold hover:text-primary transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>

          <article>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="text-xs font-medium bg-primary/10 border border-primary/30 px-3 py-1 rounded-full text-primary">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={12} />
                  {post.readTime}
                </div>
              </div>

              <h1 className="mb-6">{post.title}</h1>

              <div className="glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="font-bold">{post.author}</p>
                    <p className="text-xs text-muted-foreground">Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-lg max-w-none">
          <div
            className="text-foreground leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </div>

        {/* Related/CTA */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="font-bold text-xl mb-6">More to Explore</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/blogs">
              <div className="glass p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <p className="font-bold mb-2 group-hover:text-primary transition-colors">All Blog Posts</p>
                <p className="text-sm text-muted-foreground">Explore our full collection of articles</p>
              </div>
            </Link>
            <Link href="/contests">
              <div className="glass p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <p className="font-bold mb-2 group-hover:text-secondary transition-colors">Join a Contest</p>
                <p className="text-sm text-muted-foreground">Apply your knowledge in competitions</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
