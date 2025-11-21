import { AlertCircle, Calendar, Megaphone, Zap, Pin } from 'lucide-react'

const announcements = [
  {
    id: 1,
    title: 'Contest #6 Registration Open',
    content: 'Registration for our 6th programming contest is now open! Limited spots available.',
    type: 'contest',
    date: '2025-11-19',
    isPinned: true,
  },
  {
    id: 2,
    title: 'Workshop: Advanced Data Structures',
    content: 'Join us for an intensive workshop on Advanced Data Structures. Free for all members.',
    type: 'workshop',
    date: '2025-11-18',
    isPinned: true,
  },
  {
    id: 3,
    title: 'New Blog Post Published',
    content: 'Check out our latest blog post on Dynamic Programming techniques.',
    type: 'blog',
    date: '2025-11-15',
    isPinned: false,
  },
  {
    id: 4,
    title: 'Contest #5 Results Announced',
    content: 'Congratulations to all participants! Results are now available on the leaderboard.',
    type: 'results',
    date: '2025-11-12',
    isPinned: false,
  },
  {
    id: 5,
    title: 'Membership Drive Campaign',
    content: 'Invite your friends to join IUB Programming Club. New member benefits inside!',
    type: 'general',
    date: '2025-11-10',
    isPinned: false,
  },
  {
    id: 6,
    title: 'Gallery Update: Contest #5 Photos',
    content: 'Check out the photos from our latest contest. Amazing moments captured!',
    type: 'general',
    date: '2025-11-08',
    isPinned: false,
  },
]

const typeConfig: Record<string, { color: string; bg: string; label: string }> = {
  contest: { color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/30', label: 'Contest' },
  workshop: { color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/30', label: 'Workshop' },
  blog: { color: 'text-green-500', bg: 'bg-green-500/10 border-green-500/30', label: 'Blog' },
  results: { color: 'text-purple-500', bg: 'bg-purple-500/10 border-purple-500/30', label: 'Results' },
  newsletter: { color: 'text-yellow-500', bg: 'bg-yellow-500/10 border-yellow-500/30', label: 'Newsletter' },
  opportunity: { color: 'text-indigo-500', bg: 'bg-indigo-500/10 border-indigo-500/30', label: 'Opportunity' },
  general: { color: 'text-gray-500', bg: 'bg-gray-500/10 border-gray-500/30', label: 'General' },
}

export default function AnnouncementsPage() {
  const pinnedAnnouncements = announcements.filter((a) => a.isPinned)
  const regularAnnouncements = announcements.filter((a) => !a.isPinned)

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
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Zap size={16} className="animate-pulse" />
              Latest Updates
            </div>

            <h1 className="text-foreground">
              <span className="text-gradient">Announcements</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stay in the loop with the latest contests, workshops, events, and community updates.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Megaphone size={16} />
                <span>{announcements.length} Updates</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Pin size={16} />
                <span>{pinnedAnnouncements.length} Pinned</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Pinned Announcements */}
      {pinnedAnnouncements.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Pin size={24} className="text-primary" />
              </div>
              <h2 className="font-bold text-3xl">Pinned Announcements</h2>
            </div>

            <div className="space-y-6">
              {pinnedAnnouncements.map((announcement, index) => {
                const config = typeConfig[announcement.type]
                return (
                  <div
                    key={announcement.id}
                    className="glass p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

                    <div className="relative z-10 flex items-start justify-between gap-6 flex-wrap">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4 py-2 rounded-full border border-primary/20">
                            {config.label}
                          </span>
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs border border-primary/20">
                            <Pin size={14} />
                            Pinned
                          </span>
                        </div>

                        <h3 className="font-bold text-2xl group-hover:text-primary transition-colors">
                          {announcement.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {announcement.content}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          {new Date(announcement.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Announcements */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="mb-4">Recent Updates</h2>
            <p className="text-muted-foreground">All the latest news from the IUBPC community.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {regularAnnouncements.map((announcement, index) => {
              const config = typeConfig[announcement.type]
              return (
                <div
                  key={announcement.id}
                  className="glass p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${(index + pinnedAnnouncements.length) * 100}ms` }}
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10 space-y-4">
                    <span className="text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4 py-2 rounded-full border border-primary/20">
                      {config.label}
                    </span>

                    <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">
                      {announcement.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {announcement.content}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                      <Calendar size={14} />
                      {new Date(announcement.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
