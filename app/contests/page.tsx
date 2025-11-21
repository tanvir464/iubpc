import Link from 'next/link'
import { ArrowRight, Clock, Users, Trophy, Calendar, Zap, Target } from 'lucide-react'

const contests = [
  {
    id: 6,
    title: 'Contest #6: Algorithm Master',
    status: 'upcoming',
    date: '2025-12-01',
    time: '14:00 - 18:00',
    participants: 145,
    description: 'Test your algorithmic skills in this comprehensive contest.',
    difficulty: 'Medium',
  },
  {
    id: 5,
    title: 'Contest #5: Data Structure Challenge',
    status: 'completed',
    date: '2025-10-20',
    time: '14:00 - 18:00',
    participants: 132,
    description: 'Master the fundamentals of data structures.',
    difficulty: 'Medium',
    winner: 'Ahmed Hassan',
  },
  {
    id: 4,
    title: 'Contest #4: Speed Coding',
    status: 'completed',
    date: '2025-09-15',
    time: '15:00 - 17:00',
    participants: 118,
    description: 'Fast-paced contest testing your coding speed.',
    difficulty: 'Easy',
    winner: 'Sarah Khan',
  },
  {
    id: 3,
    title: 'Contest #3: Graph Theory Showdown',
    status: 'completed',
    date: '2025-08-20',
    time: '14:00 - 18:00',
    participants: 125,
    description: 'Explore advanced graph algorithms.',
    difficulty: 'Hard',
    winner: 'Muhammad Ali',
  },
  {
    id: 2,
    title: 'Contest #2: Dynamic Programming',
    status: 'completed',
    date: '2025-07-15',
    time: '14:00 - 18:00',
    participants: 110,
    description: 'Solve complex DP problems and optimize solutions.',
    difficulty: 'Hard',
    winner: 'Fatima Zahra',
  },
  {
    id: 1,
    title: 'Contest #1: Kick Off',
    status: 'completed',
    date: '2025-06-10',
    time: '15:00 - 17:00',
    participants: 95,
    description: 'Our first programming contest!',
    difficulty: 'Easy',
    winner: 'Zainab Khan',
  },
]

export default function ContestsPage() {
  const upcomingContests = contests.filter((c) => c.status === 'upcoming')
  const completedContests = contests.filter((c) => c.status === 'completed')

  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
              <Zap size={16} className="animate-pulse" />
              Compete & Excel
            </div>

            <h1 className="text-foreground">
              <span className="text-gradient">Programming Contests</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Test your skills, compete with peers, and climb the leaderboard in our exciting programming challenges.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Trophy size={16} />
                <span>{contests.length} Contests</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>500+ Participants</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Upcoming Contests */}
      {upcomingContests.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Target size={24} className="text-secondary" />
              </div>
              <h2 className="font-bold text-3xl">Upcoming Contests</h2>
            </div>

            <div className="grid gap-8">
              {upcomingContests.map((contest, index) => {
                return (
                  <Link key={contest.id} href={`/contests/${contest.id}`}>
                    <div
                      className="glass p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 group relative overflow-hidden cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-primary/0 group-hover:from-secondary/5 group-hover:to-primary/5 transition-all duration-500 rounded-2xl" />

                      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm border border-secondary/20">
                              Upcoming
                            </span>
                            <span className="text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4 py-2 rounded-full border border-primary/20">
                              {contest.difficulty}
                            </span>
                          </div>

                          <h3 className="font-bold text-2xl group-hover:text-secondary transition-colors">
                            {contest.title}
                          </h3>

                          <p className="text-muted-foreground leading-relaxed">
                            {contest.description}
                          </p>

                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              {new Date(contest.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                              })}
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

                        <div className="flex items-center gap-2 text-secondary font-bold">
                          Register Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Completed Contests */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="mb-4">Past Contests</h2>
            <p className="text-muted-foreground">Browse through our completed contests and their results.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedContests.map((contest, index) => {
              return (
                <Link key={contest.id} href={`/contests/${contest.id}`}>
                  <div
                    className="glass p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer relative overflow-hidden h-full flex flex-col"
                    style={{ animationDelay: `${(index + upcomingContests.length) * 100}ms` }}
                  >
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground font-bold text-xs border border-border">
                          Completed
                        </span>
                        <span className="text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4 py-2 rounded-full border border-primary/20">
                          {contest.difficulty}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                        {contest.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                        {contest.description}
                      </p>

                      {contest.winner && (
                        <div className="flex items-center gap-2 mb-4 px-4 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20">
                          <Trophy size={16} className="text-yellow-500" />
                          <span className="text-sm font-bold text-foreground">{contest.winner}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          {new Date(contest.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} />
                          {contest.participants}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        View Results <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
