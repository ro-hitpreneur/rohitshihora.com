import React, { useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '@/components/Logo'
import links from '@/data/links'

interface HamburgerMenuProps {
  turnOn: () => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ turnOn }) => (
  <button
    type="button"
    className="w-10 h-10 flex items-center justify-center p-1.5 bg-gray-200 border-[3px] border-gray-200 dark:border-zinc-700 dark:bg-zinc-700 rounded-lg text-gray-700 dark:text-white hover:border-gray-400 dark:hover:border-zinc-500 transition-all"
    onClick={turnOn}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
)

interface MobileMenuProps {
  turnOff: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ turnOff }) => (
  <motion.aside className="isolate">
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      className="fixed w-80 top-0 right-0 bottom-0 z-50 h-screen bg-gray-100 dark:bg-zinc-800 py-6 space-y-8"
    >
      <div className="px-3 flex items-center justify-between">
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center p-1.5 bg-gray-200 border-[3px] border-gray-200 dark:border-zinc-700 dark:bg-zinc-700 rounded-full text-gray-700 dark:text-white hover:border-gray-400 dark:hover:border-zinc-500 transition-all"
          onClick={turnOff}
          aria-label="Close menu"
          title="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
        <ThemeToggle />
      </div>
      <nav>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name} className="block">
              <a
                href={link.href}
                title={link.title}
                className="block px-5 py-3 text-base text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-zinc-700 dark:hover:text-zinc-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
      className="absolute left-0 w-full -z-10 top-0 bottom-0 h-screen bg-black/20 dark:bg-zinc-400/10"
      onClick={turnOff}
      role="button"
    />
  </motion.aside>
)

const Nav: React.FC = () => (
  <nav>
    <ul className="flex items-center space-x-6">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            title={link.title}
            className="text-base text-gray-700 dark:text-gray-200"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const turnOn = () => {
    setIsMobileMenuOpen(true)
    document.body.classList.add('overflow-hidden')
  }
  const turnOff = () => {
    setIsMobileMenuOpen(false)
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <header className="w-full h-20">
      <div className="w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Logo />
          <div className="flex justify-center items-center">
            <div className="block sm:hidden">
              <HamburgerMenu turnOn={turnOn} />
              <AnimatePresence>
                {isMobileMenuOpen ? <MobileMenu turnOff={turnOff} /> : null}
              </AnimatePresence>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-5">
              <Nav />
              <div className="border-l pl-5 border-gray-300 dark:border-zinc-600">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
