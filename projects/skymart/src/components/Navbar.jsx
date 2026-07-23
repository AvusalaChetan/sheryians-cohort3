import {LogOut, Menu, ShoppingCart} from "lucide-react";
import {useContext, useState} from "react";
import {NavLink} from "react-router";

import {Auth} from "../context/AuthContext";
import Logo from "./common/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, logout} = useContext(Auth);

  const linkClass = ({isActive}) =>
    `w-full h-10 px-4  flex items-center  block ${isActive ? "text-(--secondaryColor)" : "hover:text-white transition-colors"}`;

  return (
    <header className="relative ">
      <div className="relative flex items-center justify-between lg:justify-around w-full py-3 h-15 bg-black/90 px-4 text-white">
        <Logo />

        <div className="hidden lg:block">
          <nav className="flex items-center gap-8 font-medium text-gray-400">
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? "text-white" : "hover:text-white transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({isActive}) =>
                isActive ? "text-white" : "hover:text-white transition-colors"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) =>
                isActive ? "text-white" : "hover:text-white transition-colors"
              }
            >
              About
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center justify-center  h-full w-[45%] sm:w-[30%] lg:w-[20%] gap-2">
          <div className="flex items-center gap-2 cursor-pointer  px-3 py-1 rounded-2xl lg:border border-white/40 lg:bg-white/15">
            <span className="inline-flex text-black h-8 w-8 items-center justify-center rounded-xl bg-(--secondaryColor) font-bold">
              {user?.name.charAt(0).toUpperCase()}
            </span>
            <span className="hidden lg:inline text-sm font-medium capitalize text-gray-300">
              {user?.name}
            </span>
          </div>

          <div className="border border-white/10 grid items-center justify-center text-white h-8 w-8  rounded-md bg-(--navIconsBlack) cursor-pointer   transition-colors">
            <button>
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          <div className="border border-white/10 grid items-center justify-center text-white h-8 w-8  rounded-md bg-(--navIconsBlack) cursor-pointer hover:bg-red-500/20 transition-colors">
            <button onClick={logout}>
              <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          <button
            className="lg:hidden border border-white/10 grid items-center justify-center text-white h-8 w-8  rounded-md bg-(--navIconsBlack) cursor-pointer   transition-colors"
            onClick={() => setIsMenuOpen((p) => !p)}
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>


      {/* {isMenuOpen && ( */}
        <>
          <div
            className={`bg-black  lg:hidden z-10 overflow-hidden transition-all duration-300 ease-in-out w-full border-t border-gray-600 ${isMenuOpen ? "h-28" : "h-0"}`}
          >
            <nav className="text-gray-400 w-full   ">
              <NavLink
                to="/home"
                onClick={() => setIsMenuOpen(false)}
                className={linkClass}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                onClick={() => setIsMenuOpen(false)}
                className={linkClass}
              >
                Shop
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={linkClass}
              >
                About
              </NavLink>
            </nav>
          </div>
        </>
      {/* )} */}


    </header>
  );
};

export default Navbar;
