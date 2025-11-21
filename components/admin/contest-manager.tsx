'use client'

import { useState } from 'react'
import { Trash2, Edit2, Plus } from 'lucide-react'

export default function AdminContestManager() {
  const [contests, setContests] = useState([
    { id: 6, title: 'Contest #6: Algorithm Master', status: 'upcoming', participants: 145 },
    { id: 5, title: 'Contest #5: Data Structure Challenge', status: 'completed', participants: 132 },
    { id: 4, title: 'Contest #4: Speed Coding', status: 'completed', participants: 118 },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-black text-foreground">MANAGE CONTESTS</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground border-2 border-primary font-bold hover:bg-transparent hover:text-foreground transition-all">
          <Plus size={18} /> NEW CONTEST
        </button>
      </div>

      <div className="border-2 border-primary overflow-hidden">
        <div className="grid grid-cols-12 gap-4 bg-primary text-primary-foreground p-4 font-black text-sm">
          <div className="col-span-5">TITLE</div>
          <div className="col-span-2">STATUS</div>
          <div className="col-span-2">PARTICIPANTS</div>
          <div className="col-span-3">ACTIONS</div>
        </div>

        <div className="divide-y divide-primary">
          {contests.map((contest, i) => (
            <div key={contest.id} className={`grid grid-cols-12 gap-4 p-4 items-center text-sm ${i % 2 === 0 ? 'bg-muted' : ''}`}>
              <div className="col-span-5 font-bold">{contest.title}</div>
              <div className="col-span-2">
                <span className={`px-2 py-1 font-mono text-xs font-bold border ${contest.status === 'upcoming' ? 'border-blue-600 text-blue-600' : 'border-gray-600'}`}>
                  {contest.status.toUpperCase()}
                </span>
              </div>
              <div className="col-span-2 font-mono">{contest.participants}</div>
              <div className="col-span-3 flex gap-2">
                <button className="p-2 border border-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 border border-primary hover:bg-red-600 hover:border-red-600 hover:text-white transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
