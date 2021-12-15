import React,{useState} from 'react'

export default function General() {
    const [user,setUser]=useState({
         name:"Ashish Verma",
        age:19,
        gender:"male",
        Address:"Dubhar Ballia UP, 277401",
        Email:"ashishkv.2016@gmail.com",
        height:"6",
        weight:"50",
        blood:"O+",
        image:"/images/Care.jpg"
    })
   
    return (
        <div className='flex flex-col items-center w-full font-serif font-bold'>
            <img src={user.image} className='w-20 h-20 rounded-lg mt-7 '/>
            <span className='p-4 md:pt-7'>{user.name}</span>
            <span className='p-4 md:pt-7'>{user.age}, {user.gender}</span>
            <span className='p-4 md:pt-7'>{user.Address}</span>
            <span className='p-4 md:pt-7'>{user.Email}</span>
            <span className='p-4 md:pt-7'>{user.blood}</span>
        </div>
    )
}
