import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {HashLink } from 'react-router-hash-link'

export default function Nav({toggle,setToggle,person,setPerson}) {
  function logout(){
    fetch("http://localhost:8080/logout",{
    method:'GET',
    credentials: 'include',
  })
    .then(res=>res.json())
    .then(res=>{
      if(res.status===200)
        {setPerson("")
        sessionStorage.removeItem("user")
        window.alert(res.message)}
      }
    )
      .catch((e)=>{
        console.log(e)
        window.alert("could not log out.. try again later")
      })
  }
  function handleClick(){
    setToggle(!toggle)
  }
  return (
    <div className="overflow-x-none">
      <div className="fixed top-0 z-50 flex items-center justify-between w-full px-3 bg-gray-100 opacity-70 md:hidden">
        <img src="/images/logo.jpg" className="w-12 h-12 select-none " alt="logo"/>
        <button onClick={handleClick}><svg  xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black top-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg></button>
      </div>
      <div className={(toggle?"-translate-x-0 ":"translate-x-72 ")+" transform duration-500 flex flex-col pt-12 fixed md:hidden top-0 right-0 h-full w-72 z-40 bg-black text-white opacity-90"}>
        <HashLink className="pl-4 mt-4 text-lg font-bold border border-collapse border-gray-600 select-none" to="/#Home">Home</HashLink>
        {person!=="" && <Link className="pl-4 mt-4 text-lg font-bold border border-collapse border-gray-600 select-none" to="/dashboard">My Account</Link>}
        {person==="" ?(<>
          <Link className="pl-4 mt-4 text-lg font-bold border border-collapse border-gray-600 select-none" to="/login">Login</Link>
          <Link className="pl-4 mt-4 text-lg font-bold border border-collapse border-gray-600 select-none" to="/register">Sign up</Link>
          </>) : <Link className="pl-4 mt-4 text-lg font-bold border border-collapse border-gray-600 select-none" to="/" onClick={logout}>Log Out</Link> }
        <HashLink className="pl-4 mt-4 text-lg font-bold border border-collapse border-gray-600 select-none" to="/#Tools">Tools</HashLink>
        <HashLink className="pl-4 mt-4 text-lg font-bold border border-collapse border-gray-600 select-none" to="/#Testimonials">Testimonials</HashLink>
        <Link className="pl-4 mt-4 text-lg font-bold border border-collapse border-gray-600 select-none" to="/help">Help</Link>
      </div>
      <div className="fixed top-0 z-50 items-center justify-between hidden w-full bg-gray-100 opacity-80 lg:px-4 md:flex">
        <div >
          <img src="/images/logo.jpg" className="select-none w-14 h-14" alt="logo"/>
        </div>
        <div className="px-2 py-2 mt-3 ">
        <HashLink className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/#Home">Home</HashLink>
        <HashLink className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/#Tools">Tools</HashLink>
        <HashLink className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/#Testimonials">Testimonials</HashLink>
        {person!=="" && <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/dashboard">My Account</Link>}
        {person==="" ? (<>
          <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/login">Login</Link>
          <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/register">Sign up</Link>
          </>) : <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/" onClick={logout}>Log Out</Link>}
        <Link className="px-3 py-1 mr-4 text-base font-bold border-2 rounded-lg select-none lg:text-lg hover:bg-black hover:text-white hover:text-center" to="/help">Help</Link>
        </div>
      </div>
    </div>
  )
}
