import React from "react";
import ValuesData from "./data/valuesData";

export default function (){

    const mapped = ValuesData.map((item, index) => (

        <div key={index} className="flex my-6">
            <img src={item.image} className="md:w-20 w-16 h-20 mt-6"/>
            <div className="ml-6 md:mt-6 mt-4">
                <h1 className="opacity-70 text-2xl font-normal">{item.title}</h1>
                <p className="opacity-70">{item.para}</p>
            </div>
        </div>
    ))

    return (
        <div className="bg-bermuda h-auto text-white py-10 mb-32 px-6">
            <h1 className="opacity-70 text-center ">Our values</h1>
            <h1 className="text-4xl text-center py-4">Things we believe</h1>
            <p className="opacity-70 md:px-32 py-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio in sunt provident distinctio minus, quasi voluptatem architecto, reiciendis porro totam impedit, officia rerum soluta non sequi magni et delectus? Magni, numquam!</p>
            <div className="md:px-32 py-2">
                {mapped}
            </div>

        </div>
    )
}