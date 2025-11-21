import { TrendingUp, Users, BookOpen, Trophy } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    { icon: Users, label: 'Total Members', value: '150+', trend: '+12%' },
    { icon: Trophy, label: 'Contests', value: '6', trend: '+2' },
    { icon: BookOpen, label: 'Blog Posts', value: '50+', trend: '+5' },
    { icon: TrendingUp, label: 'Engagement', value: '87%', trend: '+4%' },
  ]

  const recentActivity = [
    { type: 'post', title: 'New blog post published', time: '2 hours ago' },
    { type: 'member', title: 'New member joined', time: '4 hours ago' },
    { type: 'contest', title: 'Contest #6 registered 145 participants', time: '1 day ago' },
    { type: 'announcement', title: 'New announcement posted', time: '2 days ago' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-black mb-6 text-foreground">DASHBOARD OVERVIEW</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="border-2 border-primary p-6">
                <div className="flex items-start justify-between mb-4">
                  <Icon size={24} className="text-primary" />
                  <span className="text-xs font-bold text-green-600">{stat.trend}</span>
                </div>
                <p className="text-xs font-mono text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="border-t-2 border-primary pt-8">
        <h3 className="font-bold mb-4 text-foreground">RECENT ACTIVITY</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, i) => (
            <div key={i} className="border-l-4 border-primary pl-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all group">
              <p className="font-bold text-sm group-hover:text-white">{activity.title}</p>
              <p className="text-xs font-mono text-muted-foreground group-hover:text-white/80">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
