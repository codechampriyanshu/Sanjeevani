import React, { useState } from 'react'
import {MdDelete} from "react-icons/md"
import {AiFillCaretRight} from 'react-icons/ai'
import { useEffect } from 'react'
export default function Scheduled({person}) {   //TODO: use props instead
    const user=sessionStorage.getItem("user")
    const [loading,setLoading]=useState(true)
    const [appointments,setAppointments]=useState([])
    const [buttonClick,setButtonClick]=useState(true)       //just to run useEffect when item is deleted..

    function deleteAppointment(id){
        const check=window.confirm("Are you sure you want to delete this appointment..\nThis is irreversible!")
        if(!check)  return
        fetch(`http://localhost:8080/patient/appointment/delete/${id}`,{
            method:'GET',           //CORS was disturbing while doing delete...
            credentials:'include',
        }).then(res=>res.json())
        .then(res=>{
            if(res.status===204){
                window.alert(res.message)
                setLoading(true)
                setButtonClick(!buttonClick)
            }
            else if(res.status===404)
                return window.alert("try again later")
        })
        .catch(e=>window.alert("some error occured: ",e))
    }
    
    useEffect(()=>{
        fetch(`http://localhost:8080/patient/appointments/get/${user}`)
        .then(res=>res.json())
        .then(res=>{
            if(res.status===404){
                window.alert("no appointments scheduled")
            }
            setAppointments(res.appointments)
        })
        .catch((e)=>window.alert("some error occured: ",e))
        setLoading(false)
    },[buttonClick])
    
    return (
        <div>
            {loading && <div className='text-xl text-center text-green-500'>Loading...</div>}
            {!loading &&(appointments.length ? 
            appointments.map((item)=>(
                <div className="mx-1 my-5 border border-gray-500" >   
                    <div className='absolute z-10 h-full'></div>
                    <div className='flex flex-row items-center justify-between'>
                        <AiFillCaretRight className='p-0 m-0'/>
                        <span className="">{item.applied.substring(0,25)}  {item.disease}</span>
                        <button onClick={()=>deleteAppointment(item._id)}><MdDelete className="w-6 h-6 text-red-600"/></button>
                    </div>
                    <div className='ml-2'>
                        <div className="">Preferred time: {item.preferredTime}</div>
                        <div>Notes: {item.comments}</div>
                        <div>appointed: {item.appointedDate===""?"Not yet":item.appointedDate}</div>
                    </div>
                </div>
            ))
            :<div className='mx-1 my-5 text-red-500 border border-gray-500'>No records found..</div>)}
        </div>
    )
}
