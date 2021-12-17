import React from 'react'
import {  FaBookMedical,FaSyringe ,FaUserPlus,FaAmbulance} from "react-icons/fa";
import {BsBoxArrowRight } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import {FiUsers} from "react-icons/fi";
import {SiGooglemaps} from "react-icons/si";
import {MdContacts} from "react-icons/md";
import { useState } from 'react';
import Navbar from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import General from './General';
import {MediHistory} from './MediHistory'
import  Appointments from './Appointments';
import Location from './Location';
export default function Services() {
    const [click,setclick]=useState(false)
    const [toggle,setToggle]=useState(false)
    const [active,setActive]=useState("General")
    
    function handClick(){
        setclick(!click)
    }
    return (
        <div onFocus={()=>{setToggle(false)
            setclick(false)
        }}>
            <Navbar toggle={toggle} user={"user"} setToggle={setToggle}/>
        <div className="mt-14">
            <div className='ml-4 md:hidden'>
                <BsBoxArrowRight onClick={handClick} className="w-8 h-8 text-black-800" />
            </div>
            <div className='grid grid-cols-10'>
                <div className={(click?"translate-x-1 ":"-translate-x-72 ")+`duration-500 mt-2 col-span-2 md:translate-x-0 transform p-3 m-3 font-semibold `}>
                    <div className="flex flex-col items-center justify-center">
                        <MdContacts className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3" onClick={()=>setActive("General")}/>
                        <span className='text-sm md:text-base lg:text-lg '>General</span>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-3">
                        <FaBookMedical className="w-8 h-8 mt-2 text-blue-700 md:mb-2 lg:mb-3" onClick={()=>setActive("MediHistory")}/>
                        <span className="w-8 h-8 mr-12 text-sm md:text-base lg:text-lg ">MediHistory</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-24 h-24 rounded-lg shadow-lg">
                        <FaUserPlus className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3"/>
                        <span className="pb-3 text-sm md:text-base lg:text-lg ">Appointment</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <BiLocationPlus className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3 items "/>
                        <span className="pb-3 text-sm md:text-base lg:text-lg ">Doctors Near</span>

                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <FaSyringe className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3"/>
                        <span className="pb-3 text-sm md:text-base lg:text-lg ">Pathology</span>

                    </div>
                    
                    <div className="flex flex-col items-center justify-center">
                        <SiGooglemaps className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3" onClick={()=>setActive("Location")}/>
                        <span className="pb-3 text-sm md:text-base lg:text-lg ">Location map</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <FaAmbulance className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3"/>
                        <span className='pb-3 text-sm md:text-base lg:text-lg '>Ambulance</span>
                    </div>
                    
                </div>
                <div className="col-span-8 m-8 md:col-span-7 bg-gray-50">
                {active==="General" && <General/>}
                {active==="MediHistory" && <MediHistory/>}
                {active==="Appointments" && <Appointments/>}
                {active==="Location" && <Location/>}
                </div>
            </div>
      </div>
    <Footer/>
    </div>
    )
}
