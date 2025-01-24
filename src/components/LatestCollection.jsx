import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {
 const {products}= useContext(ShopContext);
 
    return (
    <div>
      <Title text1={Latestd}/>
    </div>
  )
}

export default LatestCollection