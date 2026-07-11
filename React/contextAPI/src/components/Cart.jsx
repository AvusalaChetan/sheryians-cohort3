import React, { useContext } from "react";
import { MyShop } from "../../context/MyWebsite";

const Cart = () => {
    let { cartItems } = useContext(MyShop);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="bg-white rounded-xl shadow p-8 text-center">
                            <h2 className="text-2xl font-semibold text-gray-500">
                                Your cart is empty 🛒
                            </h2>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow p-5 flex gap-6"
                            >
                                {/* Image */}
                                <div className="w-36 h-36 flex items-center justify-center bg-gray-100 rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-28 object-contain"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold line-clamp-2">
                                            {item.title}
                                        </h2>

                                        <p className="text-gray-500 capitalize mt-1">
                                            {item.category}
                                        </p>

                                        <p className="text-gray-600 mt-3 line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        <div>
                                            <p className="text-2xl font-bold text-green-600">
                                                ${item.price}
                                            </p>

                                            <p className="text-yellow-500">
                                                ⭐ {item.rating.rate} ({item.rating.count})
                                            </p>
                                        </div>

                                        <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-8">
                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                    <div className="flex justify-between mb-4">
                        <span>Items</span>
                        <span>{cartItems.length}</span>
                    </div>

                    <div className="flex justify-between mb-6">
                        <span>Total</span>
                        <span className="font-bold text-xl text-green-600">
                            ${total.toFixed(2)}
                        </span>
                    </div>

                    <button
                        className={`w-full py-3 rounded-lg text-white font-semibold ${cartItems.length
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                        disabled={!cartItems.length}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;