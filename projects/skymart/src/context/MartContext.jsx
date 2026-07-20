import {createContext, useState} from "react";

export const MyStore = createContext();

const ContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("sm_users")) || [],
  );
 
  return (
    <MyStore.Provider value={{products, setProducts, users, setUsers}}>
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
