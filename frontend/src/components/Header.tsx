import React from 'react'
import { data } from '../data/navbarData.tsx'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <header className='min-h-16 '>
      <div className='flex justify-between items-center lg:gap-14 gap-6 p-4'>
        <Link to ='/'><img src={logo} alt='logo' className='h-14 ' /></Link>
        
        <p className='lg:text-4xl md:text-2xl sm:text-xl'>Empower Your Health Journey</p>
        <div className='flex flex-grow '>
          <input type='search' placeholder='Search Wellness Hub...' 
          className='px-2 py-1 flex-grow border-2 border-gray-300 rounded-tl-md rounded-bl-md hover:outline-cyan-400 hover:shadow-lg' />
          <button 
          className=' px-2 bg-cyan-400 hover:bg-cyan-600 text-white py-1 border-none rounded-tr-md rounded-br-md'>Search</button>
        </div>
      </div>
      <nav className='flex  flex-wrap justify-center gap-8 items-center bg-slate-100 text-cyan-600 border-y border-slate-400 shadow-2xl'>
          {
            data.map((item) => (
              <Link key={item.path} to={item.path} className='p-2 hover:bg-cyan-600 hover:text-white md:text-xl lg:text-2xl'>
                {item.title}
              </Link>

            ))
          }
      </nav>
      </header>
  )
}

export default Header