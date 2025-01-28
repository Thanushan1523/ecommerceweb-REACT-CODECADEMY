import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ShopContext } from '../context/ShopContext'
const ProductItem = ({id,img,name,price}) => {
  const{currency} =useContext (ShopContext)
  
    return (
    <link t0={'/product/${id}'}>
    </link>
  )
}

export default ProductItem