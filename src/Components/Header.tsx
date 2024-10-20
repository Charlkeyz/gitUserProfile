import React from 'react'
import LightDarkMode from './LightDarkMode'

export default function Header() {
  return (
    <>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold">GitHub User Search</h1>
          <LightDarkMode/>
        </div>
    </>
    
  )
}
