import React from "react";
import "./modal.css"
import { closeCircle } from "ionicons/icons"
import { IonIcon } from "@ionic/react"

export default function Modal (props){

    const showClassName = props.open? "modal display-block" : "modal display-none"

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={showClassName} onClick={()=>props.toggle(!props.open)}>
            <section className="modal-main transition-all linear duration-500 rounded-lg" onClick={(e) => e.stopPropagation()}>
                <button onClick={()=>props.toggle(!props.open)} className="relative top-0 md:left-72 left-64 md:ml-52 mt-4 text-2xl">
                    <IonIcon icon={closeCircle}/>
                </button>
                <form className="flex flex-col pl-6" onSubmit={handleSubmit}>
                    <input 
                        placeholder="Username"
                        type="text"
                        className="border-2 border-black rounded-md h-10 md:w-72 my-6 mx-auto pl-4"/>
                    <input 
                        placeholder="Password"
                        type="password"
                        className="border-2 border-black rounded-md h-10 md:w-72 my-6 mx-auto pl-4"/>
                        <button className="bg-bermuda h-auto w-20 text-white mx-auto rounded-md p-2">Login</button>
                        <p className="py-2 pl-6">Forgot password?</p>
                </form>
            </section>
        </div>
    )
}