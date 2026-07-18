import { Star, ShoppingCart, Check } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
     <div className="group lg:max-w-75 overflow-hidden rounded-2xl border border-[#DFD8C8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image section */}
      <div className="relative bg-white/80 px-2 py-4">
        <span className="inline-block rounded-full border border-[#DFD8C8] bg-[#F6F3EC] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#8A8375]">
          {product.category}
        </span>
 
        <img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto mt-4 h-44 w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>
 
       <div className="relative flex items-center">
        <div className="absolute -left-2 h-4 w-4 rounded-full bg-[#FDFCF9]" />
        <div className="h-px w-full border-t border-dashed border-[#DFD8C8]" />
        <div className="absolute -right-2 h-4 w-4 rounded-full bg-[#FDFCF9]" />
      </div>
 
       <div className="space-y-3 p-6">
         <h2 className="line-clamp-2 font-serif text-xl font-bold leading-snug tracking-tight text-[#eae7e4]">
          {product.title}
        </h2>
 
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className={
                index < Math.round(product.rating)
                  ? "fill-[#C1622D] text-[#C1622D]"
                  : "text-[#DFD8C8]"
              }
            />
          ))}
          <span className="ml-1 text-xs text-[#8A8375]">
            ({product.reviews?.length || 0})
          </span>
        </div>
 
        {/* Divider */}
        <div className="h-px bg-[#DFD8C8]" />
 
        {/* Bottom row */}
        <div className="flex items-end justify-between pt-1">
          <div>
            <p className="font-serif text-2xl font-bold text-[#C1622D]">
              ${product.price}
            </p>
            <p className="mt-1 text-xs text-[#8A8375]">
              {product.availabilityStatus}
            </p>
          </div>
 
          <button className="flex items-center gap-2 rounded-full bg-[#2B6355] px-4 py-2.5 text-sm font-semibold text-[#F6F3EC] transition hover:bg-[#234F44]">
            <ShoppingCart size={15} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;