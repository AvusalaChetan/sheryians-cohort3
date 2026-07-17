import {NavLink} from "react-router";

const navItems = [
  {label: "Home", href: "/"},
  {label: "About", href: "/about"},
  {label: "Contact", href: "/contact"},
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-slate-900">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-slate-900 text-xs font-bold tracking-[0.2em] text-white shadow-lg shadow-slate-900/20">
            R
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              React
            </p>
            <p className="text-lg font-bold text-slate-900">Router Hub</p>
          </div>
        </a>

        <div className="justify-between items-center gap-8 flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
 
      </nav>
    </header>
  );
};

export default Navbar;
