import React from 'react'

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <span className="w-10 h-10 bg-gradient-to-r from-primary to-secondary shadow-md rounded-full flex items-center justify-center text-2xl text-white">
      <strong>R</strong>
    </span>
    <h2 className="text-gray-800 dark:text-white font-bold text-2xl">
      Rohit
      <span className="font-normal text-gray-500 dark:text-gray-200">
        {' '}
        Shihora
      </span>
    </h2>
  </div>
)

export default Logo
