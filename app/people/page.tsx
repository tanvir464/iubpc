import { Github, Linkedin, Mail, Users, Crown, Star } from 'lucide-react'

const team = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'President',
    bio: 'Competitive programmer and algorithm expert.',
    expertise: ['Algorithms', 'Problem Solving', 'C++'],
    image: '/placeholder.svg?key=team1',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'Vice President',
    bio: 'Full-stack developer and system design enthusiast.',
    expertise: ['Web Dev', 'System Design', 'JavaScript'],
    image: '/placeholder.svg?key=team2',
  },
  {
    id: 3,
    name: 'Muhammad Ali',
    role: 'Contest Manager',
    bio: 'Organizes contests and manages competitions.',
    expertise: ['Contest Curation', 'Problem Setting', 'Python'],
    image: '/placeholder.svg?key=team3',
  },
  {
    id: 4,
    name: 'Fatima Zahra',
    role: 'Content Lead',
    bio: 'Creates tutorials and educational content.',
    expertise: ['Technical Writing', 'DSA', 'Java'],
    image: '/placeholder.svg?key=team4',
  },
  {
    id: 5,
    name: 'Zainab Khan',
    role: 'Event Coordinator',
    bio: 'Plans workshops and community events.',
    expertise: ['Event Management', 'Community Building', 'Go'],
    image: '/placeholder.svg?key=team5',
  },
  {
    id: 6,
    name: 'Hassan Ahmed',
    role: 'Tech Lead',
    bio: 'Maintains club infrastructure and tools.',
    expertise: ['DevOps', 'Web Infrastructure', 'Docker'],
    image: '/placeholder.svg?key=team6',
  },
]

export default function PeoplePage() {
  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-glow -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm">
              <Crown size={16} className="animate-pulse" />
              Meet the Team
            </div>

            <h1 className="text-foreground">
              <span className="text-gradient">The People Behind IUBPC</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the passionate individuals leading IUB Programming Club and driving our community forward.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{team.length} Leaders</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Star size={16} />
                <span>500+ Members</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="mb-4 text-center">Leadership Team</h2>
            <p className="text-muted-foreground text-center">Dedicated leaders who make everything possible.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.id}
                className="glass rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />

                {/* Image */}
                <div className="relative overflow-hidden h-72 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Role Badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white text-sm font-bold">
                    {member.role}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 space-y-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join The Team CTA */}
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
              <h2 className="text-white mb-4">Want to Join Our Team?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                We're always looking for passionate individuals to help lead and grow our community.
              </p>
              <button className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
