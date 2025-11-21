'use client'

import { useState } from 'react'
import { X, Image as ImageIcon, Camera, Sparkles } from 'lucide-react'

const galleryImages = [
  { id: 1, title: 'Contest #5 Opening Ceremony', category: 'contests', image: '/programming-contest-opening-ceremony.jpg' },
  { id: 2, title: 'Workshop: DSA Masterclass', category: 'workshops', image: '/programming-workshop-classroom.jpg' },
  { id: 3, title: 'Leaderboard Celebration', category: 'events', image: '/competitive-programmers-celebrating.jpg' },
  { id: 4, title: 'Team Photo 2025', category: 'team', image: '/programming-club-team-photo.jpg' },
  { id: 5, title: 'Contest #4 Finals', category: 'contests', image: '/programming-competition-finals.jpg' },
  { id: 6, title: 'Member Workshops', category: 'workshops', image: '/coding-workshop-teaching.jpg' },
  { id: 7, title: 'Networking Event', category: 'events', image: '/tech-networking-event.jpg' },
  { id: 8, title: 'Hackathon 2025', category: 'events', image: '/hackathon-programming-event.jpg' },
]

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const categories = ['all', 'contests', 'workshops', 'events', 'team']
  const filteredImages = selectedFilter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === selectedFilter)

  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium text-sm">
              <Camera size={16} className="animate-pulse" />
              Moments & Memories
            </div>

            <h1 className="text-foreground">
              <span className="text-gradient">Gallery</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Relive the best moments from our contests, workshops, and community events.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ImageIcon size={16} />
                <span>{galleryImages.length} Photos</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Sparkles size={16} />
                <span>4 Categories</span>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center pt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-500 ${
                    selectedFilter === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                      : 'glass hover:-translate-y-1 hover:shadow-lg'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden glass rounded-2xl h-72 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <img
                  src={image.image || '/placeholder.svg'}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-bold text-white text-lg drop-shadow-md mb-2">{image.title}</p>
                    <p className="text-xs text-white/80 uppercase tracking-wider font-bold">{image.category}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-primary/30 text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.category}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 p-3 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/20 hover:bg-white hover:text-black transition-all z-10 shadow-2xl hover:scale-110 duration-300"
            >
              <X size={28} strokeWidth={2.5} />
            </button>

            {/* Image Container */}
            <div className="glass rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center bg-black/50 backdrop-blur-xl p-8">
                <img
                  src={selectedImage.image || '/placeholder.svg'}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Image Info */}
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
                <h3 className="font-bold text-2xl mb-2 text-white">{selectedImage.title}</h3>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
