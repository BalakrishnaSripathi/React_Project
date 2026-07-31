"use client"

import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion"
import React, { useRef, useState } from "react"

export default function MotionShowcase() {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div style={showcaseContainer}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>
          Motion (motion.dev) Showcase
        </h1>
        <p style={{ margin: "8px 0 0", opacity: 0.8, fontSize: "14px" }}>
          Explore key animation patterns built with Motion.
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav style={navContainer}>
        {examples.map((item) => {
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                ...navButton,
                color: isActive ? "#000" : "#666",
              }}
            >
              {item.title}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  style={activeIndicator}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          )
        })}
      </nav>

      {/* Main Content Showcase Card */}
      <div style={cardWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={cardInner}
          >
            {activeTab === 1 && <AddToBasketDemo />}
            {activeTab === 2 && <SharedLayoutDemo />}
            {activeTab === 3 && <ScrollHorizontalDemo />}
            {activeTab === 4 && <UseTransformDemo />}
            {activeTab === 5 && <ReorderListDemo />}
            {activeTab === 6 && <InteractiveCardDemo />}
            {activeTab === 7 && <TextStaggerDemo />}
            {activeTab === 8 && <SequenceSpringDemo />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ============================================================================
 * EXAMPLE 1: Add To Basket
 * ============================================================================ */
const PRODUCT_SIZE = 120
const BASKET_BOX = 48

function AddToBasketDemo() {
  const [scope, animate] = useAnimate()
  const productRef = useRef(null)
  const basketRef = useRef(null)
  const ringRef = useRef(null)
  const [isFlying, setIsFlying] = useState(false)
  const productX = useMotionValue(0)
  const productY = useMotionValue(0)

  const addToBasket = async () => {
    const product = productRef.current
    const basket = basketRef.current
    const ring = ringRef.current
    if (!product || !basket || !ring || isFlying) return
    setIsFlying(true)

    const from = product.getBoundingClientRect()
    const to = basket.getBoundingClientRect()
    const dx = to.left + to.width / 2 - (from.left + from.width / 2)
    const dy = to.top + to.height / 2 - (from.top + from.height / 2)

    await animate(
      product,
      { x: dx, y: dy, scale: 0.4, opacity: [1, 1, 0] },
      { duration: 0.45, ease: [0.74, 0.18, 0.93, 0.69] }
    )

    animate(
      basket,
      { scale: [1, 1.25, 1] },
      { type: "spring", stiffness: 400, damping: 15 }
    )

    animate(
      ring,
      { scale: [1, 2.2], opacity: [0.8, 0] },
      { duration: 0.5, ease: "easeOut" }
    )

    animate(product, { x: 0, y: 0, scale: 0.9, opacity: 0 }, { duration: 0 })

    await animate(
      product,
      { opacity: 1, scale: 1 },
      {
        scale: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.25 },
      }
    )

    setIsFlying(false)
  }

  return (
    <div ref={scope} style={{ position: "relative", width: "100%", height: 320 }}>
      <div ref={basketRef} style={basketStyle}>
        <motion.div ref={ringRef} style={ringStyle} />
        <BasketIcon />
      </div>

      <div style={centerFlex}>
        <motion.div
          ref={productRef}
          style={{ ...productStyle, x: productX, y: productY }}
        >
          <span style={{ fontSize: 60, userSelect: "none" }}>👟</span>
        </motion.div>

        <div style={{ display: "flex", gap: 8, fontSize: 14, fontWeight: 600 }}>
          <span>Campus 00s</span>
          <span style={{ color: "#7700ff" }}>£128</span>
        </div>

        <motion.button
          type="button"
          onClick={addToBasket}
          disabled={isFlying}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            ...btnStyle,
            opacity: isFlying ? 0.55 : 1,
            pointerEvents: isFlying ? "none" : "auto",
          }}
        >
          Add to basket
        </motion.button>
      </div>
    </div>
  )
}

/* ============================================================================
 * EXAMPLE 2: Shared Layout Animation
 * ============================================================================ */
const tabs = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
]

