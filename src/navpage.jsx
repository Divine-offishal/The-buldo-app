import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation} from "react-router-dom"
import About from "./About/about";
import Blog from "./blog/blog";
import Home from "./home/home";

export default function NavPage (){
    const location= useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home/>}/>
                <Route path="/2" element={<About/>}/>
                <Route path="/3" element={<Blog/>}/>
            </Routes>
        </AnimatePresence>
    )
}