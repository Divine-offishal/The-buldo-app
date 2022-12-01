import React from "react";

export default function S3Para (props){

    return (
        <div className ={`h-14 w-21 mt-6 ${ props.on? "bg-bermuda text-white" : ""} ` } onClick={()=>props.toggle(props.id)}>
            <div className="flex">
                <span className="mt-4 ml-2">{props.icon}</span>
                <p className="pt-4 pl-2">{props.paragraph}</p>
            </div>
        </div>
        )
}

// ${ on? "bg-bermuda text-white" : ""}m