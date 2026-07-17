import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 rounded-3xl bg-white px-4 py-8 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            A modern navbar should feel light, clear, and intentional.
          </h2>
        </div>
        <p className="text-base leading-7 text-slate-600">
          This layout keeps the brand on the left, primary navigation in the
          center, and login actions on the right.
        </p>
      </div>
    </section>
  );
};

export default About;
