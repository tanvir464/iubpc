'use client'

import { useState } from 'react'
import { Trash2, Edit2, Plus } from 'lucide-react'

export default function AdminBlogManager() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Dynamic Programming: The Art of Efficient Computation', author: 'Ahmed Hassan', views: 234 },
    { id: 2, title: 'System Design Fundamentals for Beginners', author: 'Sarah Khan', views: 189 },
    { id: 3, title: 'Competitive Programming: Strategies That Work', author: 'Muhammad Ali', views: 156 },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-black text-foreground">MANAGE BLOG POSTS</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground border-2 border-primary font-bold hover:bg-transparent hover:text-foreground transition-all">
          <Plus size={18} /> NEW POST
        </button>
      </div>

      <div className="border-2 border-primary overflow-hidden">
        <div className="grid grid-cols-12 gap-4 bg-primary text-primary-foreground p-4 font-black text-sm">
          <div className="col-span-6">TITLE</div>
          <div className="col-span-2">AUTHOR</div>
          <div className="col-span-2">VIEWS</div>
          <div className="col-span-2">ACTIONS</div>
        </div>

        <div className="divide-y divide-primary">
          {blogs.map((blog, i) => (
            <div key={blog.id} className={`grid grid-cols-12 gap-4 p-4 items-center text-sm ${i % 2 === 0 ? 'bg-muted' : ''}`}>
              <div className="col-span-6 font-bold">{blog.title}</div>
              <div className="col-span-2 font-mono">{blog.author}</div>
              <div className="col-span-2 font-mono">{blog.views}</div>
              <div className="col-span-2 flex gap-2">
                <button className="p-2 border border-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 border border-primary hover:bg-red-600 hover:border-red-600 hover:text-white transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
