import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {HashLink } from 'react-router-hash-link'

export default function Nav({toggle,setToggle}) {
  /* It will be used later...
   const [bg,setBg]=useState(false)
  useEffect(()=>{
    const position=document.body.scrollHeight
    const handleScroll=()=>{
      console.log(position)
      if(position>=window.innerHeight/6)
        setBg(true)  
      else
        setBg(false)
    }
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
 */
  function handleClick(){
    setToggle(!toggle)
  }
  return (
    <div className="overflow-x-none">
      <div className="fixed top-0 z-50 flex items-center justify-between w-full px-3 bg-custom-muted opacity-70 md:hidden">
        <img src="/images/logo.jpg" className="w-12 h-12 select-none " alt="logo"/>
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black top-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div className={(toggle?"-translate-x-1 ":"translate-x-72 ")+" transform duration-500 flex flex-col pt-12 fixed md:hidden top-0 right-0 h-full w-72 z-40 bg-black text-custom-muted opacity-90"}>
        <HashLink className="pt-8 pl-4 text-lg font-bold select-none" to="/#Home">Home</HashLink>
        <Link className="pt-8 pl-4 text-lg font-bold select-none" to="/profile">Tools</Link>
        <HashLink className="pt-8 pl-4 text-lg font-bold select-none" to="/#Testimonials">Testimonials</HashLink>
        <Link className="pt-8 pl-4 text-lg font-bold select-none" to="/appointments">My Account</Link>
        <Link className="pt-8 pl-4 text-lg font-bold select-none" to="/about">About</Link>
        <Link className="pt-8 pl-4 text-lg font-bold select-none" to="/help">Help</Link>
      </div>
      <div className="fixed top-0 z-50 items-center justify-between hidden w-full bg-custom-muted opacity-80 lg:px-4 md:flex">
        <div >
          <img src="/images/logo.jpg" className="select-none w-14 h-14" alt="logo"/>
        </div>
        <div className="px-2 py-2 mt-3 ">
        <HashLink className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-custom-muted hover:text-center" to="/#Home">Home</HashLink>
        <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-custom-muted hover:text-center" to="/">Tools</Link>
        <HashLink className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-custom-muted hover:text-center" to="/#Testimonials">Testimonials</HashLink>
        <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-custom-muted hover:text-center" to="/profile">My profile</Link>
        <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-custom-muted hover:text-center" to="/help">Help</Link>
        <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-custom-muted hover:text-center" to="/about">About</Link>

        </div>
      </div>
    </div>
  )
}
