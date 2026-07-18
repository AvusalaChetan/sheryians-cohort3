import {createContext, useState} from "react";

export const MyStore = createContext();

const ContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
  return <MyStore.Provider value={{products,setProducts}}>{children}</MyStore.Provider>;
};

export default ContextProvider;
