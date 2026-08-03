import {IndianRupeeIcon, Minus, Plus, Trash2, XCircle} from "lucide-react";
import {nanoid} from "nanoid";
import {useContext, useEffect, useState} from "react";
import {MyStore} from "../context/MartContext";
import { toast } from "react-toastify";

const CartItems = () => {
  const {cartItems, showCardItems, setShowCardItems,handleAddToCart} = useContext(MyStore);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, val) => (acc + val.price)*val.qty, 0);
    setTotalPrice(total.toFixed(2));
  }, [cartItems,handleAddToCart]);

  if (!showCardItems) {
    return null;
  }

  return (
    <div
      className="fixed  transition-all inset-0 z-50  bg-black/40"
      onClick={() => setShowCardItems(false)}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 right-0 h-full transition-all w-[40%] min-w-[320px] bg-zinc-950 border-l border-zinc-800 text-white shadow-2xl transform  duration-300 translate-x-0"
      >
        <div className="h-full flex flex-col">
          <div className="px-6 py-5 border-b border-zinc-800">
            <button
              onClick={() => setShowCardItems(false)}
              className="float-right "
            >
              <XCircle size={18} />
            </button>
            <h2 className="text-xl font-semibold tracking-wide">Your Cart</h2>
            <p className="text-sm text-zinc-400 mt-1">
              Review items before checkout
            </p>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {cartItems.length ? (
              cartItems.map((item) => (
                <CartItem key={nanoid()} product={item} />
              ))
            ) : (
              <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/40 p-4 text-sm text-zinc-400">
                No items in cart yet.
              </div>
            )}
          </div>

          <div className="border-t border-zinc-800 p-4">
            <button
            onClick={()=>toast.success('thanks for buying from us')}
            disabled={totalPrice === 0}
              type="button"
              className="w-full rounded-xl bg-(--secondaryColor) text-black font-semibold py-3 hover:brightness-95 transition"
            >
              Buy All - <IndianRupeeIcon className="inline" size={16}/>{totalPrice}
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

const CartItem = ({product}) => {
  const {handleDeleteFromCart,handleAddToCart,handleDel} = useContext(MyStore);
  return (
    <div className="rounded-2xl font-serif border border-zinc-700 bg-zinc-950/90 p-4 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="h-15 w-15 shrink-0 overflow-hidden rounded-xl bg-zinc-800">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover "
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className=" text-xl font-medium text-zinc-200 font-serif">
            {product.title}
          </p>

          <p className="mt-1 text-md font-semibold text-lime-400 flex items-center justify-start ">
            <IndianRupeeIcon size={15} />
            {(product.price * product.qty).toFixed(2)}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <button
            onClick={()=>handleDeleteFromCart(product)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-800">
              <Minus size={15} />
            </button>

            <span className="min-w-6 text-center text-lg font-semibold text-white">
              {product.qty || 1}
            </span>

            <button 
            onClick={()=>handleAddToCart(product)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-800">
              <Plus size={15} />
            </button>

            <button
              onClick={() => handleDel(product)}
              className="ml-auto text-red-400 hover:text-red-300"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
