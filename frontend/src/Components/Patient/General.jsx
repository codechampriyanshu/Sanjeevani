import React,{useEffect, useState} from 'react'

export default function General() {
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const person=sessionStorage.getItem("user")
        fetch("http://localhost:8080/user",{
            method:'POST',
            credentials:'include',
            body:JSON.stringify({id:person})
        }).then(res=>res.json())
            .then(res=>{
                setUser({...res.person})
                setLoading(false)
            })
    },[])
    const [user,setUser]=useState({})
    // image:"", name:"",age:"",gender:"",email:"",blood:"",address:"",
   
    return (
        <div>
        {loading && <div className='text-xl text-center text-green-500'>Loading...</div>}
        {user && <div className='flex flex-col items-center w-full font-serif font-bold'>
                    <img src={user.image} className='w-20 h-20 rounded-lg mt-7 '/>
                    <span className='p-4 md:pt-7'>{user.name}</span>
                    <span className='p-4 md:pt-7'>{user.age}, {user.gender}</span>
                    <span className='p-4 md:pt-7'>{user.Address}</span>
                    <span className='p-4 md:pt-7'>{user.Email}</span>
                    <span className='p-4 md:pt-7'>{user.blood}</span>
            </div>}
        </div>
    )
}
