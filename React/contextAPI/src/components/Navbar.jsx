import React, {useContext, useState} from "react";
import {MyShop} from "../../context/MyWebsite";

const Navbar = () => {
  let {setIsCardOpen} = useContext(MyShop);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {label: "Home", action: () => setIsCardOpen(false)},
    {label: "Cart", action: () => setIsCardOpen(true)},
  ];
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-900/20">
            C
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Context API
            </p>
            <p className="text-lg font-semibold leading-tight">
              Dashboard Navbar
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="hover:cursor-pointer text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
            Sign in
          </button>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800">
            Get started
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex gap-3">
            <button className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
              Sign in
            </button>
            <button className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800">
              Get started
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
