import { createContext } from "react";
import { products } from "../assets/assests";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const value = {};
  return (
    <ShopContext.Provider value={value}>
        {props.children}
        </ShopContext.Provider>
  );
};
export default ShopContextProvider;
