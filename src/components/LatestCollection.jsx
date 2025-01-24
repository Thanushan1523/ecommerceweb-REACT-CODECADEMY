import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {
 const {products}= useContext(ShopContext);
 
    return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
      <Title text1={'LATEST'} text2={'COLLECTION'}/>
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>I doing turing for last 4 years . Math & Chemistry </p>
    </div>
      
    </div>
  )
}

export default LatestCollection