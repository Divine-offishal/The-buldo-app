import React from "react";

export default function FooterForm (){

    return (
            <div className="bg-bermuda md:h-72 h-auto w-42 m-10 pb-10">
                <h1 className="text-4xl text-white text-center md:mx-64 pt-8">An enterprsise template to ramp up your company's website</h1>
                <div className="pt-10 md:ml-96">
                    <input 
                        type="text"
                        placeholder="Your email address"
                        className="h-12 w-64 rounded-full p-2 m-4 text-center"/>
                        <button className="h-12 w-44 rounded-full bg-seagreen text-bermuda font-bold md:ml-4 ml-14 focus:border-4 focus:border-white focus:bg-seagreen hover:bg-light">Start now</button>
                </div>
            </div>
    )
}