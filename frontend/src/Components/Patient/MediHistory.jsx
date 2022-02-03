import React from 'react'
import { useState,useEffect } from 'react'
import {AiFillFileAdd} from 'react-icons/ai'

export const MediHistory = ({person}) => {
    const id=person || sessionStorage.getItem("user")
    const [loading,setLoading]=useState(true)
    const [show,setShow]=useState("view")
    const [addNew,setAddNew]=useState({})
    const handleChange=(field,e)=>{
        setAddNew({...addNew,[field]:e.target.value})
    }
    function addHistory(e){
        e.preventDefault()
        fetch(`http://localhost:8080/patient/history/add/${id}`,{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({...addNew})
        }).then((res)=>res.json())
        .then(res=>{
            window.alert(res.message)
            setShow("view")
            setAddNew({})
        })
        .catch(e=>window.alert(e))
    }
    const [val,setVal]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:8080/patient/history/get/${id}`)
        .then((res)=>res.json())
        .then(res=>{
            if(res.status===200){
                setVal([...res.histories])
            }
        })
        .catch(e=>window.alert(e))
        setLoading(false)
    },[show])

    return (
        <div>
            {loading && <div className='text-xl text-center text-green-500'>Loading...</div>}
            {show==="view" && !loading && <button className="float-right mt-1 mr-1" onClick={(e)=>setShow("add")}><AiFillFileAdd className="w-8 h-8 text-blue-600 md:w-12 md:h-12"/></button>}
            {show==="view" && (val.length?
                <div className='flex flex-col items-center w-full'>
                    {
                        val.map((item)=>(
                            <div className='w-full px-2 my-2 border border-gray-900'>
                                <div>Suffered from {item.what}</div>
                                <div>cured - {item.treated?"yes":"no"}</div>
                                <div>taken care of by - {item.institute}</div>
                                <div>checked on - {item.appointedDate}</div>
                                <div>Notes- {item.comments}</div>
                            </div>
                        ))
                    }
                </div>:<div>No records found</div>)}
            {show==="add" &&
                <div className='flex flex-col items-center w-full font-serif font-bold'>
                    <label htmlFor='what'>What happened</label>
                    <input onChange={(e)=>handleChange("what",e)} className='bg-blue-300' id="what" type="text"></input>
                    <label htmlFor='institute'>Clinic/hospital/lab visited</label>
                    <input onChange={(e)=>handleChange("institute",e)} className='bg-blue-300' id="institute" type="text"></input>
                    <label htmlFor='treated'>Are you cured now?</label>
                    <select onChange={(e)=>handleChange("treated",e)} id="treated">
                        <option>Choose the condition</option>
                        <option value={true}>YES</option>  
                        <option value={false}>NO</option>
                    </select>
                    <label htmlFor='comments'>Any Notes</label>
                    <input onChange={(e)=>handleChange("comments",e)} className='bg-blue-300' id="comments" type="text"></input>
                    <button className='px-2 py-1 m-3 text-lg bg-green-500 rounded-lg' onClick={(e)=>addHistory(e)}>Add</button>
                </div>}
        </div>
    )
}
