import React from "react";
import IMAGES from "../../Images/images";

export default function BlogComp1 (){

    return (
        <div className="bg-bermuda h-auto text-white pb-10 pt-6" id="blog">
            <h1 className="text-center">Blog</h1>
            <h1 className="text-5xl text-center opacity-80 my-4">Thoughts and words</h1>
            <div className="md:flex md:pl-16 md:mr-4">
                <img src={IMAGES.image9} className="ml-10"/>
                <div className="md:pl-16 pl-10 pt-6">
                    <div className="flex">
                        <h1 className="font-medium">Category</h1>
                        <h1 className="opacity-70 ml-6">November 22, 2021</h1>
                    </div>
                    <div className="pt-2">
                        <h1 className="text-4xl">Pitch termsheet backing validation focus release</h1>
                        <p className="opacity-70 pt-2">Chandler Bing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}