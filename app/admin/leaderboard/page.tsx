'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trophy, TrendingUp, Users } from 'lucide-react'

const mockLeaderboard = [
  { rank: 1, name: 'Ahmed Hassan', score: 4850, contests: 6 },
  { rank: 2, name: 'Sarah Khan', score: 4720, contests: 6 },
  { rank: 3, name: 'Muhammad Ali', score: 4530, contests: 5 },
  { rank: 4, name: 'Fatima Zahra', score: 4320, contests: 5 },
  { rank: 5, name: 'Zainab Khan', score: 4150, contests: 5 },
]

export default function AdminLeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState(mockLeaderboard)
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
              <h1 className="text-3xl font-bold text-gradient">Manage Leaderboard</h1>
              <p className="text-muted-foreground mt-1">Update scores and rankings</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
          >
            <Plus size={20} />
            Update Score
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="text-yellow-500" size={24} />
                <p className="text-sm text-muted-foreground">Top Score</p>
              </div>
              <p className="text-3xl font-bold text-gradient">{leaderboard[0]?.score || 0}</p>
              <p className="text-sm text-muted-foreground mt-1">{leaderboard[0]?.name}</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-primary" size={24} />
                <p className="text-sm text-muted-foreground">Total Participants</p>
              </div>
              <p className="text-3xl font-bold text-gradient">{leaderboard.length}</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-green-500" size={24} />
                <p className="text-sm text-muted-foreground">Average Score</p>
              </div>
              <p className="text-3xl font-bold text-gradient">
                {Math.round(leaderboard.reduce((acc, user) => acc + user.score, 0) / leaderboard.length)}
              </p>
            </div>
          </div>
        </div>

        {/* Update Score Form */}
        {showForm && (
          <div className="glass rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Update User Score</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">User</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all">
                    {leaderboard.map(user => (
                      <option key={user.rank}>{user.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Score Change</label>
                  <input type="number" placeholder="+/- score" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Contests</label>
                  <input type="number" placeholder="Number of contests" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 transition-all">
                  Update Score
                </button>
                <button onClick={() => setShowForm(false)} className="px-6 py-3 glass rounded-xl font-bold hover:-translate-y-1 transition-all">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard Table */}
        <div className="glass rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 bg-gradient-to-r from-primary to-secondary text-white p-4 font-bold text-sm">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Name</div>
            <div className="col-span-3">Score</div>
            <div className="col-span-2">Contests</div>
            <div className="col-span-1">Edit</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border">
            {leaderboard.map((user, i) => (
              <div
                key={user.rank}
                className={`grid grid-cols-12 gap-4 p-4 items-center text-sm hover:bg-muted/50 transition-all ${
                  i < 3 ? 'bg-gradient-to-r from-primary/5 to-secondary/5' : ''
                }`}
              >
                <div className="col-span-1">
                  {user.rank === 1 && <Trophy size={24} className="text-yellow-500" />}
                  {user.rank === 2 && <Trophy size={24} className="text-gray-400" />}
                  {user.rank === 3 && <Trophy size={24} className="text-amber-700" />}
                  {user.rank > 3 && <span className="font-bold text-lg">{user.rank}</span>}
                </div>
                <div className="col-span-5 font-bold">{user.name}</div>
                <div className="col-span-3 font-bold text-base">
                  <span className="text-gradient">{user.score}</span>
                </div>
                <div className="col-span-2 text-muted-foreground">{user.contests}</div>
                <div className="col-span-1">
                  <button className="p-2 glass rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                    <Edit size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
