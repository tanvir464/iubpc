import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code2, Trophy, Users, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Recruiting New Members
              </div>

              <h1 className="text-foreground">
                <span className="text-gradient">Build. Code.<br />
                Compete.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                IUB Programming Club is the premier community for passionate coders. Join us to solve problems, participate in contests, and accelerate your career.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contests" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25">
                  Join Now <ArrowRight size={20} />
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background border border-border text-foreground rounded-full font-bold hover:bg-muted transition-all">
                  Learn More <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end perspective-1000 group">
              <div className="relative w-full max-w-md preserve-3d transition-transform duration-700 ease-out transform group-hover:rotate-y-12 group-hover:rotate-x-6">

                {/* Quantum Core - Central Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />

                {/* The Main Artifact */}
                <div className="relative aspect-square flex items-center justify-center preserve-3d">

                  {/* Orbiting Rings */}
                  <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow preserve-3d" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full blur-[2px] shadow-[0_0_20px_var(--primary)]" />
                  </div>
                  <div className="absolute inset-8 border border-white/5 rounded-full animate-spin-reverse-slow preserve-3d" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-secondary rounded-full blur-[2px] shadow-[0_0_20px_var(--secondary)]" />
                  </div>
                  <div className="absolute inset-16 border border-dashed border-white/10 rounded-full animate-spin-slow duration-[20s]" />

                  {/* Central Glass Core */}
                  <div className="relative w-48 h-48 bg-black/40 backdrop-blur-2xl border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] preserve-3d translate-z-20 group-hover:translate-z-40 transition-transform duration-700">
                    {/* Internal Reflection */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50" />

                    {/* Logo */}
                    <div className="relative w-24 h-24 preserve-3d translate-z-10">
                      <Image
                        src="/logo.png"
                        alt="IUBPC Core"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* Floating Holographic Cards */}
                  {/* Card 1: Stats */}
                  <div className="absolute -right-4 top-12 bg-black/20 backdrop-blur-2xl border border-white/10 p-4 rounded-xl shadow-2xl preserve-3d translate-z-30 group-hover:translate-z-50 transition-transform duration-700 animate-float-slow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                        <Users size={18} />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white drop-shadow-md">500+</div>
                        <div className="text-[10px] text-gray-200 uppercase tracking-wider drop-shadow-md">Active Members</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Achievement */}
                  <div className="absolute -left-8 bottom-20 bg-black/20 backdrop-blur-2xl border border-white/10 p-4 rounded-xl shadow-2xl preserve-3d translate-z-40 group-hover:translate-z-60 transition-transform duration-700 animate-float-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/20">
                        <Trophy size={18} />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white drop-shadow-md">#1</div>
                        <div className="text-[10px] text-gray-200 uppercase tracking-wider drop-shadow-md">University Rank</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Status */}
                  <div className="absolute right-8 bottom-0 bg-black/20 backdrop-blur-2xl border border-white/10 px-4 py-2 rounded-xl shadow-xl preserve-3d translate-z-50 group-hover:translate-z-70 transition-transform duration-700 animate-float-fast">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-medium text-white drop-shadow-md">System Online</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Why Join Us?</h2>
            <p>We provide the resources and community you need to excel in your programming journey.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: 'Competitions', desc: 'Regular coding contests with prizes and recognition.' },
              { icon: Users, title: 'Community', desc: 'Connect with like-minded developers and mentors.' },
              { icon: BookOpen, title: 'Learning', desc: 'Workshops, bootcamps, and exclusive resources.' },
              { icon: Code2, title: 'Projects', desc: 'Collaborate on real-world projects and build your portfolio.' },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="glass p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold mb-3 text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Latest Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl">Latest News</h2>
              <Link href="/announcements" className="text-primary font-medium hover:underline">View All</Link>
            </div>
            <div className="space-y-4">
              {['Contest #5 Results Announced', 'New Workshop: DSA Mastery Series', 'Members Spotlight: Top Performers'].map((item, i) => (
                <div key={i} className="group p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">Announcement</span>
                    <span className="text-xs text-muted-foreground">2 days ago</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl">Featured Posts</h2>
              <Link href="/blogs" className="text-primary font-medium hover:underline">Read More</Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Dynamic Programming Explained', desc: 'Master the art of breaking down complex problems into simpler subproblems.' },
                { title: 'System Design for Beginners', desc: 'Learn the fundamental concepts of building scalable and reliable systems.' },
                { title: 'Competitive Programming Tips', desc: 'Essential strategies and tricks to improve your contest performance.' }
              ].map((item, i) => (
                <div key={i} className="group p-4 rounded-xl border border-border hover:border-secondary/50 hover:bg-secondary/5 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">Blog</span>
                    <span className="text-xs text-muted-foreground">1 week ago</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-secondary transition-colors mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-black dark:group-hover:text-white transition-colors line-clamp-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join hundreds of students competing, learning, and growing together at IUB Programming Club.
            </p>
            <Link href="/contests" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-all">
              Get Started Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
