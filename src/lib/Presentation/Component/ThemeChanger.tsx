'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Only show the switch when the component is mounted
  useEffect(() => setMounted(true), [])

  const toggleMode = () => (theme === 'light' ? setTheme('dark') : setTheme('light'))

  if (!mounted) return null
  return (
    <DarkModeSwitch
      sunColor="#fbbf24"
      className="z-50"
      moonColor="#e2e8f0"
      onChange={toggleMode}
      checked={theme === 'light' ? false : true}
      size={40}
    />
  )
}
