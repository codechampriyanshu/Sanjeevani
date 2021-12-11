import React,{useState} from 'react'
import Landing from "../Components/Landing/Landing"
import Navbar from "../Components/Navbar/Nav"
import Footer from "../Components/Footer/Footer"
import Testimonials from '../Components/Testimonials/Testimonials'
import {Link} from 'react-router-dom'
import Tools from '../Components/Tools/Tools'
export default function Home() {
      const [toggle,setToggle]=useState(false)
    return (
        <div onFocus={()=>{setToggle(false)}} className="bg-custom-muted">
            <Navbar toggle={toggle} setToggle={setToggle}/>
            <Landing/>
            <Tools/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
