import {createContext, useState} from "react";
import {useNavigate} from "react-router";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [loading] = useState(false);
  const user = JSON.parse(localStorage.getItem("sm_session"));

  const navigation = useNavigate();

  const logout = () => {
    localStorage.removeItem("sm_session");
    navigation("/login");
  };

  return (
    <AuthContext.Provider value={{user, logout, loading}}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
