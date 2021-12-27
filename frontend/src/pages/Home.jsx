import React,{ useState} from 'react'
import Landing from "../Components/Landing/Landing"
import Navbar from "../Components/Navbar/Nav"
import Footer from "../Components/Footer/Footer"
import Testimonials from '../Components/Testimonials/Testimonials'
import Tools from '../Components/Tools/Tools'
export default function Home({person, setPerson}) {
        
      const [toggle,setToggle]=useState(false)
    return (
        <div className="bg-gray-50" id="Home">     {/* onFocus={()=>{setToggle(false)}} */}
            <Navbar toggle={toggle} setToggle={setToggle} person={person} setPerson={setPerson}/>
            <Landing/>
            <Tools/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
