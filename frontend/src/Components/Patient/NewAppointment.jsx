import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { newAppoint } from './newAppointmentLogic'

export default function NewAppointment({person}) {      //TODO: use props instead
    const params=useParams()
    const id=params.id
    const [appoint,setAppoint]=useState({type:"hospital",testName:"",institute:id,preferredDate:"",preferredTime:"10:10",disease:"",comments:""})
    useEffect(()=>{
            switch(id[0]){
            case 'c':
                setAppoint({...appoint,type:"clinic"})
                break;
            case 'p':
                setAppoint({...appoint,type:"pathology"})
                break;
            default:                        //default will be hospital
            case 'h':
                setAppoint({...appoint,type:"hospital"})
        }
    },[])
    
    function handleChange(field,e){
        setAppoint({...appoint,[field]:e.target.value})
    }
    return (
        <div className='ml-2'>
            
            {(appoint.type==="clinic" || appoint.type==="hospital") && 
            (<div>
                <label htmlFor="pdisease">Disease : </label>
                <input type="text" name="pdisease" id="pdisease" onChange={(e)=>handleChange("disease",e)} className='m-2 bg-blue-100 '></input><br/>
                <label htmlFor="pdate">Preferred date: </label>
                <TextField className="mx-4 " id="pdate" onChange={(e)=>handleChange("preferredDate",e)} type="Date" /><br/>
                <label htmlFor="ptime">Preferred time</label>
                <TextField className="mx-4" id="ptime" onChange={(e)=>handleChange("preferredTime",e)} defaultValue="10:10" type="time"/><br/>
                <label htmlFor='comments'>Any Notes?</label>
                <input type="text" className='bg-blue-300' onChange={(e)=>handleChange("comments",e)}></input>
            </div>)}
            {
                appoint.type==="pathology" && 
                (<div>
                    <label htmlFor="ptestname">Test name :  </label>
                    <input type="text" name="ptestname" id="ptestname" onChange={(e)=>handleChange("testName",e)} className='m-2 bg-blue-100'></input><br/>
                    <label htmlFor="pdate">Preferred date: </label>
                    <TextField className="mx-4 " id="pdate" onChange={(e)=>handleChange("preferredDate",e)} type="Date" /><br/>
                    <label htmlFor="ptime">Preferred time</label>
                    <TextField className="mx-4" id="ptime" onChange={(e)=>handleChange("preferredTime",e)} defaultValue="10:10" type="time"/><br/>
                    <label htmlFor='comments'>Any Notes?</label>
                    <input type="text" className='bg-blue-300' onChange={(e)=>handleChange("comments",e)}></input>
                    </div>)
            }
            <div className='flex flex-col justify-around my-3 md:flex-row'>
                <button className='px-2 py-1 text-lg font-semibold text-white bg-green-500 rounded-md' onClick={()=>newAppoint(appoint,setAppoint)}>Book</button>
                <Link className='px-2 py-1 text-lg font-semibold text-white bg-green-500 rounded-md' to="/dashboard">Go to profile</Link>
            </div>
        </div>
    )
}
