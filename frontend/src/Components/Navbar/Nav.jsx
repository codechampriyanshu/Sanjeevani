import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Nav({toggle,setToggle}) {
  function handleClick(){
    setToggle(!toggle)
  }
  return (
    <div >
      <div className="md:hidden">
        <img src="/images/logo.jpg" className="absolute z-50 w-12 h-12 top-3 left-3" alt="logo"/>
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className={(toggle?"text-white ":"text-black ")+ "absolute z-50 w-8 h-8 top-3 right-3"} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div className={(toggle?"flex ":"hidden ")+"flex-col pt-12 absolute md:hidden top-0 right-0 h-full w-2/3 z-40 pr-24 bg-black text-white opacity-90"}>
        <Link className="pt-8 pl-4 text-lg font-bold" to="/">Home</Link>
        <Link className="pt-8 pl-4 text-lg font-bold" to="/profile">My profile</Link>
        <Link className="pt-4 pl-4 text-lg font-bold" to="/appointments">Appointments</Link>
        <Link className="pt-4 pl-4 text-lg font-bold" to="/consultations">Consultations</Link>
        <Link className="pt-4 pl-4 text-lg font-bold" to="/records">My Records</Link>
        <Link className="pt-4 pl-4 text-lg font-bold" to="/help">Help</Link>
        <Link className="pt-4 pl-4 text-lg font-bold" to="/about">About</Link>
      </div>
      <div className="items-center justify-between hidden lg:px-4 md:flex">
        <div >
          <img src="/images/logo.jpg" className="z-50 w-14 h-14" alt="logo"/>
        </div>
        <div className="px-2 py-2 mt-3 ">
        <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/">Home</Link>
        <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/profile">My profile</Link>
        <Link  className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/help">Help</Link>
        <Link  className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/about">About</Link>
        <Link  className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/login">Login</Link>
        <Link  className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/signup">Sign In</Link>

        
        </div>
      </div>
    </div>
  )
}