function SharedLayoutDemo() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div style={{ width: "100%", maxWidth: 400, margin: "0 auto" }}>
      <nav style={tabNav}>
        <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#f0f0f0" : "#ffffff00",
              }}
              style={tabLi}
              onClick={() => setSelectedTab(item)}
            >
              <span>{`${item.icon} ${item.label}`}</span>
              {item === selectedTab && (
                <motion.div
                  style={underlineStyle}
                  layoutId="underlineTab"
                  id="underlineTab"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>

      <div style={tabContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: 72 }}
          >
            {selectedTab.icon}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ============================================================================
 * EXAMPLE 3: Scroll Horizontal Gallery
 * ============================================================================ */
const galleryItems = [
  { id: 1, label: "Night One", color: "#ff008c" },
  { id: 2, label: "Night Two", color: "#7700ff" },
  { id: 3, label: "Night Three", color: "#00d1b2" },
  { id: 4, label: "Night Four", color: "#ffdd57" },
]

function ScrollHorizontalDemo() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const totalDistance = (galleryItems.length - 1) * (200 + 16)
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

  return (
    <div style={{ width: "100%" }}>
      <p style={{ textAlign: "center", fontSize: 13, color: "#666", marginBottom: 12 }}>
        Scroll inside the container below:
      </p>

      <div ref={containerRef} style={scrollArea}>
        <div style={stickyWrapper}>
          <motion.div style={{ ...galleryFlex, x }}>
            {galleryItems.map((item) => (
              <div
                key={item.id}
                style={{
                  ...galleryCard,
                  backgroundColor: item.color,
                }}
              >
                <span style={{ fontSize: 12, opacity: 0.8 }}>0{item.id}</span>
                <h3 style={{ margin: "4px 0 0", fontSize: 18 }}>{item.label}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ============================================================================
 * EXAMPLE 4: Drag & Property Transform
 * ============================================================================ */
function UseTransformDemo() {
  const x = useMotionValue(0)
  const xInput = [-100, 0, 100]

  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
  ])

  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
  ])

  const tickPath = useTransform(x, [10, 100], [0, 1])
  const crossPathA = useTransform(x, [-10, -55], [0, 1])
  const crossPathB = useTransform(x, [-50, -100], [0, 1])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
        Drag the white box horizontally left or right:
      </p>

      <motion.div style={{ ...transformContainer, background }}>
        <motion.div
          style={{ ...dragBox, x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
        >
          <svg width="50" height="50" viewBox="0 0 50 50">
            <motion.path
              fill="none"
              strokeWidth="3"
              stroke={color}
              d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
              style={{ x: 5, y: 5 }}
            />
            <motion.path
              fill="none"
              strokeWidth="3"
              stroke={color}
              d="M14,26 L 22,33 L 35,16"
              strokeDasharray="0 1"
              style={{ pathLength: tickPath }}
            />
            <motion.path
              fill="none"
              strokeWidth="3"
              stroke={color}
              d="M17,17 L33,33"
              strokeDasharray="0 1"
              style={{ pathLength: crossPathA }}
            />
            <motion.path
              fill="none"
              strokeWidth="3"
              stroke={color}
              d="M33,17 L17,33"
              strokeDasharray="0 1"
              style={{ pathLength: crossPathB }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ============================================================================
 * EXAMPLE 5: Layout Animation (Reordering List)
 * ============================================================================ */
const initialItems = [
  { id: "1", label: "⚡ Fast Performance", color: "#ff008c" },
  { id: "2", label: "🎨 Spring Physics", color: "#7700ff" },
  { id: "3", label: "📦 Zero Config Layout", color: "#00d1b2" },
]

function ReorderListDemo() {
  const [items, setItems] = useState(initialItems)

  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5))
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p style={{ fontSize: 13, color: "#666", marginBottom: 12 }}>
        Automatic smooth layout transitions via Motion's <code>layout</code> prop.
      </p>

      <div style={{ width: "100%", maxWidth: 320, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              padding: "14px 18px",
              borderRadius: 12,
              background: item.color,
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            {item.label}
          </motion.div>
        ))}
      </div>

      <motion.button
        type="button"
        onClick={shuffle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ ...btnStyle, marginTop: 20, background: "#111" }}
      >
        🔀 Shuffle Items
      </motion.button>
    </div>
  )
}

/* ============================================================================
 * EXAMPLE 6: Interactive Micro-Interactions (Hover & Tap)
 * ============================================================================ */
function InteractiveCardDemo() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 240 }}>
      <motion.div
        whileHover={{ scale: 1.04, y: -6, boxShadow: "0 20px 30px rgba(0,0,0,0.12)" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        style={{
          width: 280,
          padding: 24,
          borderRadius: 20,
          background: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
          color: "#fff",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 12 }}>🚀</div>
        <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>Gestures Card</h3>
        <p style={{ margin: 0, fontSize: 13, color: "#a0aec0", lineHeight: 1.5 }}>
          Hover and click this card to see high-precision spring feedback driven by gestures.
        </p>
      </motion.div>
    </div>
  )
}

/* ============================================================================
 * EXAMPLE 7: Text Character Staggering
 * ============================================================================ */
const sampleText = "Motion Makes Web Feel Alive."

function TextStaggerDemo() {
  const [key, setKey] = useState(0)

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, staggerChildren: 0.04 },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  }

  return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <motion.h2
        key={key}
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        style={{ fontSize: 24, fontWeight: 800, margin: "0 0 24px", color: "#111" }}
      >
        {sampleText.split("").map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.button
        type="button"
        onClick={() => setKey((prev) => prev + 1)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        style={btnStyle}
      >
        Replay Animation
      </motion.button>
    </div>
  )
}

