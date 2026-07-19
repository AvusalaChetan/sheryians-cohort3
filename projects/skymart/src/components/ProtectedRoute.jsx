import Navbar from "./Navbar";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  let user = JSON.parse(localStorage.getItem('sm_session'))

  return user? <><Navbar/> <Outlet/></>: <Navigate to='/login'/>

}

export default ProtectedRoute