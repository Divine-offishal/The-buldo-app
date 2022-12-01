import React from "react";

export default function LatestNews (props){

    return (
        <div className="xl:ml-20 xl:w-72 mt-6 mx-4">
            <img src={props.images}/>
            <div className="flex py-2">
                <h1 className="font-bold">Category</h1>
                <h1 className="opacity-70 pl-4">{props.date}</h1>
            </div>
            <p className="font-medium">{props.para}</p>
            <h1 className="opacity-80">{props.name}</h1>
        </div>
    )
}