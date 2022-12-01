import React from "react";


import { ReactComponent as Buldo} from "../../Images/svgs/Boldo.svg"
// import { ReactComponent as Test2} from "../../Images/svgs/Ellipse 1.svg"
// import { ReactComponent as Test3} from "../../Images/svgs/Ellipse 5.svg"
// import { ReactComponent as Test4} from "../../Images/svgs/Group 232.svg"
import { ReactComponent as Buldologo} from "../../Images/svgs/Logo Shape.svg"
// import { ReactComponent as Test6} from "../../Images/svgs/noun_Pie Chart_4196192 1.svg"
// import { ReactComponent as Test7} from "../../Images/svgs/Presto.svg"
import IMAGES from "../../Images/images";
import { HashLink} from "react-router-hash-link"


export default function Hero (){

    return (
        <div className="bg-bermuda h-100 md:flex pb-20 px-3" id="home">
            <div className="text-white md:w-6/12 pl-6 pt-16 md:pr-6 ">
                <h1 className="font-light text-5xl pb-6">Save time by building fast with Buldo Template</h1>
                <p className="sm:hidden">Funding handshake buyer business-to-business metrics ipad partnership. First mover advantage innovator success deployment non-disclosure</p>
                <div className="flex pt-6">
                    <button className="h-10 w-36 bg-seagreen rounded-full mr-3 text-bermuda font-bold focus:border-4 focus:border-white">Buy template</button>
                    <button className="h-10 w-32 border-2 border-white bg-bermuda rounded-full font-bold focus:border-4 focus:border-seagreen">Explore</button>
                </div>
            </div>

            <div className="md:ml-20 md:pl-8 lg:pl-4 pt-6 md:w-1/2">
                <img src={IMAGES.hero1} className="p-2 lg:mr-74" />
                <div className="md:flex lg:mr-64 md:mr-40 md:pr-4">
                    <img src={IMAGES.hero3} className="p-2 md:mr-6 lg:mr-10"/>
                    <img src={IMAGES.hero2} className="lg:py-2 xl:pr-20 md:p-2 xl:ml-0 lg:ml-12 p-2"/>
                </div>
            </div>
        </div>
    )
}