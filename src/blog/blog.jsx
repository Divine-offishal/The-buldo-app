import React from "react";
import AnimatedMotion from "../Animatedmotion";
import BlogComp1 from "./components/blogComp1";
import BlogComp2 from "./components/blogComp2";
import { arrowUpCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { HashLink } from "react-router-hash-link";

export default function Blog (){

    return (
        <AnimatedMotion>
            <div>
                <BlogComp1/>
                <BlogComp2/>
            </div>
            <HashLink smooth to="/3/#blog">
                <div className="fixed right-6 bottom-10 text-seagreen text-5xl text-white border-2 border-white animate-bounce">
                    <IonIcon icon={arrowUpCircle} className="text-seagreen bg-bermuda"></IonIcon>
                </div>
            </HashLink>
        </AnimatedMotion>
    )
}