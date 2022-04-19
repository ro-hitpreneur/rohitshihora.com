import React from 'react'
import Logo from '@/components/Logo'

const Footer: React.FC = () => (
  <footer className="py-8 border-t-2 border-gray-200 dark:border-zinc-400 bg-gray-50 dark:bg-zinc-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
        <Logo />
        <div className="">
          <h4 className="text-base text-gray-700 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </h4>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
