import React from "react";
import NumbData from "./data/numbersData";

export default function Numbers (){

    const mapped = NumbData.map((item, index)=> (
        <div key={index} className="xl:px-32 lg:px-20 md:px-10 px-24 py-10">
            <h1 className="text-seagreen text-7xl">{item.number}</h1>
            <p>{item.feature}</p>
        </div>
    ))

    return (
        <div className="bg-bermuda text-white h-auto pt-6 pb-20">
            <h1 className="text-center my-4">Our numbers</h1>
            <h1 className="text-4xl text-center md:px-52 px-10">Handshake infographic mass market crowdfunding iteration.</h1>
            <div className="md:flex md:px-20 pt-6">
                {mapped}
            </div>
        </div>
    )
}