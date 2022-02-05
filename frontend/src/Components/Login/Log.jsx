import React, { useRef,useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {handleSubmit} from './LoginLogic'
export default function Log({person,setPerson}) {
  const emailRef=useRef()
  const passwordRef=useRef()  
  const navigate=useNavigate()
    useEffect(()=>{
      if(person!=="")
      navigate(`/dashboard`)
    },[person])
    return (
    <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <form className="px-12 pt-6 pb-8 mb-4 bg-white rounded shadow-lg">
            <div className="flex justify-center py-2 mb-4 text-2xl text-gray-800 border-b-2">Login</div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-normal text-gray-700" htmlFor="email" >Email</label>
              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="email" type="email" ref={emailRef} required autoFocus placeholder="Email" />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-normal text-gray-700" htmlFor="password" > Password </label>
              <input type="password" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Password" ref={passwordRef} name="password" required />
            </div>
            <div className="flex items-center justify-between">
              <button className="inline-block px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700" onClick={(e)=>handleSubmit(e,emailRef.current.value,passwordRef.current.value,person,setPerson)} type="submit">Sign In</button>
              <Link className="inline-block text-sm font-normal text-blue-500 align-baseline hover:text-blue-800" to="/register"> New user? sign up </Link>
              <Link className="inline-block text-sm font-normal text-blue-500 align-baseline hover:text-blue-800" to="/forgotPassword">Forgot password</Link>
            </div>
          </form>
        </div>
      </div>
    )
}