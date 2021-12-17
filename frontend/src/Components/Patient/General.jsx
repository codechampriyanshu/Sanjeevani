import React,{useEffect, useState} from 'react'

export default function General() {
    const [loading,setLoading]=useState(true)
    useEffect(()=>{

    },[])
    const [user,setUser]=useState({
        image:"", name:"",age:"",gender:"",email:"",blood:"",address:"",
    })
   
    return (
        <div>
        {user && <div className='flex flex-col items-center w-full font-serif font-bold'>
            {loading && <div className='text-xl text-center text-green-500'>Loading...</div>}
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
