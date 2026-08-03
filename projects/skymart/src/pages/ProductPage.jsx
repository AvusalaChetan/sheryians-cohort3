import {
  Heart,
  IndianRupee,
  MoveLeft,
  RotateCcw,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import Pill from "../components/Pill";
import ProductCard from "../components/ProductCard";
import {MyStore} from "../context/MartContext";

const ProductPage = () => {
  const [heart, setHeart] = useState(false);
  const {id} = useParams();

  const {selectedProduct, productLoading, getProduct, productsData,handleAddToCart} =
    useContext(MyStore);

  const navigate = useNavigate();

  useEffect(() => {
    if (id) getProduct(id);
  }, [id, getProduct]);

  if (productLoading) {
    return <div className="px-4 py-10 text-center">Loading...</div>;
  }

  if (!selectedProduct) {
    return <div className="px-4 py-10 text-center">Product not found</div>;
  }

  return (
    <main className="w-full min-h-screen py-12 bg-[#080808] text-white">
      <div className="w-[80%] mx-auto">
        <div className="mb-8  ">
          <div className="capitalize text-gray-400 flex items-center gap-2 mb-4">
            <button
              onClick={() => navigate("/shop")}
              className="flex items-center justify-center gap-2"
            >
              <MoveLeft size={16} className="text-white/50" />
              <span>Products</span>
            </button>
            <span className="text-white/60">/{selectedProduct.category}</span>
            <span className="text-white/70">/{selectedProduct.title}</span>
          </div>
          <div className="flex h-fit p-4 gap-8 items-start flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/2   sm:w-full ">
              <div className="bg-linear-to-b  from-white/5 to-black rounded-2xl p-6 flex items-center justify-center">
                <img
                  src={selectedProduct.thumbnail}
                  alt={selectedProduct.title}
                  className="max-w-full h-full rounded-lg "
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="mb-4">
                <Pill value={selectedProduct.category} />
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight mb-4">
                {selectedProduct.title}
              </h1>

              <div className="flex items-center gap-1">
                {Array.from({length: 5}).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className={
                      index < Math.round(selectedProduct.rating)
                        ? "fill-[#B8FD34] text-[#B8FD34]"
                        : "text-zinc-700"
                    }
                  />
                ))}
                <span className="ml-1 text-xs text-zinc-500">
                  ({selectedProduct.reviews?.length || 0})
                </span>
              </div>

              <hr className="my-6 border-t border-white/10" />

              <div className="font-serif flex items-center  text-3xl font-extrabold text-[#d8ff00] mb-4">
                <IndianRupee className="inline font-bold ml-1" />
                {selectedProduct.price.toFixed(2)}
              </div>

              <hr className="mb-6 border-t border-white/10" />

              <p className="text-gray-400 mb-6">
                {selectedProduct.description}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={()=>handleAddToCart(selectedProduct)}
                  className="flex items-center gap-3 bg-[#d8ff00] text-black px-8 py-4 rounded-full font-semibold"
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>
                <button className="w-12 h-12 rounded-lg   border-white/10 flex items-center justify-center">
                  <Heart
                    fill={heart ? "red" : null}
                    onClick={() => setHeart((p) => !p)}
                  />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <FeatureCard
                  icon={<Truck />}
                  title="Free Delivery"
                  subtitle="On orders $50+"
                />
                <FeatureCard
                  icon={<Shield />}
                  title="Secure Pay"
                  subtitle="256-bit SSL"
                />
                <FeatureCard
                  icon={<RotateCcw />}
                  title="Easy Returns"
                  subtitle="7-day policy"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  disabled={id === "1"}
                  onClick={() => navigate(`/shop/${Number(id) - 1}`)}
                  className="flex-1 bg-white/5 text-white py-3 rounded-full"
                  style={{cursor: id === "1" ? "not-allowed" : "pointer"}}
                >
                  &lt; Previous
                </button>
                <button
                  onClick={() => navigate(`/shop/${Number(id) + 1}`)}
                  style={{cursor: id === "30" ? "not-allowed" : "pointer"}}
                  className="flex-1 bg-[#d8ff00] text-black py-3 rounded-full"
                >
                  Next &gt;
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Related Products</h4>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {productsData.current
              .filter(
                (product) =>
                  product.category === selectedProduct.category &&
                  product.id !== selectedProduct.id,
              )
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

const FeatureCard = ({icon, title, subtitle}) => (
  <div className="flex-1 border border-white/10 rounded-2xl p-6 text-center min-w-45">
    <div className="flex items-center justify-center mb-2 text-lime-400">
      {icon}
    </div>
    <div className="font-semibold text-sm text-white/90">{title}</div>
    <div className="text-xs text-gray-400">{subtitle}</div>
  </div>
);

export default ProductPage;
