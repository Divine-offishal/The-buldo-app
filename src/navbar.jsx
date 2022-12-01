import React from "react";
import ListData from "./navbar-components/list-items";
import { ReactComponent as Buldo} from "./Images/svgs/Boldo.svg"
import { ReactComponent as Buldologo} from "./Images/svgs/Logo Shape.svg"
import { NavLink, useLocation } from "react-router-dom"
import HashItems from "./navbar-components/hashlinkitems";
import { NavHashLink } from "react-router-hash-link"
import { IonIcon } from "@ionic/react"
import { closeCircle } from "ionicons/icons"
import { reorderThree } from "ionicons/icons"
import Modal from "./navbar-components/modal";

export default function Navbar (){

    let location = useLocation()
    const [open, setOpen] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)

    const mappedData = ListData.map((item, index) => (
        <NavLink key={index} to={item.path} className={({isActive})=>{
            return isActive ? "text-seagreen" : "md:text-white text-dark"
        }}>
            <li className=" md:ml-8 md:pb-0 pb-6 md:pt-0 pt-4" onClick={()=>setOpen(!open)}>
                {item.title}
            </li>
        </NavLink>
    ))

    // className="md:text-white text-dark md:ml-8 md:pb-0 pb-6 md:pt-0 pt-4"

    const mappedData2 = HashItems.map((item, index) => (
        <NavHashLink key={index} 
            smooth to={item.path}
            className={`${location.pathname}${location.hash}` === item.path? "text-seagreen" : "md:text-white text-black"}>
                <li className=" md:ml-8 md:pb-0 pb-6 md:pt-0 pt-4" onClick={()=>setOpen(!open)}>
                    {item.title}
                </li>
        </NavHashLink>
    ))

    return (
        <>
            <nav className="bg-bermuda sticky md:z-50 z-10 top-0 left-0 w-full md:pt-5 pb-2">
                <div className="md:flex pl-8 pt-5 z-50 justify-between items-center">
                    <NavLink to="/">
                    <div className="flex">
                            <Buldologo className="fill-seagreen"/>
                            <Buldo className="fill-white ml-2 mt-1" />
                    </div>
                    </NavLink>

                    <div className="absolute top-6 right-2 w-16 text-white text-3xl md:hidden" onClick={()=>setOpen(!open)}>
                        {open? <IonIcon icon={closeCircle}/> : <IonIcon icon={reorderThree}/>}
                    </div>
                    
                    <ul className={`md:flex mr-3 absolute md:static left-0 md:pr-12 md:pl-0 pl-8 md:mt-0 md:z-auto absolute z-[-1] transition-all duration-500 ease-linear md:bg-bermuda bg-light w-full md:w-auto ${open? "top-14 ": "top-[-390px]"}
                    `}>
                        {mappedData2}
                        {mappedData}
                        <li className="md:text-white md:ml-8 md:pb-0 pb-6">
                            <button className="h-8 w-20 md:bg-light bg-bermuda rounded-full md:text-bermuda text-white cursor-pointer focus:border-4 focus:border-seagreen" onClick={()=> setOpenModal(!openModal)}>Log in</button>
                            
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="z-50 h-full w-full">
                {openModal && <Modal
                                open={openModal}
                                toggle={setOpenModal}/>}
            </div>
        </>
    )
}

// className={({isActive}) => {
    //return isActive ? "navlink-icon active py-2" : "navlink-icon py-2"
//}}