import axios from "axios";
import {createContext, useEffect, useRef, useState} from "react";

export const MyStore = createContext();
export const dummyProducts = "https://dummyjson.com/products";

const ContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("allCategories");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("sm_cartItems")) || [],
  );
  const [showCardItems, setShowCardItems] = useState(false);

  const productsData = useRef([]);
  let allCategory = useRef();

  function getAllCategory() {
    let set = new Set();
    for (let i = 0; i < products.length; i++) {
      set.add(products[i].category);
    }
    allCategory.current = [...set];
    return allCategory.current;
  }
  let categories = getAllCategory();

  const getProducts = async () => {
    let res = await axios.get(dummyProducts);
    setProducts(res.data.products);
    productsData.current = [...res.data.products];
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      let updatedItems;

      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item.id === product.id ? {...item, qty: (item.qty || 1) + 1} : item,
        );
      } else {
        updatedItems = [...prevItems, {...product, qty: 1}];
      }

      localStorage.setItem("sm_cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });

    setShowCardItems(true);
  };

  const handleDeleteFromCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (!existingItem) return prevItems;

      const updatedItems =
        existingItem.qty > 1
          ? prevItems.map((item) =>
              item.id === product.id ? {...item, qty: item.qty - 1 || 0} : item,
            )
          : prevItems.filter((item) => item.id !== product.id);

      localStorage.setItem("sm_cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleDel = (product) => {
    let filteredCardItems = cartItems.filter((c) => c.id !== product.id);
    setCartItems([...filteredCardItems]);
    localStorage.setItem("sm_cartItems", JSON.stringify([...filteredCardItems]));
  };

  return (
    <MyStore.Provider
      value={{
        products,
        setProducts,
        categories,
        category,
        setCategory,
        loading,
        productsData,
        cartItems,
        setCartItems,
        showCardItems,
        setShowCardItems,
        handleAddToCart,
        handleDeleteFromCart,
        handleDel,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
