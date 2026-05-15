import React, { useEffect, useState } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  Package,
  BadgeCheck,
  Store,
} from "lucide-react";

const cartFeatures = [
  {
    icon: <Plus size={28} />,
    title: "Add Items",
    desc: "Easily add products to cart from anywhere in the app.",
  },
  {
    icon: <Minus size={28} />,
    title: "Update Quantity",
    desc: "Increase or decrease product quantity instantly.",
  },
  {
    icon: <Trash2 size={28} />,
    title: "Remove Products",
    desc: "Delete unwanted items from the shopping cart.",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Cart Total",
    desc: "Automatically calculates total price and item count.",
  },
  {
    icon: <Package size={28} />,
    title: "Cart Persistence",
    desc: "Keeps cart data stored using localStorage.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Simple API",
    desc: "Provides easy hooks for fast e-commerce development.",
  },
];

export default function ReactUseCartVisualization() {
  const [step, setStep] = useState(0);

  const workflow = [
    "Browse Products",
    "Add To Cart",
    "Update Quantity",
    "View Cart",
    "Checkout",
    "Order Success",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % workflow.length);
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-black text-white p-8 overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-5 animate-bounce">
          <ShoppingCart size={75} className="text-cyan-400" />
        </div>

        <h1 className="text-5xl font-bold mb-4">
          react-use-cart
        </h1>

        <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
          A lightweight React hook library for managing shopping cart state in
          e-commerce applications. It simplifies add-to-cart, quantity updates,
          cart totals, localStorage persistence, and checkout flow management.
        </p>
      </div>

      {/* Workflow Animation */}
      <div className="mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Shopping Cart Workflow Animation
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-5">
          {workflow.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`px-6 py-4 rounded-2xl border transition-all duration-700 transform
                ${
                  step === index
                    ? "bg-cyan-500 scale-110 shadow-2xl shadow-cyan-500/40 border-cyan-300"
                    : "bg-slate-800 border-slate-700"
                }`}
              >
                <p className="font-semibold">{item}</p>
              </div>

              {index !== workflow.length - 1 && (
                <div
                  className={`text-3xl transition-all duration-700 ${
                    step === index
                      ? "text-cyan-400 translate-x-2"
                      : "text-slate-600"
                  }`}
                >
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div>
        <h2 className="text-3xl font-semibold text-center mb-12">
          What react-use-cart Can Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cartFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-900/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-7 hover:scale-105 hover:border-cyan-400 transition-all duration-500 shadow-lg"
            >
              <div className="mb-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-500">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hook Examples */}
      <div className="mt-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Important Hooks & Functions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* addItem */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              addItem()
            </h3>

            <p className="text-slate-300 mb-4">
              Adds products into the shopping cart instantly.
            </p>

            <div className="bg-black rounded-xl p-4 overflow-auto text-sm">
              <pre>{`
const { addItem } = useCart();

addItem(product);
              `}</pre>
            </div>
          </div>

          {/* updateItemQuantity */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              updateItemQuantity()
            </h3>

            <p className="text-slate-300 mb-4">
              Increase or decrease item quantity dynamically.
            </p>

            <div className="bg-black rounded-xl p-4 overflow-auto text-sm">
              <pre>{`
updateItemQuantity(id, quantity);
              `}</pre>
            </div>
          </div>

          {/* removeItem */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              removeItem()
            </h3>

            <p className="text-slate-300 mb-4">
              Removes products from the cart completely.
            </p>

            <div className="bg-black rounded-xl p-4 overflow-auto text-sm">
              <pre>{`
removeItem(id);
              `}</pre>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              cartTotal & totalItems
            </h3>

            <p className="text-slate-300 mb-4">
              Automatically calculates total amount and cart item count.
            </p>

            <div className="bg-black rounded-xl p-4 overflow-auto text-sm">
              <pre>{`
const {
  cartTotal,
  totalItems
} = useCart();
              `}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Live Cart Simulation */}
      <div className="mt-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Mini Cart Simulation
        </h2>

        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 rounded-3xl p-8">
          <div className="flex justify-between items-center border-b border-slate-700 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <Store className="text-cyan-400" size={32} />
              <h3 className="text-2xl font-bold">
                React Store
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-cyan-500 px-5 py-2 rounded-full">
              <ShoppingCart size={20} />
              <span className="font-semibold">3 Items</span>
            </div>
          </div>

          <div className="space-y-5">
            
            {/* Item */}
            <div className="flex justify-between items-center bg-black/40 p-5 rounded-2xl">
              <div>
                <h4 className="font-bold text-lg">
                  React Course
                </h4>
                <p className="text-slate-400">
                  ₹999
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="bg-slate-700 p-2 rounded-lg hover:bg-cyan-500 transition-all">
                  <Minus size={18} />
                </button>

                <span className="font-bold text-lg">
                  1
                </span>

                <button className="bg-slate-700 p-2 rounded-lg hover:bg-cyan-500 transition-all">
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Item */}
            <div className="flex justify-between items-center bg-black/40 p-5 rounded-2xl">
              <div>
                <h4 className="font-bold text-lg">
                  Node.js Mastery
                </h4>
                <p className="text-slate-400">
                  ₹1499
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="bg-slate-700 p-2 rounded-lg hover:bg-cyan-500 transition-all">
                  <Minus size={18} />
                </button>

                <span className="font-bold text-lg">
                  2
                </span>

                <button className="bg-slate-700 p-2 rounded-lg hover:bg-cyan-500 transition-all">
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="mt-8 border-t border-slate-700 pt-6 flex justify-between items-center">
            <div>
              <h4 className="text-xl font-bold">
                Total Amount
              </h4>

              <p className="text-slate-400">
                Calculated automatically by react-use-cart
              </p>
            </div>

            <div className="text-3xl font-bold text-cyan-400">
              ₹3997
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="inline-block px-8 py-5 rounded-3xl bg-cyan-500/10 border border-cyan-500">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            Why Developers Use react-use-cart
          </h3>

          <p className="text-slate-300 max-w-2xl">
            It removes complex cart state management logic, simplifies
            e-commerce development, automatically handles totals,
            supports localStorage persistence, and makes shopping cart
            functionality fast and scalable.
          </p>
        </div>
      </div>
    </div>
  );
}