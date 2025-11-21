'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Lock, Shield, Key, AlertTriangle, Settings } from 'lucide-react'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true)
    } else {
      alert('Invalid password')
    }
  }

  if (!isAuthenticated) {
    return (
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[60vh] flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-background to-orange-500/10 -z-10" />

          {/* Floating Orbs */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] animate-pulse-glow -z-10" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-medium text-sm mb-6">
                  <Lock size={16} className="animate-pulse" />
                  Restricted Area
                </div>

                <h1 className="text-foreground"><span className="text-gradient">Admin Access</span></h1>

              </div>

              <div className="glass rounded-2xl p-8 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl" />

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-red-500/50">
                      <Shield size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Login Form */}
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-bold text-foreground flex items-center gap-2">
                        <Key size={16} />
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter admin password"
                        className="w-full px-4 py-3 bg-background/50 backdrop-blur-xl border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-red-500/25"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Lock size={18} />
                        Authenticate
                      </span>
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[100px] animate-pulse-glow -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 font-medium text-sm">
              <Shield size={16} />
              Authenticated
            </div>

            <h1 className="text-foreground">
              <span className="text-gradient">Admin Dashboard</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Manage your club, contests, content, and members from one central location.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Settings size={16} />
                <span>Full Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Cards */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Manage Contests', desc: 'Create, edit, and manage programming contests', color: 'from-blue-500 to-cyan-500', href: '/admin/contests' },
              { title: 'User Management', desc: 'View and manage club members', color: 'from-purple-500 to-pink-500', href: '/admin/users' },
              { title: 'Blog Posts', desc: 'Create and publish blog articles', color: 'from-green-500 to-emerald-500', href: '/admin/blogs' },
              { title: 'Announcements', desc: 'Post updates and announcements', color: 'from-orange-500 to-red-500', href: '/admin/announcements' },
              { title: 'Leaderboard', desc: 'Update scores and rankings', color: 'from-yellow-500 to-orange-500', href: '/admin/leaderboard' },
              { title: 'Gallery', desc: 'Upload and manage event photos', color: 'from-indigo-500 to-purple-500', href: '/admin/gallery' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="glass p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden text-left block"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10 space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Shield size={24} className="text-white" />
                  </div>

                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Logout Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-8 py-4 glass rounded-full font-bold hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
