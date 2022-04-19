import React, { useEffect, useRef, useState } from 'react'
import AppLayout from '@/layouts/App'
import dos, { Do } from '@/data/dos'

const Banner: React.FC = () => (
  <section className="max-w-7xl mx-auto px-4 py-28">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-6/12 max-w-xl mx-auto mb-6 md:mb-0">
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full overflow-hidden p-3 bg-gradient-to-r from-secondary to-primary shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="./Speakerohit 2.jpg"
                alt="Rohit shihora"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 max-w-xl mx-auto md:mx-0 px-4 space-y-6 md:space-y-5 md:text-left text-center">
        <p className="text-sm text-[#aaa]">Digital Marketer</p>
        <h3 className="text-5xl font-bold text-gray-900 dark:text-white">
          Rohit Shihora
        </h3>
        <div className="text-left">
          <p className="text-base text-gray-500 dark:text-gray-300 leading-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta eos
            tempora, eum dolores vel dolor laborum quae quo alias hic atque modi
            harum! Reiciendis minus deleniti fuga velit quibusdam molestiae.
          </p>
        </div>
        <div className="flex items-center space-x-2 w-full justify-center md:justify-start">
          <a
            href="/"
            target="_blank"
            className="inline-block px-6 py-2 text-base rounded-full border-2 border-secondary bg-secondary dark:border-secondary dark:bg-lightdark text-white shadow-lg hover:bg-white hover:text-gray-800 dark:hover:bg-secondary dark:hover:text-white transition-colors"
          >
            Download CV
          </a>
          <a
            href="/"
            target="_self"
            className="inline-block px-6 py-2 text-base border-2 border-gray-400 bg-white dark:bg-lightdark rounded-full text-gray-600 dark:text-white shadow-lg hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-white dark:hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </section>
)

interface DoProps {
  details: Do
}

const DoItem: React.FC<DoProps> = ({ details }) => (
  <div className="w-full">
    <div className="flex justify-between space-x-3 md:max-w-lg items-start">
      <div className="text-secondary">
        <details.icon />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white">
          {details.header}
        </h4>
        <p className="text-base text-gray-500 dark:text-gray-300">
          {details.text}
        </p>
      </div>
    </div>
  </div>
)

const SectionHeader: React.FC<{ header: string }> = ({ header }) => (
  <div className="inline-block relative mb-8">
    <h3 className="text-3xl text-gray-800 dark:text-white font-bold">
      {header}
    </h3>
    <span className="absolute -bottom-0.5 w-full h-0.5 bg-gray-200 dark:bg-zinc-600 rounded-md overflow-hidden">
      <span className="absolute inset-0 w-2/6 bg-secondary h-full" />
    </span>
  </div>
)

const WhatIDo: React.FC = () => (
  <section className="container mx-auto px-4 py-12">
    <SectionHeader header="What I Do" />
    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-8">
      {dos.map((myDo, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <DoItem details={myDo} key={index} />
      ))}
    </ul>
  </section>
)

const Skills: React.FC = () => {
  const [amount, setAmount] = useState(0)
  const containerRef = useRef(null)

  const handleScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      setAmount((prevAmount) => prevAmount - 200)
    } else {
      setAmount((prevAmount) => prevAmount + 200)
    }
  }

  const callbackFunc = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries

    if (entry.isIntersecting) {
      window.addEventListener('wheel', handleScroll)
    } else {
      setAmount(0)
      window.removeEventListener('wheel', handleScroll)
    }
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  // eslint-disable-next-line no-console

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeader header="Skills" />
      </div>
      <div className="container mx-auto px-4 bg-gray-50 dark:bg-zinc-800 py-12">
        <div ref={containerRef} className="relative flex flex-wrap uppercase">
          <p
            className="text-3xl absolute left-0 text-gray-500 dark:text-zinc-500 px-7 transition-transform"
            style={{ transform: `translate3d(${amount}px, 0, 0)` }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          </p>
        </div>
      </div>
    </section>
  )
}

const HomePage: React.FC = () => (
  <AppLayout>
    <Banner />
    <WhatIDo />
    <Skills />
  </AppLayout>
)

export default HomePage
