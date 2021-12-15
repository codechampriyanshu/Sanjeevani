import React from 'react'
import Services from '../Components/Patient/Services'
import Login from '../Components/Login/Log'
export default function Profile({person}) {
    return (
        <div>
            {person===""? <Login/> :  <Services person={person}/>}
           
            
        </div>
    )
}