/* ============================================================================
 * EXAMPLE 8: Sequence & Physics Springs
 * ============================================================================ */
function SequenceSpringDemo() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
        Expandable container with custom spring dynamics.
      </p>

      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          width: 300,
          padding: 20,
          borderRadius: 16,
          background: "#f4f4f5",
          border: "1px solid #e4e4e7",
          cursor: "pointer",
        }}
      >
        <motion.h4 layout style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>
          {isExpanded ? "Click to Collapse 🔼" : "Click to Expand 🔽"}
        </motion.h4>

        {isExpanded && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{ margin: "12px 0 0", fontSize: 13, color: "#555", lineHeight: 1.5 }}
          >
            Motion enables rapid spring transitions and natural layout morphs without calculating exact dimensions manually.
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}

/* ============================================================================
 * Shared Navigation Definitions & Styles
 * ============================================================================ */
const examples = [
  { id: 1, title: "1. Add to Basket" },
  { id: 2, title: "2. Shared Layout" },
  { id: 3, title: "3. Scroll Horizontal" },
  { id: 4, title: "4. Drag Transform" },
  { id: 5, title: "5. Reorder List" },
  { id: 6, title: "6. Gestures Card" },
  { id: 7, title: "7. Text Stagger" },
  { id: 8, title: "8. Spring Accordion" },
]

function BasketIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 11-1 9" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
      <path d="M4.5 15.5h15" />
      <path d="m5 11 4-7" />
      <path d="m9 11 1 9" />
    </svg>
  )
}

/* ============================================================================
 * Styles
 * ============================================================================ */
const showcaseContainer = {
  maxWidth: 680,
  margin: "40px auto",
  padding: "24px",
  fontFamily: "system-ui, -apple-system, sans-serif",
  color: "#111",
}

const headerStyle = {
  textAlign: "center",
  marginBottom: 24,
}

const navContainer = {
  display: "flex",
  gap: 8,
  justifyContent: "center",
  marginBottom: 20,
  flexWrap: "wrap",
}

const navButton = {
  position: "relative",
  padding: "8px 14px",
  border: "none",
  background: "transparent",
  fontSize: 13,
  fontWeight: 600,
  cursor: "pointer",
  outline: "none",
}

const activeIndicator = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 2,
  backgroundColor: "#7700ff",
  borderRadius: 2,
}

const cardWrapper = {
  background: "#ffffff",
  borderRadius: 16,
  border: "1px solid #e5e7eb",
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
  overflow: "hidden",
  minHeight: 360,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const cardInner = {
  width: "100%",
  padding: 24,
}

const centerFlex = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  height: "100%",
}

const basketStyle = {
  position: "absolute",
  top: 10,
  right: 10,
  width: BASKET_BOX,
  height: BASKET_BOX,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f4f4f5",
  border: "1px solid #e4e4e7",
  color: "#7700ff",
}

const ringStyle = {
  position: "absolute",
  inset: -1,
  borderRadius: 12,
  border: "2px solid #7700ff",
  opacity: 0,
  pointerEvents: "none",
}

const productStyle = {
  width: PRODUCT_SIZE,
  height: PRODUCT_SIZE,
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f4f4f5",
  border: "1px solid #e4e4e7",
}

const btnStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: 8,
  background: "#7700ff",
  color: "#fff",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
}

const tabNav = {
  background: "#f9fafb",
  padding: 4,
  borderRadius: 10,
  border: "1px solid #e5e7eb",
}

const tabLi = {
  flex: 1,
  padding: "10px 12px",
  borderRadius: 8,
  textAlign: "center",
  position: "relative",
  cursor: "pointer",
  fontSize: 14,
  fontWeight: 500,
  userSelect: "none",
}

const underlineStyle = {
  position: "absolute",
  bottom: 0,
  left: 8,
  right: 8,
  height: 2,
  backgroundColor: "#7700ff",
}

const tabContent = {
  height: 180,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const scrollArea = {
  height: "220px",
  overflowY: "scroll",
  borderRadius: 12,
  border: "1px dashed #ccc",
  position: "relative",
}

const stickyWrapper = {
  position: "sticky",
  top: 0,
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  overflow: "hidden",
}

const galleryFlex = {
  display: "flex",
  gap: 16,
}

const galleryCard = {
  width: 200,
  height: 140,
  borderRadius: 12,
  padding: 16,
  color: "#fff",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}

const transformContainer = {
  width: "100%",
  maxWidth: 360,
  height: 200,
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const dragBox = {
  width: 100,
  height: 100,
  backgroundColor: "#ffffff",
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
  cursor: "grab",
}