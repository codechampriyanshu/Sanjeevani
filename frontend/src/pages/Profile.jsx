import React, { useEffect, useState } from 'react'
import Services from '../Components/Patient/Services'
import Login from '../Components/Login/Log'
import Doctor from '../Components/Doctor/Doctor'
export default function Profile({person,setPerson}) {
    const [userType,setUserType]=useState("")
    useEffect(()=>{
        if(sessionStorage.getItem("userType"))
            setUserType(sessionStorage.getItem("userType"))
    },[])
    return (
        <div>
            {person==="" && <Login person={person} setPerson={setPerson}/>}
            {person && userType==="patient" && <Services person={person}/>}
            {person && userType==="doctor" && <Services person={person}/>}
        </div>
    )
}