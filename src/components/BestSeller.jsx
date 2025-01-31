import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {
    const{products}=useContext(ShopContext);
    const [bestSeller, setBestSeller]=useState([]);

    useEffect(()=> {
        const bestProduct= products.filter(()=>(ProductItem.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[])
    
  return (
    <div>BestSeller</div>
  )
}

export default BestSeller