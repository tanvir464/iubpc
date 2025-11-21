import Link from 'next/link'
import { ArrowRight, Users, Trophy, BookOpen, Target, Rocket, Heart, Zap } from 'lucide-react'

export default function AboutPage() {
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
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Est. 2023
            </div>

            <h1 className="text-foreground">
              <span className="text-gradient">About IUBPC</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A thriving community of passionate programmers dedicated to growth, competition, and excellence at Independent University, Bangladesh.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>500+ Members</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Trophy size={16} />
                <span>6 Contests</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-10 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden">
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                  <Target size={32} />
                </div>
                <h2 className="mb-4">Our Mission</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  To foster a vibrant community of programmers where students can develop their coding skills, participate in competitive programming, and grow as technologists.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in learning through doing, collaboration, and pushing technical boundaries.
                </p>
              </div>
            </div>

            <div className="glass p-10 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 group relative overflow-hidden">
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-primary/0 group-hover:from-secondary/5 group-hover:to-primary/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-500 group-hover:scale-110">
                  <Rocket size={32} />
                </div>
                <h2 className="mb-4">Our Vision</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  To be the leading programming community at IUB, recognized for producing skilled developers and competitive programmers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A place where innovation meets competition, and every member reaches their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">What We Do</h2>
            <p>Comprehensive support for your programming journey through various activities and initiatives.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: 'Competitions', desc: 'Regular contests to test and improve your algorithmic skills' },
              { icon: BookOpen, title: 'Workshops', desc: 'Learning sessions on algorithms, data structures, and more' },
              { icon: Users, title: 'Community', desc: 'Network with fellow programmers and build lasting connections' },
              { icon: Zap, title: 'Projects', desc: 'Collaborate on real-world projects and build your portfolio' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="glass p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-bold mb-3 text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Our Achievements</h2>
            <p>Numbers that showcase our community's growth and impact.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Active Members', icon: Users },
              { number: '6', label: 'Contests Held', icon: Trophy },
              { number: '50+', label: 'Blog Posts', icon: BookOpen },
              { number: '95%', label: 'Satisfaction Rate', icon: Heart },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass p-8 rounded-2xl text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                      <stat.icon size={26} />
                    </div>
                  </div>
                  <p className="text-4xl font-bold mb-2 text-gradient">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20" />

          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Animated Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 space-y-8">
              <h2 className="text-white mb-4">Join Our Community</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Ready to compete, learn, and grow with the best programmers at IUB?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/people" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg">
                  Meet the Team <ArrowRight size={20} />
                </Link>
                <Link href="/contests" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all">
                  Explore Contests <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
