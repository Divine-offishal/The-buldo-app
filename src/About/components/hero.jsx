import React from "react";
import IMAGES from "../../Images/images";

export default function Hero2 (){

    return (
        <div className="bg-bermuda h-100 pb-20 lg:px-3 md:px-0 px-3 text-white text-center" id="about">
            <h1>About</h1>
            <h1 className="text-4xl lg:px-96 md:px-20 py-6">We love to make great things, things that matter</h1>
            
            <div className="relative z-0">
            <div className="md:flex absolute z-10 xl:pl-32 md:ml-10 md:mr-10 md:pl-10 px-10">
                <div className="md:mr-2">
                    <img src={IMAGES.image9} className="lg:w-80 md:w-72 lg:h-72 md:h-56 py-2 xl:px-6"/>
                    <img src={IMAGES.image9} className="lg:w-80 md:w-72 lg:h-72 md:h-56 py-2 xl:px-6"/>
                </div>
                <img src={IMAGES.image5} />
                <div className="md:ml-2">
                    <img src={IMAGES.image3} className="lg:w-80 md:w-72 lg:h-72 md:h-56 py-2 xl:px-6"/>
                    <img src={IMAGES.image3} className="lg:w-80 md:w-72 lg:h-72 md:h-56 py-2 xl:px-6"/>
                </div>
            </div>

            </div>

            
            
        </div>
    )
}