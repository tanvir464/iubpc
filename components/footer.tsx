import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="IUBPC Logo"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <span className="font-bold text-lg">IUBPC</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students to Build, Code, and Compete. Join the community of passionate developers.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm tracking-wider text-foreground">PLATFORM</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/blogs" className="hover:text-primary transition-colors">Blogs</Link></li>
              <li><Link href="/contests" className="hover:text-primary transition-colors">Contests</Link></li>
              <li><Link href="/leaderboard" className="hover:text-primary transition-colors">Leaderboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm tracking-wider text-foreground">ABOUT</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/people" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm tracking-wider text-foreground">CONNECT</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-sm text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IUB Programming Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
