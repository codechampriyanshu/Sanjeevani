import React, { useState } from 'react'
import {MdOutlinePeopleAlt } from "react-icons/md";
import {FaUserPlus} from "react-icons/fa";
import {FaUserMinus} from "react-icons/fa";
export default function Appointments() {
    const [show,setShow]=useState("true")
    return (
        <div className="">
            <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-center justify-center ml-3">
                <MdOutlinePeopleAlt className="w-8 h-8 mx-auto mt-2 md:mb-2 lg:mb-3"/>
                    <span className="w-8 h-8 mr-12 text-sm font-semibold text- md:text-base lg:text-lg">Scheduled Appointments</span>
            </div>
             <div className="flex flex-col items-center justify-center p-3 pt-5 mr-3">
                <FaUserPlus className="w-8 h-8 mx-auto mt-2 md:mb-2rounded-full lg:mb-3"/>
                    <span className="w-8 h-8 mr-12 text-sm font-semibold md:text-base lg:text-lg">Appointments</span>
            </div>
            </div>            
            
        </div>
    )
}
