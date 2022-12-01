import React from "react";
import AnimatedMotion from "../Animatedmotion";
import Hero from "./components/hero";
import Section from "./components/section";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Services from "./components/services";
import Services2 from "./components/services2";
import Services3 from "./components/services3";
import { arrowUpCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { HashLink } from "react-router-hash-link";

export default function (){

    return (
        <AnimatedMotion>
            <>
                <Hero/>
                <Services/>
                <Services2/>
                <Services3/>
                <Section/>
                <Section2/>
                <Section3/>
                <HashLink smooth to="/#home">
                    <div className="fixed right-6 bottom-10 text-seagreen text-5xl text-white border-2 border-white animate-bounce">
                        <IonIcon icon={arrowUpCircle} className="text-seagreen bg-bermuda"></IonIcon>
                    </div>
                </HashLink>
            </>    
        </AnimatedMotion>
    )
}