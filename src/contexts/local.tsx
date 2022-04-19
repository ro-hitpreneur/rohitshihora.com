import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Theme } from '@/types'

export interface LocalContextType {
  theme: Theme | null
  handleChangeTheme: (currentTheme: Theme | null) => void
}

interface LocalContextProps {
  children: React.ReactNode
}

const LocalContext = createContext<LocalContextType | undefined>(undefined)

const LocalContextProvider: React.FC<LocalContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(() => {
    if (typeof window === 'undefined') return null

    return (localStorage.getItem('theme') ?? Theme.DARK) as Theme
  })

  useEffect(() => {
    const currentTheme = theme as Theme
    document.documentElement.className = ''
    document.documentElement.classList.add(currentTheme, 'changing-theme')
    localStorage.setItem('theme', currentTheme)
    window.setTimeout(() => {
      document.documentElement.classList.remove('changing-theme')
    })
  }, [theme])

  const handleChangeTheme = (currentTheme: Theme | null): void => {
    if (currentTheme === Theme.LIGHT) setTheme(Theme.DARK)
    if (currentTheme === Theme.DARK) setTheme(Theme.LIGHT)
  }

  const context = useMemo(() => ({ theme, handleChangeTheme }), [theme])

  return (
    <LocalContext.Provider value={context}>{children}</LocalContext.Provider>
  )
}

export { LocalContextProvider, LocalContext }
