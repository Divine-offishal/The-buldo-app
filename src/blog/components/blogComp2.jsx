import React from "react";
import Comp2Data from "../data/Comp2Data";
import LatestNews from "./latestnews";

export default function BlogComp2 (){

    const mapped = Comp2Data.map((item, index) => (
        <LatestNews
            key={index}
            date={item.date}
            name={item.name}
            para={item.para}
            images={item.image}/>
    ))

    return (
        <div className="pt-20 pb-10 ml-10">
            <h1 className="text-4xl md:ml-16 pl-4 mb-10">Latest news</h1>
            <div className="md:grid grid-cols-3">
                {mapped}
            </div>
        </div>
    )
}