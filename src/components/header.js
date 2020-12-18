import React from 'react'

export default function Header({ logo }) {
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">{logo}</div>
      </div>
    </nav>
  )
}
