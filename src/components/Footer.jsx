import React from 'react'
import { assets } from '../assets/assests'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid   grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt='no image for logo' className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>irneicguc uchrurne ucruiri uheruicure yonwehmgeryf wyn</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'> COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy </li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+416 7657 976</li>
                    <li>YABGD@SDGSDG.COM</li>
                    
                </ul>
            </div>

            
        </div>
        <div>
                <hr/>
                <p className='py-5 text-sm text-center '>fhf huiwiuew riue jfiuwweuiw uheiwu w</p>
            </div>
    </div>
  )
}

export default Footer