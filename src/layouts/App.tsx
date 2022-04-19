import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

interface AppProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <ScrollToTop />
    <Footer />
  </>
)

export default AppLayout
