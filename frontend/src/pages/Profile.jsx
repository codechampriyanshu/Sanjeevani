import React from 'react'
import Services from '../Components/Patient/Services'
import Login from '../Components/Login/Log'
export default function Profile({person,setPerson}) {
    return (
        <div>
<<<<<<< HEAD
            {/* {person===""? <Login/> :  <Services person={person}/>} */}
            <Services/>
=======
            {person===""? <Login person={person} setPerson={setPerson}/> :  <Services person={person}/>}
>>>>>>> 06c5cfbe1948effaa61096418ca576e6f1109f75
           
            
        </div>
    )
}
