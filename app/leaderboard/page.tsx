import { Trophy, Medal, Award, TrendingUp, Crown, Star } from 'lucide-react'

const leaderboardData = [
  { rank: 1, name: 'Ahmed Hassan', score: 4850, contests: 6, badge: '🏆' },
  { rank: 2, name: 'Sarah Khan', score: 4720, contests: 6, badge: '🥈' },
  { rank: 3, name: 'Muhammad Ali', score: 4530, contests: 5, badge: '🥉' },
  { rank: 4, name: 'Fatima Zahra', score: 4320, contests: 5, badge: '' },
  { rank: 5, name: 'Zainab Khan', score: 4150, contests: 5, badge: '' },
  { rank: 6, name: 'Hassan Ahmed', score: 3980, contests: 4, badge: '' },
  { rank: 7, name: 'Amina Ali', score: 3850, contests: 4, badge: '' },
  { rank: 8, name: 'Bilal Khan', score: 3720, contests: 4, badge: '' },
  { rank: 9, name: 'Noor Ahmed', score: 3590, contests: 3, badge: '' },
  { rank: 10, name: 'Layla Hassan', score: 3450, contests: 3, badge: '' },
  { rank: 11, name: 'Omar Ali', score: 3320, contests: 3, badge: '' },
  { rank: 12, name: 'Mira Khan', score: 3180, contests: 2, badge: '' },
]

export default function LeaderboardPage() {
  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />

        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px] animate-pulse-glow -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 font-medium text-sm">
              <Crown size={16} className="animate-pulse" />
              Top Performers
            </div>

            <h1 className="text-foreground">
              <span className="text-gradient">Leaderboard</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See where you rank among the best programmers. Compete, climb, and claim your spot at the top.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Trophy size={16} />
                <span>6 Contests</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} />
                <span>500+ Competitors</span>
              </div>
            </div>

            {/* Top 3 Podium */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              {/* 2nd Place */}
              <div className="glass p-6 rounded-2xl text-center hover:-translate-y-2 transition-all duration-500 md:mt-8">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center shadow-2xl shadow-gray-500/50 border-4 border-white/20">
                    <Medal size={36} className="text-white" />
                  </div>
                </div>
                <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">2nd Place</div>
                <h3 className="font-bold text-xl mb-2">{leaderboardData[1].name}</h3>
                <p className="text-3xl font-bold text-gradient mb-1">{leaderboardData[1].score}</p>
                <p className="text-xs text-muted-foreground">{leaderboardData[1].contests} contests</p>
              </div>

              {/* 1st Place */}
              <div className="glass p-8 rounded-2xl text-center hover:-translate-y-2 transition-all duration-500 border-2 border-yellow-500/30 relative overflow-hidden">
                {/* Gold Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center shadow-2xl shadow-yellow-500/50 border-4 border-white/20 animate-pulse-glow">
                      <Trophy size={44} className="text-white" />
                    </div>
                  </div>
                  <div className="text-xs font-bold text-yellow-600 dark:text-yellow-400 mb-2 uppercase tracking-wider flex items-center gap-2 justify-center">
                    <Crown size={14} />
                    Champion
                  </div>
                  <h3 className="font-bold text-2xl mb-2">{leaderboardData[0].name}</h3>
                  <p className="text-4xl font-bold text-gradient mb-1">{leaderboardData[0].score}</p>
                  <p className="text-xs text-muted-foreground">{leaderboardData[0].contests} contests</p>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="glass p-6 rounded-2xl text-center hover:-translate-y-2 transition-all duration-500 md:mt-8">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-2xl shadow-amber-700/50 border-4 border-white/20">
                    <Medal size={36} className="text-white" />
                  </div>
                </div>
                <div className="text-xs font-bold text-amber-700 mb-2 uppercase tracking-wider">3rd Place</div>
                <h3 className="font-bold text-xl mb-2">{leaderboardData[2].name}</h3>
                <p className="text-3xl font-bold text-gradient mb-1">{leaderboardData[2].score}</p>
                <p className="text-xs text-muted-foreground">{leaderboardData[2].contests} contests</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Full Rankings */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="mb-4">Complete Rankings</h2>
            <p className="text-muted-foreground">All participants ranked by total score.</p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 bg-gradient-to-r from-primary to-secondary text-white p-6 font-bold text-sm">
              <div className="col-span-2 md:col-span-1">Rank</div>
              <div className="col-span-6 md:col-span-5">Name</div>
              <div className="col-span-4 md:col-span-3">Score</div>
              <div className="hidden md:block md:col-span-3">Contests</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-border">
              {leaderboardData.map((entry, i) => (
                <div
                  key={entry.rank}
                  className={`grid grid-cols-12 gap-4 p-6 items-center text-sm hover:bg-muted/50 transition-all group ${
                    i < 3 ? 'bg-gradient-to-r from-primary/5 to-secondary/5' : ''
                  }`}
                >
                  <div className="col-span-2 md:col-span-1">
                    {entry.rank === 1 && (
                      <div className="flex items-center gap-2">
                        <Trophy size={24} className="text-yellow-500" />
                      </div>
                    )}
                    {entry.rank === 2 && (
                      <div className="flex items-center gap-2">
                        <Medal size={24} className="text-gray-400" />
                      </div>
                    )}
                    {entry.rank === 3 && (
                      <div className="flex items-center gap-2">
                        <Medal size={24} className="text-amber-700" />
                      </div>
                    )}
                    {entry.rank > 3 && <span className="font-bold text-lg">{entry.rank}</span>}
                  </div>
                  <div className="col-span-6 md:col-span-5 font-bold group-hover:text-primary transition-colors">
                    {entry.name}
                  </div>
                  <div className="col-span-4 md:col-span-3 font-bold text-base">
                    <span className="text-gradient">{entry.score}</span>
                  </div>
                  <div className="hidden md:block md:col-span-3 text-muted-foreground">{entry.contests}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scoring Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">How Scoring Works</h2>
            <p className="text-muted-foreground">Understanding our ranking system.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Problem Solving',
                desc: 'Earn points for each problem solved correctly. Harder problems award more points.',
                icon: Trophy,
              },
              {
                title: 'Speed Bonus',
                desc: 'Solve problems faster to earn time-based bonuses that boost your total score.',
                icon: TrendingUp,
              },
              {
                title: 'Consistency',
                desc: 'Regular participation and maintaining high performance across contests increases your rank.',
                icon: Award,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                      <item.icon size={28} />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-center">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
