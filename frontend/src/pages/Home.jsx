import React,{useState} from 'react'
import Landing from "../Components/Landing/Landing"
import Navbar from "../Components/Navbar/Nav"
import Footer from "../Components/Footer/Footer"
import Testimonials from '../Components/Testimonials/Testimonials'
import {Link} from 'react-router-dom'
export default function Home() {
      const [toggle,setToggle]=useState(false)
    return (
        <div onFocus={()=>setToggle(false)} className="bg-gray-50">
            <Navbar toggle={toggle} setToggle={setToggle}/>
            <Landing/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
