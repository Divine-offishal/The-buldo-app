import React from "react";
import AnimatedMotion from "../../Animatedmotion";
import SectionData from "./Data/secData";

export default function Section (){

    const mapData = SectionData.map((item, index) => (
        <div key={index} className="h-auto lg:w-64 md:w-64 w-42 bg-light m-6 xl:ml-20 lg:pr-20 p-6 rounded">
            <p className="lg:text-3xl text-2xl">"{item.text}"</p>
            <div className="flex">
                <img src={item.image} />
                <p className="lg:ml-2 ml-6 mt-4">{item.name}</p>
            </div>
        </div>
    ))

    return (
            <div className="bg-bermuda w-full h-100 mt-20 pb-6" id="product">
                <div className="md:w-2/3 px-6">
                    <h1 className="text-5xl text-white md:ml-20 ml-6 pt-16 pb-10">
                        An enterprise template to ramp up your company's website
                    </h1>
                </div>
                <div className="md:flex lg:mx-20 md:ml-10">
                    {mapData}
                </div>
            </div>
    )
}