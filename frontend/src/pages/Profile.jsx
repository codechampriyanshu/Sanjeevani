import React from 'react'
import Services from '../Components/Patient/Services'
import Login from '../Components/Login/Log'
export default function Profile({person,setPerson}) {
    return (
        <div>
            {person===""? <Login person={person} setPerson={setPerson}/> :  <Services person={person}/>}
           
            
        </div>
    )
}
