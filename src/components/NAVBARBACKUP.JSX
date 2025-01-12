import React from 'react'
import { assets } from '../assets/assests'
import {NavLink} from 'react-router'
const Navbar = () => {
  return (
    <div className='flex items-center justfy-between py-5 font-medium'>
        <img src={assets.logo} className='w-20'/>
        
        <ul className='hidden sm:flex gap-5 text-sm text-green-700 '>
          <NavLink to='/' className='flex flex-col items-center gap-1'> 
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-red-700'/>
          </NavLink>

          <NavLink to='/collection' className='flex flex-col items-center gap-1'> 
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-red-700'/>
          </NavLink>

          <NavLink to='/about' className='flex flex-col items-center gap-1'> 
            <p>ABOUT </p>
            <hr className='w-2/4 border-none h-[1.5px] bg-red-700'/>
          </NavLink>

          <NavLink to='/contact' className='flex flex-col items-center gap-1'> 
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-red-700'/>
          </NavLink>
        </ul>
    </div>
  )
}

export default Navbar