import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function General({person}) {
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`http://localhost:8080/user/${person}`,{
            method:'GET',
            credentials:'include',
        }).then(res=>res.json())
            .then(res=>{
                setUser({...res})
                setLoading(false)
            })
            .catch(e=>{window.alert("error occured: ",e)
            setLoading(false)})
    },[])
    const [user,setUser]=useState({})
   
    return (
        <div>
        {loading && <div className='text-xl text-center text-green-500'>Loading...</div>}
        {!loading && user && <div className='flex flex-col items-center w-full font-serif'>
                    <img src={user.photo} className='mt-2 rounded-xl w-28 '/>
                    <span className='py-1 md:py-2'>{user.name}</span>
                    <span className='py-1 md:py-2'>{user.height}</span>
                    <span className='py-1 md:py-2'>Weight- {user.weight}</span>
                    <span className='py-1 md:py-2'>Blood group- {user.bloodGroup}</span>
                    <span className='py-1 md:py-2'>{user.age} years old, {user.gender}</span>
                    <span className='py-1 md:py-2'>from {user.city}</span>
                    <span className='py-1 md:py-2'>Email: {user.email}</span>
                    <Link className='px-2 py-1 text-white bg-green-500 rounded-lg' to={`/profile/update/`}>Update profile</Link>
            </div>}
        </div>
    )
}