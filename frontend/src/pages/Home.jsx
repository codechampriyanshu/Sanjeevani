import React,{useEffect, useState} from 'react'
import Landing from "../Components/Landing/Landing"
import Navbar from "../Components/Navbar/Nav"
import Footer from "../Components/Footer/Footer"
import Testimonials from '../Components/Testimonials/Testimonials'
import Tools from '../Components/Tools/Tools'
export default function Home({person, setPerson}) {
        
        
      const [toggle,setToggle]=useState(false)
    return (
        <div onFocus={()=>{setToggle(false)}} className="bg-custom-muted" id="Home">
            <Navbar toggle={toggle} setToggle={setToggle} person={person}/>
            <Landing/>
            <Tools/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
