import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition > 500 ? (
    <motion.button
      type="button"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="fixed z-40 bottom-5 right-5 w-11 h-11 flex items-center justify-center shadow-lg rounded-full border-[3px] border-gray-200 dark:border-zinc-700 bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-white hover:border-gray-400 dark:hover:border-zinc-500 transition-all"
      aria-label="Scroll to top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }}
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
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  ) : null
}

export default ScrollToTop
