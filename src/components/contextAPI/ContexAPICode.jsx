export default function ContextAPICode() {
    const code = `
import { useState,createContext, useContext } from "react"
import About from "./About";

export const ThemeContext=createContext();

const Product=()=>{
    const theme=useContext(ThemeContext);
    return(
        <div className="bg-fuchsia-400 border-2 border-orange-400">
            <h1>Product Component</h1>
        <button className={theme ==="light"? "bg-blue-500 p-1 rounded-2" :"bg-black text-white p-1 rounded-2"}>Add to Cart</button>
        </div>
    )
}

const Categories=()=>{
    return(
    <div>
        <h1>catagories Component</h1>
        <div className="flex flex-row gap-8 ml-1 mb-2">
        <Product/>
        <About/>
        </div>
    </div>
    )
}
const NavBar=()=>{
    return (
        <div>
            <h1>navbar component</h1>
        </div>
    )
}

const Home =()=>{
    const [theme,setTheme]=useState("dark")
   // const theme="light" //"light" | "dark"
    return(
        <div className="bg-amber-200 border-5 border-black">
            <h3>Home Page</h3>
            <ThemeContext.Provider value={theme}>
                <div className="bg-blue-200 border-3 border-red-800 ml-2 mr-2">
                <Categories/>
                </div>
            </ThemeContext.Provider>
            <NavBar/>
            <div className="flex justify-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 rounded-1 active:scale-95 text-white" onClick={()=>setTheme("light")}>LightTheme</button>
            <button className="bg-red-600 hover:bg-red-700 rounded-1 active:scale-95 text-white" onClick={()=>setTheme("dark")}>DarkTheme</button>   
            </div>  
        </div>
    )
}
export default Home;



import { ThemeContext } from './Home'
import React, { useContext } from 'react'

const About = () => {
    const  theme=useContext(ThemeContext)
  return (
    <div className='bg-emerald-400 border-2 border-orange-400'>
      <h1>About Component</h1>
      <button className={theme==='light'?"bg-blue-300 border-2 border-black p-1 rounded-2":"bg-red-300 border-2 border-black p-1 rounded-2"}>About</button>
    </div>
  )
}

export default About


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
