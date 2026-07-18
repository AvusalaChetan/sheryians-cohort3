import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default AppRouter;
