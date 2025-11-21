'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Upload, Edit, Trash2, Image as ImageIcon, Filter } from 'lucide-react'

const mockImages = [
  { id: 1, title: 'Contest #5 Opening Ceremony', category: 'contests', image: '/programming-contest-opening-ceremony.jpg', uploadDate: '2025-11-15' },
  { id: 2, title: 'Workshop: DSA Masterclass', category: 'workshops', image: '/programming-workshop-classroom.jpg', uploadDate: '2025-11-12' },
  { id: 3, title: 'Leaderboard Celebration', category: 'events', image: '/competitive-programmers-celebrating.jpg', uploadDate: '2025-11-10' },
  { id: 4, title: 'Team Photo 2025', category: 'team', image: '/programming-club-team-photo.jpg', uploadDate: '2025-11-08' },
]

export default function AdminGalleryPage() {
  const [images, setImages] = useState(mockImages)
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [showUploadForm, setShowUploadForm] = useState(false)

  const categories = ['all', 'contests', 'workshops', 'events', 'team']
  const filteredImages = selectedFilter === 'all' ? images : images.filter(img => img.category === selectedFilter)

  return (
    <main className="flex-1 min-h-screen bg-muted/30 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 glass rounded-full hover:-translate-y-1 transition-all">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gradient">Manage Gallery</h1>
              <p className="text-muted-foreground mt-1">Upload and manage event photos</p>
            </div>
          </div>
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
          >
            <Upload size={20} />
            Upload Photos
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <p className="text-sm text-muted-foreground mb-1">Total Photos</p>
              <p className="text-3xl font-bold text-gradient">{images.length}</p>
            </div>
          </div>
          {categories.slice(1).map((cat, i) => (
            <div key={cat} className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <p className="text-sm text-muted-foreground mb-1">{cat.charAt(0).toUpperCase() + cat.slice(1)}</p>
                <p className="text-3xl font-bold text-gradient">{images.filter(img => img.category === cat).length}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Form */}
        {showUploadForm && (
          <div className="glass rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Upload New Photos</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Title</label>
                  <input type="text" placeholder="Photo title..." className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Category</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-all">
                    <option>Contests</option>
                    <option>Workshops</option>
                    <option>Events</option>
                    <option>Team</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Upload Image</label>
                  <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-all cursor-pointer group">
                    <Upload size={48} className="mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 transition-all">
                  Upload
                </button>
                <button onClick={() => setShowUploadForm(false)} className="px-6 py-3 glass rounded-xl font-bold hover:-translate-y-1 transition-all">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                selectedFilter === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'glass hover:-translate-y-1'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden glass rounded-2xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src={image.image || '/placeholder.svg'}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-bold mb-1">{image.title}</p>
                <p className="text-white/80 text-xs mb-3">{image.category}</p>

                <div className="flex gap-2">
                  <button className="flex-1 p-2 bg-white/20 backdrop-blur-xl rounded-lg hover:bg-white hover:text-black transition-all">
                    <Edit size={16} className="mx-auto" />
                  </button>
                  <button className="flex-1 p-2 bg-white/20 backdrop-blur-xl rounded-lg hover:bg-red-500 hover:text-white transition-all">
                    <Trash2 size={16} className="mx-auto" />
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl text-white text-xs font-bold">
                {image.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
