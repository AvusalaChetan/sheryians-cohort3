import {LogOut, Menu, ShoppingCart} from "lucide-react";
import {useContext, useState} from "react";
import {NavLink} from "react-router";

import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, logout} = useContext(AuthContext);

  const linkClass = ({isActive}) =>
    `w-full h-10 px-4 border border-gray-600 flex items-center  block ${isActive ? "text-white" : "hover:text-white transition-colors"}`;

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
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="inline-flex text-black h-8 w-8 items-center justify-center rounded-xl bg-(--secondaryColor) font-bold">
              {user?.name.charAt(0).toUpperCase()}
            </span>
            <span className="hidden lg:inline text-sm font-medium capitalize text-gray-300">
              {user?.name}
            </span>
          </div>

          <div
            className="
           border-white/10 grid text-white h-8 w-8 items-center justify-center rounded-xl bg-(--navIconsBlack) cursor-pointer hover:bg-white/10 transition-colors"
          >
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>

          <div className="border border-white/10 grid text-white h-8 w-8 items-center justify-center rounded-xl bg-(--navIconsBlack) cursor-pointer hover:bg-red-500/20 transition-colors">
            <button onClick={logout}>
              <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          <button
            className="grid lg:hidden h-8 w-8 place-items-center rounded-xl border border-white/10 bg-(--navIconsBlack) text-white cursor-pointer hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen((p) => !p)}
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <>
          <div className="absolutebg-black z-10  w-full">
            <nav className="text-gray-400 w-full   ">
              <NavLink
                to="/"
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
      )}
    </header>
  );
};

export default Navbar;
