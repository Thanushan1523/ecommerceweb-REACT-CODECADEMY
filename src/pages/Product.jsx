import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
const {productId}=useParams();
const {products} =useContext(ShopContext);
const[productData,setProductData]= useState(false);
 
const fetchProductData = async () => {
  products.map((item) =>{
    if (item._id === productId){
      setProductData(item)
      console.log(item);
      return null;
    }
  })
}
  return (
    <div>

    </div>
  )
}

export default Product