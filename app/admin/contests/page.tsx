'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, Calendar, Clock, Users } from 'lucide-react'

const mockContests = [
  { id: 6, title: 'Algorithm Master', status: 'upcoming', date: '2025-12-01', time: '14:00 - 18:00', participants: 145, difficulty: 'Medium' },
  { id: 5, title: 'Data Structure Challenge', status: 'completed', date: '2025-10-20', time: '14:00 - 18:00', participants: 132, difficulty: 'Medium' },
  { id: 4, title: 'Speed Coding', status: 'completed', date: '2025-09-15', time: '15:00 - 17:00', participants: 118, difficulty: 'Easy' },
]

export default function AdminContestsPage() {
  const [contests, setContests] = useState(mockContests)
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
              <h1 className="text-3xl font-bold text-gradient">Manage Contests</h1>
              <p className="text-muted-foreground mt-1">Create, edit, and manage programming contests</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
          >
            <Plus size={20} />
            New Contest
          </button>
        </div>

        {/* New Contest Form */}
        {showForm && (
          <div className="glass rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Create New Contest</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Contest Title</label>
                  <input type="text" placeholder="e.g., Algorithm Master Challenge" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Difficulty</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Date</label>
                  <input type="date" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Time</label>
                  <input type="text" placeholder="14:00 - 18:00" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2">Description</label>
                  <textarea rows={3} placeholder="Contest description..." className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all resize-none" />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 transition-all">
                  Create Contest
                </button>
                <button onClick={() => setShowForm(false)} className="px-6 py-3 glass rounded-xl font-bold hover:-translate-y-1 transition-all">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contests List */}
        <div className="space-y-4">
          {contests.map((contest, index) => (
            <div
              key={contest.id}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">{contest.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${contest.status === 'upcoming' ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-gray-500/10 text-gray-600 dark:text-gray-400'}`}>
                      {contest.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${contest.difficulty === 'Easy' ? 'bg-green-500/10 text-green-600' : contest.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-600' : 'bg-red-500/10 text-red-600'}`}>
                      {contest.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(contest.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {contest.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {contest.participants} registered
                    </div>
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
