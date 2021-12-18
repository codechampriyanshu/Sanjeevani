import React,{useEffect, useState} from 'react'

export default function General() {
    const [loading,setLoading]=useState(true)
    const person=sessionStorage.getItem("user")
    console.log(person)
    const text=JSON.stringify({id:person})
    console.log(text)
    useEffect(()=>{
        fetch(`http://localhost:8080/user/${person}`,{
            method:'GET',
            credentials:'include',
        }).then(res=>res.json())
            .then(res=>{
                console.log(res)
                setUser({...res})
                setLoading(false)
            })
    },[])
    const [user,setUser]=useState({})
   
    return (
        <div>
        {loading && <div className='text-xl text-center text-green-500'>Loading...</div>}
        {!loading && user && <div className='flex flex-col items-center w-full font-serif'>
                    <span className='p-2 md:p-4 font-bold'>{user.userType}</span>
                    <img src={user.photo} className='w-24 rounded-lg mt-7 '/>
                    <span className='p-2 md:p-4'>{user.name}</span>
                    <span className='p-2 md:p-4'>{user.age}, {user.gender}</span>
                    <span className='p-2 md:p-4'>{user.city}</span>
                    <span className='p-2 md:p-4'>{user.email}</span>
                    <span className='p-2 md:p-4'>{user.bloodGroup}</span>
            </div>}
        </div>
    )
}
