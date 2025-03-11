import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  
const {productId}=useParams();
const {products} =useContext(ShopContext);
const[productData,setProductData]= useState(false);
const[image,setImage]=useState(' ')
const fetchProductData = async () => {
  products.find((item) =>{
    if (item._id === productId) {
      setProductData(item)
      setImage(item.image[0])
      console.log(item);
      return null;
    }
  })
}
useEffect(()=>{
  fetchProductData();
},[productId ,products])
return productData ? (
  <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
    <div className="flex flex-col sm:flex-row gap-12">
      {/* Small images on the left */}
      <div className="flex sm:flex-col gap-3 sm:w-[18.7%] w-full overflow-x-auto sm:overflow-y-scroll">
        {productData.image.map((item, index) => (
          <img
          onClick={()=> setImage(item)}
            src={item}
            key={index}
            className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
            onClick={() => setImage(item)}
          />
        ))}
      </div>

      {/* Big image on the right */}
      <div className=" w-full sm:w-[80%]">
        <img src={image} className="w-full h-auto object-cover" />
      </div>
    </div>
  </div>
) : (
  <div className="opacity-0"></div>
);
};

export default Product