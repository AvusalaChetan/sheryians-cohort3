import { Route, Routes } from "react-router";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Register from "../pages/Register";
import Shop from "../pages/Shop";

 const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </>
  );
};

export default AppRouter;
