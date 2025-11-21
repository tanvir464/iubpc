'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, UserPlus, Edit, Trash2, Mail, Shield } from 'lucide-react'

const mockUsers = [
  { id: 1, name: 'Ahmed Hassan', email: 'ahmed@iub.edu', role: 'Admin', contests: 6, score: 4850, joined: '2024-01-15' },
  { id: 2, name: 'Sarah Khan', email: 'sarah@iub.edu', role: 'Member', contests: 6, score: 4720, joined: '2024-01-20' },
  { id: 3, name: 'Muhammad Ali', email: 'ali@iub.edu', role: 'Member', contests: 5, score: 4530, joined: '2024-02-10' },
  { id: 4, name: 'Fatima Zahra', email: 'fatima@iub.edu', role: 'Moderator', contests: 5, score: 4320, joined: '2024-02-15' },
]

export default function AdminUsersPage() {
  const [users, setUsers] = useState(mockUsers)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
              <h1 className="text-3xl font-bold text-gradient">User Management</h1>
              <p className="text-muted-foreground mt-1">View and manage club members</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 hover:scale-105 transition-all shadow-lg flex items-center gap-2">
            <UserPlus size={20} />
            Add User
          </button>
        </div>

        {/* Search Bar */}
        <div className="glass rounded-2xl p-4 mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl" />
          <div className="relative z-10 flex items-center gap-3">
            <Search size={20} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Users', value: users.length, color: 'from-blue-500 to-cyan-500' },
            { label: 'Admins', value: users.filter(u => u.role === 'Admin').length, color: 'from-red-500 to-orange-500' },
            { label: 'Moderators', value: users.filter(u => u.role === 'Moderator').length, color: 'from-purple-500 to-pink-500' },
            { label: 'Members', value: users.filter(u => u.role === 'Member').length, color: 'from-green-500 to-emerald-500' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
              <div className="relative z-10">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Users Table */}
        <div className="glass rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 bg-gradient-to-r from-primary to-secondary text-white p-4 font-bold text-sm">
            <div className="col-span-3">Name</div>
            <div className="col-span-3">Email</div>
            <div className="col-span-2">Role</div>
            <div className="col-span-1">Score</div>
            <div className="col-span-1">Contests</div>
            <div className="col-span-2">Actions</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border">
            {filteredUsers.map((user, i) => (
              <div
                key={user.id}
                className="grid grid-cols-12 gap-4 p-4 items-center text-sm hover:bg-muted/50 transition-all group"
              >
                <div className="col-span-3 font-bold">{user.name}</div>
                <div className="col-span-3 flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  {user.email}
                </div>
                <div className="col-span-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    user.role === 'Admin' ? 'bg-red-500/10 text-red-600' :
                    user.role === 'Moderator' ? 'bg-purple-500/10 text-purple-600' :
                    'bg-blue-500/10 text-blue-600'
                  }`}>
                    {user.role === 'Admin' && <Shield size={12} className="inline mr-1" />}
                    {user.role}
                  </span>
                </div>
                <div className="col-span-1 font-bold text-gradient">{user.score}</div>
                <div className="col-span-1 text-muted-foreground">{user.contests}</div>
                <div className="col-span-2 flex items-center gap-2">
                  <button className="p-2 glass rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 glass rounded-lg hover:bg-red-500 hover:text-white transition-all">
                    <Trash2 size={16} />
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
