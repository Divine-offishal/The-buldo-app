import React, { useState } from "react"
import Home from "./home/home"
import Navbar from "./navbar"
import {BrowserRouter} from "react-router-dom"
import NavPage from "./navpage"
import Footer from "./footer"
import AnimatedMotion from "./Animatedmotion"

export default function App() {

  const [load, setLoad] = useState(true)
  const preDiv = document.getElementById("spinner")

  if(load){
    setTimeout(()=>{
      preDiv.style.display = "none";
      setLoad(false)
    }, 2000)
  }

  

  return (
    !load && 
    <div>
      <Navbar/>
      <NavPage/>
      <Footer/>
    </div>
  )
}
