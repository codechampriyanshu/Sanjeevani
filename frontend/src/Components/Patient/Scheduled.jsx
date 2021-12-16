import React, { useState } from 'react'
import {MdDelete} from "react-icons/md"
import {AiFillCaretRight,AiFillCaretDown} from 'react-icons/ai'
export default function Scheduled() {
    const [toggle,setToggle]=useState(false)
    const handleClick=(e)=>{
        setToggle(!toggle)
        console.log(e.target.parentNode.childNodes[0].nextElementSibling)
    }
    return (
        <div className="mx-1 my-5 border border-gray-500" onClick={(e)=>handleClick(e)}>
            <div className='absolute z-10 h-full'></div>
            <div className='flex flex-row items-center justify-between'>
                {!toggle && <AiFillCaretRight className='p-0 m-0'/>}
                {toggle && <AiFillCaretDown className='p-0 m-0'/>}
                <span className="">12/12/2021 2:00 pm</span>
                <span className="">{ }</span>
                <MdDelete className="w-6 h-6 text-red-600"/>
            </div>
            <div className='hidden' id="x">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium animi dolorum, eos veniam quidem officia molestiae facilis autem similique dolore incidunt magni ullam, facere iusto rem recusandae, ipsa ut aperiam.</div>
        </div>
    )
}
