import React from "react";
import AnimatedMotion from "../Animatedmotion";
import Hero2 from "./components/hero";
import Numbers from "./components/numbers";
import Story from "./components/ourStory";
import Team from "./components/team";
import Values from "./components/values";
import { arrowUpCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { HashLink } from "react-router-hash-link";

export default function About() {

    return (
        <AnimatedMotion>
            <div>
                <Hero2/>
                <Story/>
                <Numbers/>
                <Team/>
                <Values/>
            </div>
            <HashLink smooth to="/2/#about">
                <div className="fixed right-6 bottom-10 text-seagreen text-5xl text-white border-2 border-white animate-bounce">
                    <IonIcon icon={arrowUpCircle} className="text-seagreen bg-bermuda"></IonIcon>
                </div>
            </HashLink>
        </AnimatedMotion>
    )
}