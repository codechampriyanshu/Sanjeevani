import React,{useEffect, useState} from 'react'
import Landing from "../Components/Landing/Landing"
import Navbar from "../Components/Navbar/Nav"
import Footer from "../Components/Footer/Footer"
import Testimonials from '../Components/Testimonials/Testimonials'
import Tools from '../Components/Tools/Tools'
export default function Home({person, setPerson}) {
        useEffect(()=>{
            /* const x=document.cookie
            .split('; ')
            .find(row => row.startsWith('jwtCookie='))
            .split('=')[1]
            console.log(x) */
            fetch("http://localhost:8080/checkUser",{              
                method:'GET',
                credentials: 'include',
                /* headers: {
                  //'Content-Type': 'application/json'
                  'Content-Type': 'application/x-www-form-urlencoded',
                }, */
              })
            .then((res)=>res.json)
            .then((res)=>{
                if(res && res.user)
                    setPerson(res.user)
            })
            .catch((e)=>console.log(e))
        },[])
        
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
