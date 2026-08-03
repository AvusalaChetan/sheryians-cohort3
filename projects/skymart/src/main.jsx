import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ContextProvider from "./context/MartContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <AuthProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop
          closeOnClick
          draggable
          pauseOnHover
          theme="dark"
          
          style={{width: "400px", height:'10px'}}
        />
      </AuthProvider>
    </ContextProvider>
  </BrowserRouter>,
);
