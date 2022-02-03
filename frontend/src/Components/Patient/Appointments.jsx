import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {MdOutlinePeopleAlt } from "react-icons/md";
import {FaUserPlus} from "react-icons/fa";
import Scheduled  from './Scheduled';
export default function Appointments({person}) {
    const [show,setShow]=useState("Scheduled Appointments")
    return (
        <div className="">
            <div className="flex flex-row items-center justify-around my-2 md:my-4">
            <button onClick={()=>setShow("Scheduled Appointments")} className="flex flex-col items-center justify-center">
                <MdOutlinePeopleAlt className="w-8 h-8 text-blue-600 md:w-12 md:h-12"/>
                    <span className="text-sm font-hairline md:text-base">Scheduled</span>
            </button>
             <button onClick={()=>setShow("New Appointments")} className="flex flex-col items-center justify-center">
                <FaUserPlus className="w-8 h-8 text-blue-600 md:w-12 md:h-12" />
                    <span className="text-sm font-hairline md:text-base">New</span>
            </button>
            </div>
            <div>
                {show==="Scheduled Appointments" && <Scheduled setShow={setShow}/>}
                {show==="New Appointments" && 
                <div className='m-2'>
                    <div className='my-2 text-blue-500'>Which appointment would you like to take?</div>
                    <div className='flex flex-col'>
                        <Link className='p-2 my-1 text-white bg-gray-600 border border-gray-50' to="/nearby/clinics">Clinics</Link>
                        <Link className='p-2 my-1 text-white bg-gray-600 border border-gray-50' to="/nearby/labs">Pathology</Link>
                        <Link className='p-2 my-1 text-white bg-gray-600 border border-gray-50' to="/nearby/hospitals">Hospitals</Link>
                    </div>
                    <div className=''>TIPS: prefer to choose clinics in the nights instead of hospitals</div>
                </div>}

            </div>
        </div>
    )
}
