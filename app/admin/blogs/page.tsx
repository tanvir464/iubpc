'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, Calendar, Clock, Eye } from 'lucide-react'

const mockBlogs = [
  { id: 1, title: 'Dynamic Programming: The Art of Efficient Computation', author: 'Ahmed Hassan', date: '2025-11-15', category: 'Algorithms', readTime: '12 min', views: 1240 },
  { id: 2, title: 'System Design Fundamentals for Beginners', author: 'Sarah Khan', date: '2025-11-10', category: 'System Design', readTime: '15 min', views: 980 },
  { id: 3, title: 'Competitive Programming: Strategies That Work', author: 'Muhammad Ali', date: '2025-11-05', category: 'Competitive Programming', readTime: '10 min', views: 1560 },
]

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState(mockBlogs)
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="flex-1 min-h-screen bg-muted/30 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 glass rounded-full hover:-translate-y-1 transition-all">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gradient">Manage Blogs</h1>
              <p className="text-muted-foreground mt-1">Create and publish blog articles</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
          >
            <Plus size={20} />
            New Blog Post
          </button>
        </div>

        {/* New Blog Form */}
        {showForm && (
          <div className="glass rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Create New Blog Post</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Title</label>
                  <input type="text" placeholder="Blog post title..." className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Category</label>
                    <select className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all">
                      <option>Algorithms</option>
                      <option>System Design</option>
                      <option>Data Structures</option>
                      <option>Web Development</option>
                      <option>Competitive Programming</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Author</label>
                    <input type="text" placeholder="Author name" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Read Time</label>
                    <input type="text" placeholder="e.g., 10 min" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Excerpt</label>
                  <textarea rows={2} placeholder="Short description..." className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Content</label>
                  <textarea rows={10} placeholder="Blog content (Markdown supported)..." className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all resize-none font-mono text-sm" />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 transition-all">
                  Publish Post
                </button>
                <button className="px-6 py-3 glass rounded-xl font-bold hover:bg-muted transition-all">
                  Save Draft
                </button>
                <button onClick={() => setShowForm(false)} className="px-6 py-3 glass rounded-xl font-bold hover:-translate-y-1 transition-all">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blogs List */}
        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold flex-1">{blog.title}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                      {blog.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye size={16} />
                      {blog.views} views
                    </div>
                    <span>By {blog.author}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-3 glass rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                    <Edit size={18} />
                  </button>
                  <button className="p-3 glass rounded-xl hover:bg-red-500 hover:text-white transition-all">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
