import Link from 'next/link'
import { ArrowLeft, Trophy, Users, Clock, Calendar, Target } from 'lucide-react'

export default async function ContestDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const contest = {
    id: parseInt(id),
    title: 'Contest #6: Algorithm Master',
    status: 'upcoming',
    date: '2025-12-01',
    time: '14:00 - 18:00',
    duration: '4 hours',
    participants: 145,
    difficulty: 'Medium',
    description: 'Test your algorithmic skills in this comprehensive contest covering various problem types.',
    rules: [
      'Each problem has a specific time limit and memory limit.',
      'Solutions will be judged on both correctness and efficiency.',
      'Late submissions will incur penalty.',
      'Multiple languages supported: C++, Python, Java, JavaScript.',
    ],
    topics: ['Arrays', 'Strings', 'Graphs', 'Dynamic Programming', 'Sorting'],
  }

  const difficultyConfig: Record<string, { color: string; bg: string }> = {
    Easy: { color: 'text-green-500', bg: 'bg-green-500/10 border-green-500/30' },
    Medium: { color: 'text-yellow-500', bg: 'bg-yellow-500/10 border-yellow-500/30' },
    Hard: { color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/30' },
  }

  const diffStyle = difficultyConfig[contest.difficulty]

  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="relative overflow-hidden py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/contests"
            className="inline-flex items-center gap-2 mb-8 font-bold hover:text-primary transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Contests
          </Link>

          <div className="glass p-8 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {contest.status.charAt(0).toUpperCase() + contest.status.slice(1)}
              </span>
              <span className={`px-3 py-1 rounded-full font-medium text-sm border ${diffStyle.color} ${diffStyle.bg}`}>
                {contest.difficulty}
              </span>
            </div>

            <h1 className="mb-6">{contest.title}</h1>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass p-4 rounded-xl">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={18} />
                  <p className="text-xs font-medium text-muted-foreground">Date & Time</p>
                </div>
                <p className="font-bold text-sm">{new Date(contest.date).toLocaleDateString()}</p>
                <p className="text-sm text-muted-foreground">{contest.time}</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <Clock size={18} />
                  <p className="text-xs font-medium text-muted-foreground">Duration</p>
                </div>
                <p className="font-bold text-sm">{contest.duration}</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Users size={18} />
                  <p className="text-xs font-medium text-muted-foreground">Participants</p>
                </div>
                <p className="font-bold text-sm">{contest.participants}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Details */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="mb-4">About This Contest</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{contest.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass p-8 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Target size={24} className="text-primary" />
              <h3 className="font-bold text-lg">Topics Covered</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {contest.topics.map((topic, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Trophy size={24} className="text-secondary" />
              <h3 className="font-bold text-lg">Quick Stats</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Status</span>
                <span className="font-bold capitalize">{contest.status}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Difficulty</span>
                <span className={`font-bold ${diffStyle.color}`}>{contest.difficulty}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="mb-12">
          <h2 className="mb-6">Rules & Guidelines</h2>
          <div className="space-y-4">
            {contest.rules.map((rule, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex gap-4 hover:-translate-y-1 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {i + 1}
                </div>
                <p className="flex-1 text-muted-foreground">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass p-8 rounded-2xl text-center bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
          <h3 className="font-bold text-2xl mb-4">Ready to Compete?</h3>
          <p className="text-muted-foreground mb-6">
            Register now to join the contest and compete with other programmers.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25">
            <Trophy size={20} />
            Register for Contest
          </button>
        </div>
      </section>
    </main>
  )
}
