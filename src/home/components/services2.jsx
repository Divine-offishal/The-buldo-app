import React from "react";
import IMAGES from "../../Images/images";
import { ReactComponent as Circle} from "../../Images/svgs/Ellipse 1.svg"
import { ReactComponent as Test12} from "../../Images/svgs/Ellipse 5.svg"
import { ReactComponent as Test4} from "../../Images/svgs/Group 232.svg"
import { ReactComponent as Test6} from "../../Images/svgs/noun_Pie Chart_4196192 1.svg"
import { ReactComponent as Test7} from "../../Images/svgs/Presto.svg"
import S2Data from "./Data/s2Data";



export default function Services2 (){

    const mappedData = S2Data.map((item, index) => (
        <div key={index} className="flex py-2 mt-6">
            <span>{item.icon}</span>
            <p className="ml-4">{item.text}</p>
        </div>
    ))

    return (
        <div className="md:flex mt-32">
            <div className="md:w-1/2 mt-10 ml-8 relative">
                <img src={IMAGES.image4} className="w-full md:pl-14 pr-6 absolute top-0 left-0 md:z-0"/>
                <img src={IMAGES.image7} className="md:w-auto w-52 relative md:z-20 lg:mt-96 md:mt-56 md:pt-0 pt-64 lg:ml-32 md:ml-10 ml-20"/>
            </div>
            <div className="mt-32 md:w-1/2 md:px-20 px-6">
                <h1 className="text-3xl">We connect our customers with the best, and help them keep up and stay open</h1>
                {mappedData}

                <button className="bg-bermuda h-10 w-40 rounded-full text-white focus:border-4 focus:border-seagreen mt-6">Start now</button>
            </div>
        </div>
    )
}

// relative top-0 left-0

// top-20 md:right-10 right-20 opacity-0 hover:opacity-100 transition-all cubic duration-700