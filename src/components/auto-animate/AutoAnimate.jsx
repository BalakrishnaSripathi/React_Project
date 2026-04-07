export default function AutoAnimateCode() {
    const code = `
import { Dropdown } from 'bootstrap'
import React from 'react'
import Juggle from './Juggle'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const AutoAnimateApp = () => {
     const [items, setItems] = useState([0, 1, 2])
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
  const add = () => setItems([...items, items.length])
  return (
    <div>
       
      
      <div>
        <h2>Numbers</h2>
  <ul ref={parent}>
    {items.map(
      item => <li key={item}>{ item }</li>
    )}
  </ul>
  <button className='btn btn-success' onClick={add}>Add number</button>
  <button className='btn btn-danger' onClick={() => enableAnimations(false)}>Disable</button>
      </div>
      <h2>Juggle</h2>
      <Juggle/>

      <h2>Cycle Emoji</h2>
     
    </div>
  )
}

export default AutoAnimateApp



import { useState } from 'preact/hooks'
import { useAutoAnimate } from '@formkit/auto-animate/preact'

const CycleEmoji = function () {
  const [items, setItems] = useState(["🎁", "📦", "🚚", "💪", "🐽", "🐸", "🐻", "🪱", "🪳"])
  const [parent] = useAutoAnimate(/* optional config */)

  function cycle() {
    items.unshift(items.pop())
    setItems(items)
  }

  return <>
  <ul ref={parent}>
    {items.map(
      item => <li key={item}>{ item }</li>
    )}
  </ul>
  <button onClick={cycle}>Cycle Emoji</button>
</>
}

export default CycleEmoji



import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const Dropdown = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div ref={parent}>
    <strong className="dropdown-label" onClick={reveal}>Click me to open!</strong>
    { show && <p className="dropdown-content" >Lorum ipsum...</p> }
  </div>
}

export default Dropdown



import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function Juggle() {
  const [balls, setBalls] = useState(["red", "green", "blue"]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [parent, enable] = useAutoAnimate({ duration: 500 });

  // Tailwind safe color mapping
  const colorClasses = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  function toggle() {
    enable(!isEnabled);
    setIsEnabled(!isEnabled);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prev) => {
        const juggled = [...prev];
        juggled.push(juggled.shift());
        return juggled;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      
      {/* Balls */}
      <ul ref={parent} className="flex gap-4">
        {balls.map((color) => (
          <li
            key={color}
            className={{colorClasses[color]} text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold}
          >
            {color}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={toggle}
        className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        {isEnabled ? "🚫 Disable Animations" : "✅ Enable Animations"}
      </button>
    </div>
  );
}

export default Juggle;
`;

    return (
        <div className="container mt-3">
            <h3> Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
