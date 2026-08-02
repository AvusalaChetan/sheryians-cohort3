import {ArrowRight, IndianRupee} from "lucide-react";
import {useContext, useEffect, useState} from "react";
import {Auth} from "../context/AuthContext";
import {useNavigate} from "react-router";

const Hero = () => {
  const {user} = useContext(Auth);
  const [timeOfDay, setTimeOfDay] = useState('')

  const navigate = useNavigate();

  function greet() {
    const now = new Date();
    const hour = now.getHours();
    let temp;

    if (hour >= 12 && hour < 18) {
      temp = "good afternoon";
    } else if (hour >= 18) {
      temp = "good evening";
    } else {
      temp = "good morning";
    }
    setTimeOfDay(temp)
  }

  useEffect(() => {
   greet()
  }, [timeOfDay])
  

  return (
    <div
      className="relative overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 w-full rounded-2xl border border-[#2E2B26] bg-black p-6 sm:p-8 "
      style={{
        backgroundImage:
          "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* left */}
      <div className="relative z-10 flex flex-col gap-5">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-lime-400">
           {timeOfDay} <span></span>
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Welcome back,
            <br />
            <span className="text-lime-400">{user?.name ?? "guest"}!</span>
          </h1>

          <p className="mt-4 max-w-md text-sm sm:text-base text-gray-400">
            Discover today's picks — hand-curated products across electronics,
            fashion, and more.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
          >
            Shop Now
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => navigate("/shop")}
            className="rounded-full border border-gray-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
          >
            View All Products
          </button>
        </div>
      </div>

      {/* right */}
      <div className="relative z-10 flex flex-row sm:flex-col gap-3 w-full sm:w-40">
        <div className="flex-1 rounded-xl border border-lime-900 bg-lime-950/40 p-4 text-center">
          <p className="text-2xl font-extrabold text-lime-400">20+</p>
          <p className="mt-1 text-xs text-gray-400">Products Available</p>
        </div>

        <div className="flex-1 rounded-xl border border-gray-700 bg-black p-4 text-center">
          <p className="text-2xl font-extrabold text-white">Free</p>
          <p className="mt-1 flex items-center justify-center gap-0.5 text-xs text-gray-400">
            Delivery on <IndianRupee size={11} />
            999+
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
