import React from "react";
import IMAGES from "../../Images/images";
import { ReactComponent as Check } from "../../Images/svgs/Group 210.svg"

export default function Section2 (){

    return (
        <div>
            <img src={IMAGES.image6} className="pt-24 md:pl-24 px-6"/>
            <div className="md:flex">
                <div className="md:w-1/2 pt-10 md:pl-24 px-6">
                    <h1 className="text-4xl">We connect our customers with the best and help them keep-up and stay open</h1>
                </div>
                <div className="md:w-1/2 pt-10 md:pl-10 px-6 font-medium">
                    <div className="flex pb-2">
                        <h1 className="pr-32">
                            We connect our customers with the best? 
                        </h1>
                        <span>
                            <Check />
                        </span>
                    </div>
                    <hr width="70%"/>
                    <div className="flex py-3">
                        <h1 className="pr-24 mr-2">
                            Android research and development rockstar? 
                        </h1>
                        <span>
                            <Check />
                        </span>
                    </div>
                    <hr width="70%"/>
                </div>
            </div>
        </div>
    )
}