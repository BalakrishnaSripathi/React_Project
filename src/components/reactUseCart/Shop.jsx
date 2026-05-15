import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  PackageCheck,
  Import,
  Zap,
} from "lucide-react";

/*
====================================================
INSTALLATION
====================================================

npm install react-use-cart
npm install lucide-react

====================================================
HOW TO IMPORT HOOK
====================================================

import { CartProvider, useCart } from "react-use-cart";

====================================================
WHY USE react-use-cart ?
====================================================

✔ Simple Cart State Management
✔ Add / Remove Products
✔ Update Product Quantity
✔ Automatic Total Calculation
✔ Global Cart Access
✔ localStorage Persistence
✔ Reduces Complex Logic
✔ Perfect for E-commerce Projects

====================================================
MAIN FUNCTIONS
====================================================

const {
  addItem,
  removeItem,
  updateItemQuantity,
  cartTotal,
  totalItems,
  items,
  emptyCart
} = useCart();

====================================================
HOW IT WORKS
====================================================

1. Wrap App with <CartProvider>
2. Use useCart() Hook
3. Add Products
4. Update Quantities
5. Remove Products
6. Checkout

====================================================
*/

const products = [
  {
    id: 1,
    title: "React Mastery",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Node.js Bootcamp",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop",
  },
];

function Shop() {
  const {
    addItem,
    removeItem,
    updateItemQuantity,
    cartTotal,
    totalItems,
    items,
    emptyCart,
  } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-950 text-white p-8">
      
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-5 animate-bounce">
          <ShoppingCart size={80} className="text-cyan-400" />
        </div>

        <h1 className="text-5xl font-bold mb-4">
          react-use-cart
        </h1>

        <p className="text-slate-300 max-w-3xl mx-auto text-lg">
          Powerful React Hook for managing shopping cart state in
          E-commerce Applications.
        </p>
      </div>

      {/* How To Use */}
      <div className="grid lg:grid-cols-2 gap-8 mb-24">
        
        {/* Import */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500">
          <div className="flex items-center gap-3 mb-5">
            <Import className="text-cyan-400" size={32} />
            <h2 className="text-3xl font-bold">
              How To Import
            </h2>
          </div>

          <div className="bg-black rounded-2xl p-5 overflow-auto">
            <pre className="text-sm text-green-400">{`
import {
  CartProvider,
  useCart
} from "react-use-cart";
            `}</pre>
          </div>
        </div>

        {/* Hook Usage */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500">
          <div className="flex items-center gap-3 mb-5">
            <Zap className="text-cyan-400" size={32} />
            <h2 className="text-3xl font-bold">
              How To Use Hook
            </h2>
          </div>

          <div className="bg-black rounded-2xl p-5 overflow-auto">
            <pre className="text-sm text-green-400">{`
const {
  addItem,
  removeItem,
  updateItemQuantity,
  cartTotal,
  totalItems,
  items
} = useCart();
            `}</pre>
          </div>
        </div>
      </div>

      {/* Functionalities */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Main Functionalities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Add */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:scale-105 hover:border-cyan-400 transition-all duration-500">
            <Plus size={45} className="text-cyan-400 mb-5 animate-pulse" />

            <h3 className="text-2xl font-bold mb-4">
              addItem()
            </h3>

            <p className="text-slate-300 mb-5">
              Adds products into the shopping cart.
            </p>

            <div className="bg-black p-4 rounded-xl">
              <pre className="text-green-400 text-sm">{`
addItem(product)
              `}</pre>
            </div>
          </div>

          {/* Update */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:scale-105 hover:border-cyan-400 transition-all duration-500">
            <PackageCheck
              size={45}
              className="text-cyan-400 mb-5 animate-bounce"
            />

            <h3 className="text-2xl font-bold mb-4">
              updateItemQuantity()
            </h3>

            <p className="text-slate-300 mb-5">
              Increase or decrease product quantity.
            </p>

            <div className="bg-black p-4 rounded-xl">
              <pre className="text-green-400 text-sm">{`
updateItemQuantity(id, qty)
              `}</pre>
            </div>
          </div>

          {/* Remove */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:scale-105 hover:border-cyan-400 transition-all duration-500">
            <Trash2
              size={45}
              className="text-cyan-400 mb-5 animate-spin"
            />

            <h3 className="text-2xl font-bold mb-4">
              removeItem()
            </h3>

            <p className="text-slate-300 mb-5">
              Removes product completely from cart.
            </p>

            <div className="bg-black p-4 rounded-xl">
              <pre className="text-green-400 text-sm">{`
removeItem(id)
              `}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Product Store
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-7">
                <h3 className="text-3xl font-bold mb-3">
                  {product.title}
                </h3>

                <p className="text-cyan-400 text-2xl font-semibold mb-6">
                  ₹{product.price}
                </p>

                <button
                  onClick={() => addItem(product)}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 py-4 rounded-2xl text-xl font-bold flex items-center justify-center gap-3"
                >
                  <Plus size={22} />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
        
        {/* Cart Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
          <div>
            <h2 className="text-4xl font-bold">
              Shopping Cart
            </h2>

            <p className="text-slate-400 mt-2">
              Managed Completely by react-use-cart
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-cyan-500 px-6 py-4 rounded-2xl text-xl font-bold animate-pulse">
              {totalItems} Items
            </div>

            <button
              onClick={() => emptyCart()}
              className="bg-red-500 hover:bg-red-400 transition-all px-6 py-4 rounded-2xl font-bold"
            >
              Empty Cart
            </button>
          </div>
        </div>

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart
              size={90}
              className="mx-auto text-slate-600 mb-5"
            />

            <h3 className="text-3xl text-slate-400">
              Cart Is Empty
            </h3>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row justify-between items-center bg-black/40 p-6 rounded-3xl border border-slate-800 hover:border-cyan-500 transition-all duration-500"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-28 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 mt-2">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-4 mt-5 lg:mt-0">
                    
                    <button
                      onClick={() =>
                        updateItemQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                      className="bg-slate-700 hover:bg-cyan-500 transition-all p-3 rounded-xl"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="text-2xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateItemQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="bg-slate-700 hover:bg-cyan-500 transition-all p-3 rounded-xl"
                    >
                      <Plus size={18} />
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 hover:bg-red-400 transition-all p-3 rounded-xl"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-12 border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
              <div>
                <h3 className="text-4xl font-bold">
                  Total: ₹{cartTotal}
                </h3>

                <p className="text-slate-400 mt-2">
                  Automatically calculated by react-use-cart
                </p>
              </div>

              <button className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 px-8 py-5 rounded-2xl text-xl font-bold flex items-center gap-3 shadow-2xl">
                <CreditCard size={24} />
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/*
====================================================
WRAP APP WITH CartProvider
====================================================
*/

export default Shop