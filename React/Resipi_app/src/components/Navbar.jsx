import React from "react";

const Navbar = () => {
  return (
 <nav className="bg-white flex items-center justify-between px-8 py-4 border-b border-gray-100 shadow-sm">
  {/* Left: Logo */}
  <div className="flex items-center gap-2">
    {/* Chef/Recipe Icon */}
    <span className="text-2xl"></span> 
    <h1 className="text-xl font-bold text-orange-500 tracking-tight">
      Recipe<span className="text-gray-800">Hub</span>
    </h1>
  </div>

  {/* Center: Search Bar */}
  <div className="relative w-1/3 max-w-md">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      {/* Search Icon */}
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input 
      type="text" 
      placeholder="Search recipes..." 
      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
    />
  </div>

  {/* Right: Cart & Profile */}
  <div className="flex items-center gap-4">
    {/* Cart Button (with notification badge) */}
    <button className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {/* Badge count */}
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-orange-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
        3
      </span>
    </button>

    {/* Profile Avatar */}
    <button className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-500 hover:opacity-90 transition-opacity">
      <img 
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
        alt="User Profile" 
        className="w-full h-full object-cover"
      />
    </button>
  </div>
</nav>
  );
};

export default Navbar;
