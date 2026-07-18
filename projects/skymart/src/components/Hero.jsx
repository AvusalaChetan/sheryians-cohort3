import {ArrowRight, IndianRupee} from "lucide-react";
import { useNavigate } from "react-router";

const Hero = () => {
const navigate = useNavigate()


  return (
   <div className=" bg-[#0d0d0d] text-white p-6 md:p-10 border border-neutral-800 rounded-2xl flex flex-col lg:flex-row justify-between gap-10">
      
      {/* Left Column: Text & Buttons */}
      <div className="flex flex-col justify-between gap-8 flex-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-amber-500">
          <span>Good Afternoon</span>
          <span></span>
        </div>
        
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Welcome back,
            <span className="text-[#bfff00]">AvusalaChetan's!</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base mt-4 leading-relaxed">
            Discover today's picks — hand-curated products across electronics, fashion, and more.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-2">
          <button
          onClick={()=>navigate('/shop')}
          className="bg-[#bfff00] text-black font-semibold flex items-center justify-center gap-2 px-6 py-3 rounded-xl hover:opacity-90 transition-all text-sm md:text-base">
            Shop Now <ArrowRight className="w-4 h-4" />
          </button>
          <button
          onClick={()=>navigate('/shop')}
          className="capitalize bg-transparent border border-neutral-700 text-neutral-300 px-6 py-3 rounded-xl hover:bg-neutral-950 transition-all text-sm md:text-base">
            View All Products
          </button>
        </div>
      </div>

       <div className=" grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4 w-full lg:w-72 shrink-0">
        
         <div className="bg-[#bfff00]/40 border border-[#bfff00]  p-6 rounded-2xl flex flex-col justify-center items-center min-h-[60px] lg:w-[60%]">
          <p className="text-3xl font-bold text-[#bfff00] ">20+</p>
          <p className="font-bold text-sm  mt-1 uppercase tracking-wider">Products Available</p>
        </div>

         <div className="bg-[#141414]/40 border border-neutral-800/80 p-6 rounded-2xl flex flex-col justify-center min-h-[60px] lg:w-[60%]">
          <p className="text-3xl font-bold text-white capitalize">Free</p>
          <p className="text-xs text-neutral-500 mt-1 flex items-center gap-0.5 uppercase tracking-wider">
            Delivery on <IndianRupee className="w-3 h-3 inline-block" />999+
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;

