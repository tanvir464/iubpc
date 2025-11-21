'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Announcements', href: '/announcements' },
    { label: 'Leaderboard', href: '/leaderboard' },
    { label: 'Contests', href: '/contests' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'People', href: '/people' },
    { label: 'Admin', href: '/admin' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${scrolled
        ? 'bg-background/80 backdrop-blur-md border-border shadow-sm'
        : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="IUBPC Logo"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">IUBPC</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium text-sm rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.2)]'
                      : scrolled
                      ? 'text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(var(--primary),0.2)]'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-[0_0_15px_rgba(var(--primary),0.2)]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-border space-y-2 pb-4 bg-background/95 backdrop-blur-md rounded-b-2xl absolute left-0 right-0 px-6 shadow-xl">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-primary/5 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
