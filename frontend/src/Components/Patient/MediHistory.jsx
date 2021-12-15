import React from 'react'
import { useState } from 'react'

export const MediHistory = () => {
    const [val,setval]=useState({
        Patient:"Priyanshu Raj",
        disease:"tuberclosis",
        consultanthospital:"CMC vellore",
        consultantdoctor:"Dr Sony",
        drrepo:"patient has  severe tb since 5 years and is now in critical condition",
        medicine:"mogid-md500 Nicardia 5 "
    })
    return (
        <div className='flex flex-col items-center w-full font-serif font-bold'>
            <span className='p-4 md:pt-7'>{val.Patient}</span>
            <span className='p-4 md:pt-7'>{val.disease}</span>
            <span className='p-4 md:pt-7'>{val.consultanthospital}</span>
            <span className='p-4 md:pt-7'>{val.consultantdoctor}</span>
            <span className='p-4 md:pt-7'>{val.drrepo}</span> 
            <span className='p-4 md:pt-7'>{val.medicine}</span>
        
        </div>
    )
}
