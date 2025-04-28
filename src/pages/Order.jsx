import React, { useState ,useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Order = () => {
  const {products,currency}= useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl' >
      <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
    <div>
      {
        products.slice(1,4).map((item,index)=>(
          <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-center md:justify-between gap-4'>

            <div className='flex items-start gap-6 text-sm'>
              </div>

            </div>

        ))
      }
    </div>
    </div>
  )
}

export default Order;