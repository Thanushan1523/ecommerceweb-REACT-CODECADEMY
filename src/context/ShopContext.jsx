import { createContext, useState } from "react";
import { products } from "../assets/assests";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency ='$';
    const delivery_fee =10;
    const[search,setSearch]=useState('');
    const[showSerch, setShowSearch] =useState(false)


  const value = {
    products , currency,delivery_fee,
    search,setSearch,showSerch,setShowSearch
  };
  return (
    <ShopContext.Provider value={value}>
        {props.children}
        </ShopContext.Provider>
  );
};
export default ShopContextProvider;
