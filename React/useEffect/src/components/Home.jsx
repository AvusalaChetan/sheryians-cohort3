import React, {useContext} from "react";
import {MyStore} from "../context/MyContext";

const Home = () => {
  const {count, setCount} = useContext(MyStore);
  return (
    <>
    <h1>{count}</h1>
      <button onClick={() => setCount(count+1)} className="border px-4 py-2  hover:cursor-pointer">+1</button>
    </>
  );
};

export default Home;
