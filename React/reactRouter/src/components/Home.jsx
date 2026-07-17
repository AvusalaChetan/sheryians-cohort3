import React from "react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <section
      id="home"
      className="mx-auto min-h-[60vh] max-w-6xl px-4  sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl bg-slate-50 px-8 py-20 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Home
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Clean navigation, simple sections, and a polished landing flow.
        </h1>
      </div>
        <Outlet/>
    </section>
  );
};

export default Home;
