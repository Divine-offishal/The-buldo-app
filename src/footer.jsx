import React from "react";
import { ReactComponent as Buldologo} from "./Images/svgs/Logo Shape.svg"
import { ReactComponent as Buldo} from "./Images/svgs/Boldo.svg"
import FooterData from "./Data/footerData";
import FooterForm from "./components/footerForm";

export default function Footer (){

    const mappedData = FooterData.map((item, index) => (
        <div className="md:w-1/4 lg:pl-44 md:pl-32 pl-20" key={index}>
                <h1 className="font-medium">{item.heading}</h1>
                <div className="opacity-70">
                    <p className="py-6">{item.para1}</p>
                    <p className="py-6">{item.para2}</p>
                    <p className="py-6">{item.para3}</p>
                </div>
            </div>
    ))

    return (
        <>
            <FooterForm/>
            <footer className="md:flex mt-36">
                <div className="md:w-1/4">
                    <div className="flex pl-10">
                        <Buldologo className="fill-bermuda"/>
                        <Buldo className="fill-bermuda ml-2 mt-1" />
                    </div>
                    <p className="opacity-70 py-10 pl-10">Social media validation business model canvas graphical user interface launch party creative facebook ipad twitter</p>
                    <p className="opacity-70 pl-10">All rights reserved.</p>
                </div>
                <div className="md:flex lg:ml-32 md:ml-2 ml-16 mt-6">
                    {mappedData}
                </div>
            </footer>
        </>
    )
}