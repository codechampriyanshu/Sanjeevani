import React from 'react'
import {  FaBookMedical} from "react-icons/fa";
import {BsBoxArrowRight } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";

export default function Services() {
    return (
        <div className="mt-10 ">
            <div>
                <BsBoxArrowRight className="w-8 h-8 text-black-800" />
            </div>

        
            <div className='flex flex-col items-center w-1/3 p-3 m-3 font-semibold border-4 '>
            <h3 className="p-3 font-bold">Services Available</h3>
            <div>
                <FaBookMedical className="text-blue-700"/>
            </div>
            <div>
                <BiLocationPlus className="text-blue-700"/>
            </div>
            <div>
            
            </div>
             
            
            <h3 className="p-6 font-bold">Emergency </h3>

        </div>
    </div>
    )
}
