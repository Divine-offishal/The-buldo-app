import React from "react";
import TeamData from "./data/teamdata";

export default function Team (){

    const mapped = TeamData.map((item, index) => (
        <div key={index} className="p-10">
            <img src={item.image}/>
            <h1 className="text-2xl py-2">{item.name}</h1>
            <h1 className="opacity-70 py-2">{item.position}</h1>
        </div>
    ))

    return (
        <div className="my-10">
            <h1 className="opacity-70 text-center">Our team</h1>
            <h1 className="text-5xl text-center">The leadership team</h1>
            <p className="opacity-70 md:px-48 py-6 px-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum cumque, corrupti laborum a accusamus nihil. Illum a ea fuga incidunt consequuntur delectus ducimus dicta quas eos corporis. Modi omnis aliquid laboriosam illo? Similique velit fuga, perspiciatis perferendis consequatur facere harum praesentium, quis minus deleniti, itaque excepturi. Illum earum sequi ipsum maxime. Odio error consectetur obcaecati beatae deserunt mollitia enim non.</p>
            <div className="md:flex lg:pl-20 md:pl-10">
                {mapped}
            </div>
        </div>
    )
}