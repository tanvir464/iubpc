'use client'

import { useState } from 'react'
import { Trash2, Edit2, Plus, Pin } from 'lucide-react'

export default function AdminAnnouncementManager() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Contest #6 Registration Open', isPinned: true },
    { id: 2, title: 'Workshop: Advanced Data Structures', isPinned: true },
    { id: 3, title: 'New Blog Post Published', isPinned: false },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-black text-foreground">MANAGE ANNOUNCEMENTS</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground border-2 border-primary font-bold hover:bg-transparent hover:text-foreground transition-all">
          <Plus size={18} /> NEW ANNOUNCEMENT
        </button>
      </div>

      <div className="space-y-3">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="border-2 border-primary p-4 flex items-center justify-between hover:bg-primary hover:text-primary-foreground transition-all group">
            <div className="flex items-center gap-3 flex-1">
              {announcement.isPinned && <Pin size={18} className="flex-shrink-0 group-hover:text-white" />}
              <p className="font-bold group-hover:text-white">{announcement.title}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-current hover:bg-primary hover:text-primary-foreground transition-all">
                <Edit2 size={16} />
              </button>
              <button className="p-2 border border-current hover:bg-red-600 hover:text-white transition-all">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
