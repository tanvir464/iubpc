'use client'

import { useState } from 'react'
import { Trash2, Plus } from 'lucide-react'

export default function AdminGalleryManager() {
  const [images, setImages] = useState([
    { id: 1, title: 'Contest #5 Opening Ceremony', category: 'contests' },
    { id: 2, title: 'Workshop: DSA Masterclass', category: 'workshops' },
    { id: 3, title: 'Leaderboard Celebration', category: 'events' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-black text-foreground">MANAGE GALLERY</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground border-2 border-primary font-bold hover:bg-transparent hover:text-foreground transition-all">
          <Plus size={18} /> UPLOAD IMAGE
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="border-2 border-primary overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
            <div className="h-40 bg-muted group-hover:bg-primary transition-all flex items-center justify-center">
              <div className="w-12 h-12 bg-muted border-2 border-primary group-hover:border-primary-foreground"></div>
            </div>
            <div className="p-4">
              <p className="font-bold mb-2 group-hover:text-white">{image.title}</p>
              <p className="text-xs font-mono text-muted-foreground mb-4 uppercase group-hover:text-white/80">{image.category}</p>
              <button className="w-full px-3 py-2 border border-primary hover:bg-red-600 hover:border-red-600 hover:text-white transition-all font-bold text-sm flex items-center justify-center gap-2">
                <Trash2 size={14} /> DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
