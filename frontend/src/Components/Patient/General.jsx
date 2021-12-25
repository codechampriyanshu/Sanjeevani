import React,{useEffect, useState} from 'react'

export default function General() {
    const [loading,setLoading]=useState(true)
    const person=sessionStorage.getItem("user")
    const text=JSON.stringify({id:person})
    useEffect(()=>{
        fetch(`http://localhost:8080/user/${person}`,{
            method:'GET',
            credentials:'include',
        }).then(res=>res.json())
            .then(res=>{
                setUser({...res})
                setLoading(false)
            })
    },[])
    const [user,setUser]=useState({})
   
    return (
        <div>
        {loading && <div className='text-xl text-center text-green-500'>Loading...</div>}
        {!loading && user && <div className='flex flex-col items-center w-full font-serif'>
                    <span className='py-1 text-sm italic font-hairline md:text-lg md:py-4'>{user.userType}</span>
                    <img src={user.photo} className='mt-2 rounded-xl w-28 '/>
                    <span className='py-1 md:py-2'>{user.name}</span>
                    {user.userType==="patient" && <><span className='py-1 md:py-2'>{user.height}</span>
                    <span className='py-1 md:py-2'>Weight- {user.weight}</span>
                    <span className='py-1 md:py-2'>Blood group- {user.bloodGroup}</span></>}

                    {
                        (user.userType==="doctor" || user.userType==="patient") && <>
                        <span className='py-1 md:py-2'>{user.age} years old, {user.gender}</span>
                        </>
                    }
                     {
                        user.userType!=="patient" && <>
                        <span className='py-1 md:py-2'>Licence :- {user.licence}</span>
                        </>
                    }
                    <span className='py-1 md:py-2'>from {user.city}</span>
                    <span className='py-1 md:py-2'>Contact: {user.phone}</span>
                    <span className='py-1 md:py-2'>Mail to: {user.email}</span>
            </div>}
        </div>
    )
}
