import {useContext} from "react";
import {MyShop} from "../../context/MyWebsite";

const ProductCard = ({product}) => {
  let {setCartItems} = useContext(MyShop);

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category */}
        <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            ⭐<span className="font-medium">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count} reviews)
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => setCartItems((prev) => [...prev, product])}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
