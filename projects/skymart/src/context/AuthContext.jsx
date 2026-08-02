import {createContext, useState} from "react";
import {useNavigate} from "react-router";

export const Auth = createContext();

const AuthProvider = ({children}) => {
  const [loading] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("sm_session")),
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("sm_users")) || [],
  );
  const navigation = useNavigate();

  const logout = () => {
    localStorage.removeItem("sm_session");
    setUser(null);
    navigation("/login");
  };

  return (
    <Auth.Provider value={{users, setUsers, user, setUser, logout, loading}}>
      {!loading && children}
    </Auth.Provider>
  );
};

export default AuthProvider;
