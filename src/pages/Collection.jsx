import React ,{useContext, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assests';
import Title from '../components/Title';



const Collection = () => {
  const {products}= useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '> 
      {/* {filter options} */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS 
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90':'' }`} src={assets.dropdown_icon} alt='no dropdown image'/></p>
      {/* {category filter } */}
      <div className={`border border-gray-500 pl-5 py-3 mt-6 sm:block ${showFilter ? '' :'hidden' } `}>
      <p className='mb-3 text-sm font-medium '>Category</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
        <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Men'}/> Men
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Women'}/> Women
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Kids'}/> Kids
        </p>
      </div>
      </div>
      {/* {subcategory filter } */}
      <div className={`border border-gray-500 pl-5 py-3 my-5 sm:block  ${showFilter ? '' :'hidden' } `}>
      <p className='mb-3 text-sm font-medium '>Type</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
        <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Topwear'}/> Topwear
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Bottomwear'}/> Bottomwear
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Winterwear'}/> Winterwear
        </p>
      </div>
      </div>
      </div>
{/* {right side } */}
<div className='flex-1'>
  <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={'ALL'} text2={'COLLECTIONS'}/>

        {/* {product sort   } */}
        <select className='border-2 border-gray-300 text-sm px-2'>
          <option value="relevent">Sort by :Relevent</option>
          <option value="low-high">Sort by : Low-High</option>
          <option value="high-low">Sort by :High-Low</option>


        </select>
  </div>
</div>
    </div>
  )
}

export default Collection