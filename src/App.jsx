import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className=' flex justify-center items-center px-10'>
        <div className='w-full'>
          <Navbar />
        </div>
      </div>

      <div>

        <Outlet />


      </div>
    </div>
  )
}

export default App