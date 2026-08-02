import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className=" lg:w-[80%] w-full  mx-auto py-8 px-6">
      <Hero />
      <div className="border h-12 border-white/30">
        build in future
      </div>
      <div className="flex  items-center justify-between">
        <p>shop by category</p>
        <button className="flex gap-2 items-center">view all <ArrowRight size={18}/></button>
      </div>
    </div>
  );
};

export default Home;
