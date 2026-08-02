import {useContext} from "react";
import {Navigate, Outlet} from "react-router";
import {Auth} from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";
import CartItems from "../pages/CartItems";

const ProtectedRoute = () => {
  const {user} = useContext(Auth);
  return user ? (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative">
        <CartItems />
        <Outlet />
      </main>
      <Fotter />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
