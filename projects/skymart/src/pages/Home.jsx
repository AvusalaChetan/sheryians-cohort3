import {
  ArrowRight,
  IndianRupee,
  Package,
  ShieldEllipsis,
  ShoppingBag,
  Star,
  TagIcon,
  Zap,
} from "lucide-react";
import {useContext} from "react";
import {useNavigate} from "react-router";
import Hero from "../components/Hero";
import {MyStore} from "../context/MartContext";
import CartItems from "./CartItems";

const Home = () => {
  const {categories, setCategory, products, loading} = useContext(MyStore);

  const tags = [
    {
      icon: <Zap />,
      primaryText: "fast delivery",
      secendryText: "Same-day on select items",
    },
    {
      icon: <ShieldEllipsis />,
      primaryText: "fast delivery",
      secendryText: "Same-day on select items",
    },
    {
      icon: <TagIcon />,
      primaryText: "fast delivery",
      secendryText: "Same-day on select items",
    },
  ];
  const navigate = useNavigate();
  console.log(products);

  const selectCategory = (c) => {
    setCategory(c);
    navigate("/shop");
  };

  return (
    <div className=" lg:w-[80%] w-full  mx-auto py-8 px-6 flex flex-col gap-5">
      <Hero />
      
      <div className="border  h-12 border-white/30">build in future</div>
      <div className="border border-zinc-800 rounded-2xl p-4 bg-zinc-900/60 backdrop-blur-sm">
        <div className="flex  justify-between p-4  w-full">
          <h3 className="capitalize font-semibold text-xl ">
            shop by category
          </h3>
          <button
            onClick={() => navigate("/shop")}
            className="flex gap-2 items-center text-(--secondaryColor)"
          >
            view all <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
          {loading ? (
            <p className="text-amber-600">loading</p>
          ) : (
            categories.map((c) => (
              <div
                key={c}
                onClick={() => {
                  selectCategory(c);
                }}
                className="group flex flex-col items-center 
              justify-center p-4 bg-white border border-gray-100 
              rounded-xl shadow-sm hover:shadow-md 
              hover:border-black/20 transition-all 
              duration-200 cursor-pointer capitalize"
              >
                <div className="p-3 bg-gray-50 rounded-full text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-200 mb-3">
                  <Package size={24} />
                </div>
                <h4 className="font-medium text-lg  text-gray-800  md:text-base tracking-wide">
                  {c}
                </h4>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="border border-zinc-800 rounded-2xl p-4 bg-zinc-900/60 backdrop-blur-sm">
        <div className="flex gap-2 items-center justify-between p-4">
          <h3 className="flex gap-2 items-center capitalize font-semibold text-xl ">
            <Star size={18} />
            <span>Top Rated</span>
          </h3>
          <button
            onClick={() => navigate("/shop")}
            className="flex gap-2 items-center text-(--secondaryColor)"
          >
            see all <ArrowRight size={18} />
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-3 ">
          {products
            .filter((p) => p.rating >= 4.5)
            .map((p) => {
              return (
                <div
                  key={p.id}
                  className="border border-zinc-800 bg-zinc-900/60 rounded-xl p-3 flex items-center justify-between text-white hover:border-zinc-700 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      loading="lazy"
                      className="w-16 h-16 object-cover rounded-lg border border-zinc-800"
                    />
                    <div>
                      <h4 className="font-medium text-sm md:text-base line-clamp-1">
                        {p.title}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        <IndianRupee
                          size={14}
                          style={{color: "var(--secondaryColor)"}}
                        />
                        <span className="font-semibold text-(--secondaryColor)">
                          {p.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="p-2.5 rounded-lg bg-zinc-800/80 hover:bg-(--secondaryColor) hover:text-black transition-colors">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      <div className="border border-zinc-800 rounded-2xl p-4 bg-zinc-900/60 backdrop-blur-sm">
        <div className="flex gap-2 items-center justify-between p-4">
          <h3 className="flex gap-2 items-center capitalize font-semibold text-xl ">
            <Star size={18} />
            <span>New Arrivals</span>
          </h3>
          <button
            onClick={() => navigate("/shop")}
            className="flex gap-2 items-center text-(--secondaryColor)"
          >
            see all <ArrowRight size={18} />
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-3">
          {products
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5)
            .map((p) => (
              <div
                key={p.id}
                className="border border-zinc-800 bg-zinc-900/60 rounded-xl p-3 flex items-center justify-between text-white hover:border-zinc-700 transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    loading="lazy"
                    className="w-16 h-16 object-cover rounded-lg "
                  />
                  <div>
                    <h4 className="font-medium text-sm md:text-base line-clamp-1">
                      {p.title}
                    </h4>
                    <div className="flex items-center gap-1 mt-1">
                      <IndianRupee
                        size={14}
                        style={{color: "var(--secondaryColor)"}}
                      />
                      <span className="font-semibold text-(--secondaryColor)">
                        {p.price}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="p-2.5 rounded-lg bg-zinc-800/80 hover:bg-(--secondaryColor) hover:text-black transition-colors">
                  <ShoppingBag size={18} />
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 p-4 border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm rounded-2xl">
        {tags.map((tag, index) => (
          <div
            key={index}
            className=" flex items-center gap-3 p-4 rounded-xl bg-zinc-900/40  transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-zinc-800/80 text-(--secondaryColor) group-hover:scale-105 transition-transform">
              {tag.icon}
            </div>
            <div>
              <p className="font-medium text-white capitalize text-sm md:text-base">
                {tag.primaryText}
              </p>
              <p className="text-zinc-400 text-xs md:text-sm mt-0.5">
                {tag.secendryText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
