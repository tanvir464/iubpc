'use client'

import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Lock, Shield, Key } from 'lucide-react'

export default function AdminPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { data: session, status } = useSession()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else if (result?.ok) {
        router.refresh()
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // If already authenticated, show dashboard
  if (status === 'loading') {
    return (
      <main className="flex-1 pt-20">
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </main>
    )
  }

  if (session && (session.user.role === 'ADMIN' || session.user.role === 'MODERATOR')) {
    return (
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[60vh] flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />

          {/* Floating Orbs */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow -z-10" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
            <div className="text-center mb-12 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 font-medium text-sm">
                <Shield size={16} />
                Authenticated as {session.user.role}
              </div>

              <h1 className="text-foreground">
                <span className="text-gradient">Admin Dashboard</span>
              </h1>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Welcome back, {session.user.name}. Manage all aspects of the IUBPC platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'User Management',
                  description: 'Manage users, roles, and permissions',
                  href: '/admin/users',
                  color: 'from-blue-500 to-cyan-500',
                  icon: '👥',
                },
                {
                  title: 'Contest Management',
                  description: 'Create and manage programming contests',
                  href: '/admin/contests',
                  color: 'from-purple-500 to-pink-500',
                  icon: '🏆',
                },
                {
                  title: 'Blog Management',
                  description: 'Write and publish blog posts',
                  href: '/admin/blogs',
                  color: 'from-orange-500 to-red-500',
                  icon: '📝',
                },
                {
                  title: 'Announcements',
                  description: 'Post important announcements',
                  href: '/admin/announcements',
                  color: 'from-green-500 to-emerald-500',
                  icon: '📢',
                },
                {
                  title: 'Gallery',
                  description: 'Upload and manage event photos',
                  href: '/admin/gallery',
                  color: 'from-yellow-500 to-orange-500',
                  icon: '🖼️',
                },
                {
                  title: 'Leaderboard',
                  description: 'Manage rankings and scores',
                  href: '/admin/leaderboard',
                  color: 'from-indigo-500 to-purple-500',
                  icon: '📊',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />

                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    )
  }

  // Show login form
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
            <div className="text-center mb-8 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-medium text-sm">
                <Lock size={16} className="animate-pulse" />
                Restricted Area
              </div>

              <h1 className="text-foreground"><span className="text-gradient">Admin Access</span></h1>

              <p className="text-muted-foreground">
                This area is restricted to authorized administrators only. Please login to continue.
              </p>
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

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-600 dark:text-red-400 text-sm text-center">
                    {error}
                  </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-foreground flex items-center gap-2">
                      <Key size={16} />
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-background/50 backdrop-blur-xl border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-bold text-foreground flex items-center gap-2">
                      <Lock size={16} />
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 bg-background/50 backdrop-blur-xl border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                      required
                      disabled={loading}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Authenticating...
                        </>
                      ) : (
                        <>
                          <Lock size={18} />
                          Sign In
                        </>
                      )}
                    </span>
                  </button>
                </form>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Protected by NextAuth with bcrypt password hashing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
