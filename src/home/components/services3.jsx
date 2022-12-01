import React from "react";
import IMAGES from "../../Images/images";
import S3Data from "./Data/s3Data";
import S3Para from "./s3Para";

export default function Services3 (){

    const [square, setSquare] = React.useState(S3Data)

    const toggle = (id) => {
        setSquare(prevSquare => {
            const newArray = []
            for (let i = 0; i < prevSquare.length; i++) {
                const currentSquare = prevSquare[i];
                if (currentSquare.id === id) {
                    const nextArray = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newArray.push(nextArray)
                } else {
                    newArray.push(currentSquare)
                }
            }
            return newArray
        })

    }

    return (
        <div className="md:flex mt-32">
            <div className="md:w-1/2 md:mt-24 md:pl-20 md:pr-10 px-6 py-10">
                <h1 className="text-4xl">
                    We connect our customers with the best, help them keep up and stay open
                </h1>
                <div className="pt-10">
                    {square.map((item, index) => {
                        return (
                            <S3Para 
                                key={index}
                                paragraph={item.paragraph}
                                icon={item.icon}
                                on={item.on}
                                id={item.id}
                                toggle={toggle}/>
                        )
                    })}
                    
                </div>
            </div>
            <div className="md:ml-20 mx-6 relative">
                <img src={IMAGES.image5} className="w-full md:pl-14 pr-6 absolute top-0 left-0 md:z-0"/>
                <img src={IMAGES.image8} className="md:w-auto w-52 relative md:z-20 lg:mt-82 md:mt-56 md:pt-0 pt-64 lg:ml-20 md:ml-10 ml-20"/>
            </div>
        </div>
    )
}