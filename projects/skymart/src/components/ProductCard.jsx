import {IndianRupee, ShoppingCart, Star} from "lucide-react";
import {useContext} from "react";
import {useNavigate} from "react-router";
import {MyStore} from "../context/MartContext";

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  const {handleAddToCart, cartItems} = useContext(MyStore);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleCardClick = () => {
    navigate(`/shop/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
      className="group w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-[#121212] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-(--secondaryColor)/50 hover:shadow-xl"
    >
      <div className="relative bg-zinc-900/60 p-4 ">
        <span className="inline-block rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
          {product.category}
        </span>

        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="mx-auto mt-4 h-40 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-44"
        />
      </div>

      <div className="relative flex items-center">
        <div className="absolute -left-2 h-4 w-4 rounded-full bg-[#121212]" />
        <div className="h-px w-full border-t border-dashed border-zinc-800" />
        <div className="absolute -right-2 h-4 w-4 rounded-full bg-[#121212]" />
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <h2 className="line-clamp-2 font-serif text-lg font-bold leading-snug tracking-tight text-[#E2E2E2] sm:text-xl">
          {product.title}
        </h2>

        <div className="flex items-center gap-1">
          {Array.from({length: 5}).map((_, index) => (
            <Star
              key={index}
              size={14}
              className={
                index < Math.round(product.rating)
                  ? "fill-[#B8FD34] text-[#B8FD34]"
                  : "text-zinc-700"
              }
            />
          ))}
          <span className="ml-1 text-xs text-zinc-500">
            ({product.reviews?.length || 0})
          </span>
        </div>

        <div className="h-px bg-zinc-800/80" />

        <div className="flex items-center justify-between pt-1">
          <div className=" w-1/2 flex flex-col items-start justify-around p-1">
            <p className="font-serif text-xl font-bold text-[#F0EFEA] flex items-center sm:text-2xl">
              <IndianRupee className="w-5 h-5 text-[#eefff9]" /> {product.price}
            </p>
            <p
              className={`mt-1 text-xs font-medium border w-fit px-2 py-1 rounded-2xl
                ${product.availabilityStatus === "In Stock" && "text-green-600 border-green-500 bg-green-500/15"}
${product.availabilityStatus === "Low Stock" && "text-yellow-500 border-yellow-500 bg-yellow-400/20"}
${product.availabilityStatus === "Out of Stock" && "text-red-500 border-red-500 bg-red-500/15"}
                `}
            >
              {product.availabilityStatus}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
            className={`flex items-center gap-2 rounded-full bg-(--secondaryColor) px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-[#B8FD34] active:scale-95 
              ${isInCart && "bg-green-500"}`}
          >
            <ShoppingCart size={15} />
            {isInCart ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
