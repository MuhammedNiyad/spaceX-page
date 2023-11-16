import React from 'react'
import { navLinks } from '../contents'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className='w-full flex py-3 px-3 justify-between items-center bg-slate-900 rounded-md'>
      <h2 className='text-white'>Space <span className='text-2xl'>X</span></h2>
      <ul className='flex justify-end items-center flex-1'>
        {navLinks.map((nav) => (
          <li key={nav.id}
            className='cursor-pointer text-white mr-5'>
            <Link to={`${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar