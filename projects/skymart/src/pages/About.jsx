import React from "react";
import {
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router";

const About = () => {
  const highlights = [
    {
      icon: Truck,
      title: "Fast Shipping",
      text: "We deliver your favorite essentials quickly across the city and beyond.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Checkout",
      text: "Your data and payments stay protected with trusted, verified systems.",
    },
    {
      icon: Sparkles,
      title: "Curated Picks",
      text: "Every product is handpicked for style, quality, and everyday value.",
    },
  ];

  const stats = [
    {value: "10K+", label: "Happy Customers"},
    {value: "24/7", label: "Support"},
    {value: "98%", label: "Delivery Success"},
  ];

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8">
        <section className="overflow-hidden rounded-[28px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 shadow-2xl shadow-black/40 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-3 py-1 text-sm font-medium text-lime-300">
                <Sparkles size={16} />
                About Skymart
              </p>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Your go-to destination for smart shopping.
              </h1>
              <p className="text-lg leading-8 text-zinc-400">
                Skymart brings together everyday essentials, premium picks, and
                fresh arrivals in one sleek experience. We believe shopping
                should feel effortless, inspiring, and trustworthy.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button 
                onClick={()=>navigate('/shop')}
                className="rounded-full bg-lime-400 px-5 py-3 font-semibold text-black transition hover:bg-lime-300">
                  Shop Now
                </button>
              
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-lime-500/15 p-3 text-lime-400">
                  <PackageCheck size={22} />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Why people love us</p>
                  <p className="text-xl font-semibold text-white">
                    Fast, stylish, dependable
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-zinc-400">
                <div className="rounded-2xl border border-zinc-800 bg-black/30 p-3">
                  Curated products for home, lifestyle, and everyday comfort.
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-black/30 p-3">
                  Friendly service and transparent pricing from start to finish.
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-black/30 p-3">
                  A smooth digital experience built for modern shoppers.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[24px] border border-zinc-800 bg-zinc-950/80 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-400">
                <Users size={20} />
              </div>
              <div>
                <p className="text-sm text-zinc-400">Our Story</p>
                <h2 className="text-2xl font-semibold text-white">
                  Built for modern living
                </h2>
              </div>
            </div>
            <p className="leading-7 text-zinc-400">
              Skymart started with a simple idea: create a shopping space where
              quality, convenience, and personality all meet. From everyday
              essentials to standout pieces, we design each experience to feel
              effortless and enjoyable.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] flex flex-col items-center justify-center border border-zinc-800 bg-zinc-900/70 p-5 text-center"
              >
                <p className="text-3xl font-bold text-lime-300">{stat.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[24px] border border-zinc-800 bg-zinc-950/70 p-6 lg:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Why choose us
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Everything you need, right where you need it
              </h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-800 bg-black/30 p-5"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-lime-500/10 p-3 text-lime-400">
                    <Icon size={20} />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-7 text-zinc-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
