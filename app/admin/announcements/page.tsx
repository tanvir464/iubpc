'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, Calendar, Pin, Megaphone } from 'lucide-react'

const mockAnnouncements = [
  { id: 1, title: 'Contest #6 Registration Open', content: 'Registration for our 6th programming contest is now open!', type: 'contest', date: '2025-11-19', isPinned: true },
  { id: 2, title: 'Workshop: Advanced Data Structures', content: 'Join us for an intensive workshop on Advanced Data Structures.', type: 'workshop', date: '2025-11-18', isPinned: true },
  { id: 3, title: 'New Blog Post Published', content: 'Check out our latest blog post on Dynamic Programming techniques.', type: 'blog', date: '2025-11-15', isPinned: false },
]

export default function AdminAnnouncementsPage() {
  const [announcements, setAnnouncements] = useState(mockAnnouncements)
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
              <h1 className="text-3xl font-bold text-gradient">Manage Announcements</h1>
              <p className="text-muted-foreground mt-1">Post updates and announcements</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
          >
            <Plus size={20} />
            New Announcement
          </button>
        </div>

        {/* New Announcement Form */}
        {showForm && (
          <div className="glass rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Create New Announcement</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Title</label>
                  <input type="text" placeholder="Announcement title..." className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Type</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all">
                    <option>Contest</option>
                    <option>Workshop</option>
                    <option>Blog</option>
                    <option>Results</option>
                    <option>Newsletter</option>
                    <option>Opportunity</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Content</label>
                  <textarea rows={4} placeholder="Announcement content..." className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all resize-none" />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="pin" className="w-4 h-4 rounded border-border" />
                  <label htmlFor="pin" className="text-sm font-bold flex items-center gap-2">
                    <Pin size={16} />
                    Pin this announcement
                  </label>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 transition-all">
                  Publish
                </button>
                <button onClick={() => setShowForm(false)} className="px-6 py-3 glass rounded-xl font-bold hover:-translate-y-1 transition-all">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <p className="text-sm text-muted-foreground mb-1">Total Announcements</p>
              <p className="text-3xl font-bold text-gradient">{announcements.length}</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <p className="text-sm text-muted-foreground mb-1">Pinned</p>
              <p className="text-3xl font-bold text-gradient">{announcements.filter(a => a.isPinned).length}</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <p className="text-sm text-muted-foreground mb-1">This Month</p>
              <p className="text-3xl font-bold text-gradient">{announcements.filter(a => new Date(a.date).getMonth() === new Date().getMonth()).length}</p>
            </div>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div
              key={announcement.id}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {announcement.isPinned && (
                      <Pin size={18} className="text-primary" />
                    )}
                    <h3 className="text-xl font-bold flex-1">{announcement.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      announcement.type === 'contest' ? 'bg-red-500/10 text-red-600' :
                      announcement.type === 'workshop' ? 'bg-blue-500/10 text-blue-600' :
                      'bg-green-500/10 text-green-600'
                    }`}>
                      {announcement.type}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-3">{announcement.content}</p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    {new Date(announcement.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
