import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl bg-slate-900 px-8 py-16 text-white shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-bold">
          Reach out whenever you want to connect.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            id="login"
            href="#home"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Login
          </a>
          <a
            id="signup"
            href="#home"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
