import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";
import Navbar from "./Navbar";


const ProtectedRoute = () => {
  const { user } = useContext(Auth);
  return user? <><Navbar/> <Outlet/></>: <Navigate to='/login'/>

}

export default ProtectedRoute