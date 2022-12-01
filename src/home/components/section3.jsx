import React from "react";
import Sec3Data from "./Data/sec3Data";
import { HashLink } from "react-router-hash-link";

export default function Section3 (){

    const mappedData = Sec3Data.map((item, index) => (
        <div key={index} className="h-auto w-72 m-10">
            <img src={item.image}/>
            <div className="flex py-4">
                <p className="font-medium mr-4">Category</p>
                <p className="opacity-50 font-medium">{item.date}</p>
            </div>
            <div className="font-medium opacity-80">
                <p>{item.text}</p>
                <p className="mt-4">{item.name}</p>
            </div>
        </div>
    ))

    return (
        <div className="mt-20">
            <h1 className="opacity-70 text-center">Our Blog</h1>
            <h1 className="text-5xl md:pl-40 md:pr-40 text-center">Value proposition accelerator product management venture</h1>
            <div className="md:flex md:ml-24">
                {mappedData}
            </div>
            <HashLink smooth to="/3/#blog" className="object-none object-center">
                <button className="border-2 border-bermuda h-10 w-32 rounded-full hover:bg-seagreen focus:bg-bermuda focus:text-white md:ml-96 ml-32 object-none object-center">Load more</button>
            </HashLink>
        </div>
    )
}