import React from 'react'
import {  FaBookMedical,FaSyringe ,FaUserPlus,FaAmbulance} from "react-icons/fa";
import {BsBoxArrowRight } from "react-icons/bs";
import { BiLocationPlus,BiVideoPlus } from "react-icons/bi";
import {SiGooglemaps} from "react-icons/si";
import {MdContacts} from "react-icons/md";
import { useState } from 'react';
import Navbar from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import General from './General';
import {MediHistory} from './MediHistory'
import  Appointments from './Appointments';
import { Link } from 'react-router-dom';
export default function Services({person}) {
    const [click,setclick]=useState(false)
    const [toggle,setToggle]=useState(false)
    const [active,setActive]=useState("General")
    
    function handClick(){
        setclick(!click)
    }
    return (
        <div>
            <Navbar toggle={toggle} user={"user"} setToggle={setToggle}/>
        <div className="mt-14">
            <div className='ml-4 md:hidden'>
                <BsBoxArrowRight onClick={handClick} className="w-8 h-8 text-black-800" />
            </div>
            <div className='grid grid-cols-10'>         {/* FIXME: UI in mobile is not so good. Make it cover full width when sidebar is not toggled */}
                <div className={(click?"translate-x-1 ":"-translate-x-72 ")+`duration-500 mt-2 col-span-2 md:translate-x-0 transform p-3 m-3 font-semibold `}>
                    <Link to="" className="flex flex-col items-center justify-center mb-2 " onClick={()=>setActive("General")}>
                        <MdContacts className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3" />
                        <span className='text-sm md:text-base lg:text-lg '>General</span>
                    </Link>

                    <Link to="" className="flex flex-col items-center justify-center mb-2 " onClick={()=>setActive("MediHistory")}>
                        <FaBookMedical className="w-8 h-8 mt-2 text-blue-700 md:mb-2 lg:mb-3"/>
                        <span className="text-sm md:text-base lg:text-lg ">MediHistory</span>
                    </Link>
                    <Link to="" className="flex flex-col items-center justify-center mb-2" onClick={()=>setActive("Appointments")}>
                        <FaUserPlus className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3"/>
                        <span className="text-sm md:text-base lg:text-lg ">Appointment</span>
                    </Link>
                    <Link to="/nearby/clinics" className="flex flex-col items-center justify-center mb-2">
                        <BiLocationPlus className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3 items "/>
                        <Link className="text-sm md:text-base lg:text-lg " to="/nearby">Doctors Nearby</Link>

                    </Link>
                    <Link to="/nearby/labs" className="flex flex-col items-center justify-center mb-2">
                        <FaSyringe className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3"/>
                        <span className="text-sm md:text-base lg:text-lg ">Pathology</span>

                    </Link>
                    
                    <Link to="/nearby/hospitals" className="flex flex-col items-center justify-center mb-2">
                        <SiGooglemaps className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3"/>
                        <span className="text-sm md:text-base lg:text-lg">Hospitals</span>
                    </Link>
                    <Link to="/call" className="flex flex-col items-center justify-center mb-2">
                        <BiVideoPlus className="w-8 h-8 text-blue-700 md:mb-2 lg:mb-3"/>
                        <span className='text-sm md:text-base lg:text-lg '>Call a doctor</span>
                    </Link>
                    
                </div>
                <div className="col-span-8 m-8 md:col-span-7 bg-gray-50">
                {active==="General" && <General person={person}/>}
                {active==="MediHistory" && <MediHistory person={person}/>}
                {active==="Appointments" && <Appointments person={person}/>}
                </div>
            </div>
      </div>
    <Footer/>
    </div>
    )
}