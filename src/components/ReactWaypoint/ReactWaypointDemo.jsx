import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import {
  Rocket,
  Eye,
  ScrollText,
  CheckCircle2,
  Loader2,
} from "lucide-react";

/*
======================================================
INSTALLATION
======================================================

npm install react-waypoint --save
npm install lucide-react

======================================================
IMPORT
======================================================

import { Waypoint } from "react-waypoint";

======================================================
WHAT react-waypoint DOES
======================================================

✔ Detects when elements enter viewport
✔ Detects when elements leave viewport
✔ Creates scroll animations
✔ Infinite scrolling
✔ Lazy loading
✔ Better user experience

======================================================
MAIN EVENTS
======================================================

onEnter() → Trigger when visible
onLeave() → Trigger when hidden

======================================================
*/

export default function ReactWaypointDemo() {
  const [showCard, setShowCard] = useState(false);

  const [items, setItems] = useState([
    1, 2, 3, 4, 5, 6,
  ]);

  /*
  ======================================================
  LOAD MORE ITEMS
  ======================================================
  */

  const loadMoreItems = () => {
    setItems((prev) => [
      ...prev,
      prev.length + 1,
      prev.length + 2,
      prev.length + 3,
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-950 text-white">
      
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        
        <Rocket
          size={90}
          className="text-cyan-400 animate-bounce mb-8"
        />

        <h1 className="text-6xl font-bold mb-6">
          react-waypoint
        </h1>

        <p className="text-slate-300 text-xl max-w-3xl leading-relaxed">
          Powerful React library to detect when components
          enter or leave the viewport during scrolling.
        </p>

        <div className="mt-12 animate-pulse">
          <p className="text-cyan-400 text-lg">
            Scroll Down ↓
          </p>
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="px-6 lg:px-20 py-20">
        
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
          
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            Installation
          </h2>

          <div className="bg-black rounded-2xl p-6 overflow-auto">
            <pre className="text-green-400 text-sm">{`
npm install react-waypoint --save
npm install lucide-react
            `}</pre>
          </div>
        </div>
      </section>

      {/* IMPORT */}
      <section className="px-6 lg:px-20 py-10">
        
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
          
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            Import
          </h2>

          <div className="bg-black rounded-2xl p-6 overflow-auto">
            <pre className="text-green-400 text-sm">{`
import { Waypoint } from "react-waypoint";
            `}</pre>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 lg:px-20 py-20">
        
        <h2 className="text-5xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          
          <div className="bg-slate-900 border border-cyan-500 px-8 py-5 rounded-2xl animate-bounce">
            User Scrolls
          </div>

          <div className="text-5xl text-cyan-400">
            →
          </div>

          <div className="bg-slate-900 border border-cyan-500 px-8 py-5 rounded-2xl animate-pulse">
            Waypoint Detects
          </div>

          <div className="text-5xl text-cyan-400">
            →
          </div>

          <div className="bg-slate-900 border border-cyan-500 px-8 py-5 rounded-2xl animate-bounce">
            Function Executes
          </div>
        </div>
      </section>

      {/* VIEWPORT DETECTION */}
      <section className="px-6 lg:px-20 py-24">
        
        <h2 className="text-5xl font-bold text-center mb-10">
          Viewport Detection Example
        </h2>

        <p className="text-center text-slate-400 mb-20">
          Scroll further to trigger animation
        </p>

        {/* Spacer */}
        <div className="h-[500px]" />

        {/* WAYPOINT */}
        <Waypoint
          onEnter={() => setShowCard(true)}
          onLeave={() => setShowCard(false)}
        />

        {/* Animated Card */}
        <div
          className={`
            transition-all duration-1000
            ${
              showCard
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-24 scale-90"
            }
          `}
        >
          <div className="max-w-4xl mx-auto bg-slate-900 border border-cyan-500 rounded-3xl p-10 shadow-2xl shadow-cyan-500/20">
            
            <div className="flex items-center gap-4 mb-6">
              <Eye
                size={45}
                className="text-cyan-400 animate-pulse"
              />

              <h3 className="text-4xl font-bold">
                Element Entered Viewport
              </h3>
            </div>

            <p className="text-slate-300 text-xl leading-relaxed">
              react-waypoint detected that this component
              entered the viewport and triggered animation.
            </p>
          </div>
        </div>
      </section>

      {/* INFINITE SCROLL */}
      <section className="px-6 lg:px-20 py-24">
        
        <div className="flex items-center justify-center gap-4 mb-14">
          <ScrollText
            size={45}
            className="text-cyan-400 animate-bounce"
          />

          <h2 className="text-5xl font-bold">
            Infinite Scroll Example
          </h2>
        </div>

        {/* Items */}
        <div className="space-y-8 max-w-5xl mx-auto">
          
          {items.map((item) => (
            <div
              key={item}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                
                <CheckCircle2
                  size={35}
                  className="text-cyan-400"
                />

                <div>
                  <h3 className="text-2xl font-bold">
                    Item {item}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Loaded dynamically using react-waypoint
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* LOAD MORE */}
          <Waypoint
            onEnter={loadMoreItems}
            bottomOffset="-100px"
          />

          {/* Loading */}
          <div className="flex flex-col items-center justify-center py-16">
            
            <Loader2
              size={50}
              className="text-cyan-400 animate-spin mb-5"
            />

            <p className="text-slate-400 text-lg">
              Loading More Items...
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 lg:px-20 py-24">
        
        <h2 className="text-5xl font-bold text-center mb-16">
          Features
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {[
            "Scroll Detection",
            "Viewport Visibility",
            "Infinite Scrolling",
            "Lazy Loading",
            "Animation Triggers",
            "Better User Experience",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500 hover:scale-105"
            >
              <CheckCircle2
                size={40}
                className="text-cyan-400 mb-5 animate-pulse"
              />

              <h3 className="text-2xl font-bold">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section className="px-6 py-20 text-center">
        
        <div className="inline-block bg-cyan-500/10 border border-cyan-500 rounded-3xl px-10 py-8">
          
          <h2 className="text-4xl font-bold text-cyan-400 mb-5">
            Why Developers Use react-waypoint
          </h2>

          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            It simplifies scroll-based interactions,
            improves animations, enables infinite scrolling,
            and creates modern user experiences with minimal code.
          </p>
        </div>
      </section>
    </div>
  );
}