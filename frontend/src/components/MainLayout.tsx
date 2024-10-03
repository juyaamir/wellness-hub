import React from 'react'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Router from '../router.tsx'
const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen shadow-2xl border border-gray-300'>
        <Header />
        <div className='flex-grow'>
            <Router />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout