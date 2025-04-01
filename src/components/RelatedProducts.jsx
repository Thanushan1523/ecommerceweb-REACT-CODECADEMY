import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react';

const RelatedProducts = ({category,subCategory}) => {
  const {products} =useContext(ShopContext);
  const [related,setRelated] =useState([]);

  useEffect(() =>{
    if(products.length > 0 )
      {
      let productsCopy =products.slice();
      productsCopy =productsCopy.filter((item)=> category === item.category);
      productsCopy = productsCopy.filter((item)=subCategory === item.subCategory)
      
      setRelated(productsCopy.slice(0,5));
     
    }


  } ,[products ])
  
  
  return (
    <div>
         <h2>Related Products</h2>
      <ul>
        {related.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts