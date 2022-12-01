import React from "react";
import IMAGES from "../../Images/images";
import { ReactComponent as Test2} from "../../Images/svgs/Ellipse 1.svg"
import { ReactComponent as Test3} from "../../Images/svgs/Ellipse 5.svg"
import { ReactComponent as Test4} from "../../Images/svgs/Group 232.svg"
import { ReactComponent as Test6} from "../../Images/svgs/noun_Pie Chart_4196192 1.svg"
import { ReactComponent as Test7} from "../../Images/svgs/Presto.svg"

export default function Services (){

    return (
            <section className="h-100" id="services">
                    <h1 className="text-center pt-10">Our services</h1>
                <h1 className="text-center text-3xl font-normal pt-3 px-6">Handshake Infographic mass market crowdfunding iteration.</h1>
                <div className="md:flex md:space-x-20 md:pl-16 pl-8 md:mx-6 md:mt-16 mt-6">
                    <div className="md:p-2 py-6 px-8 w-80">
                        <img src={IMAGES.image3}/>
                        <h1 className="font-medium">Cool feature title</h1>
                        <p>Learning curve network effects return on investment </p>
                    </div>
                    <div className="md:p-2 py-6 px-8 w-80">
                        <img src={IMAGES.image2}/>
                        <h1 className="font-medium">Even cooler feature title</h1>
                        <p>Learning curve network effects return on investment </p>
                    </div>
                    <div className="md:p-0 py-6 px-8 w-80">
                        <img src={IMAGES.image1}/>
                        <h1 className="font-medium">Cool feature title</h1>
                        <p>Learning curve network effects return on investment </p>
                    </div>
                </div>
            </section>
    )
}