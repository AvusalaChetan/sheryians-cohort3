import { createContext, useState } from "react";

export let MyShop = createContext();

export const MyShopProvider = ({children}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyShop.Provider
      value={{isCardOpen, setIsCardOpen, cartItems, setCartItems}}
    >
      {children}
    </MyShop.Provider>
  );
};
