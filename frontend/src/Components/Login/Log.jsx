import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
export default function Log() {
  const emailRef=useRef()
  const passwordRef=useRef()
  function handleSubmit(e){
    e.preventDefault()
    const text=JSON.stringify({
      email:emailRef.current.value,
      password:passwordRef.current.value,
    })
    console.log(emailRef.current.value,passwordRef.current.value)
    fetch("http://localhost:8000/login",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:text,
    }).then(()=>console.log("logged in"))
    .catch((e)=>console.log(e.message))
  }
    return (
    <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <form className="px-12 pt-6 pb-8 mb-4 bg-white rounded shadow-lg">
            <div
              className="flex justify-center py-2 mb-4 text-2xl text-gray-800 border-b-2"
            >
            Login
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-normal text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                ref={emailRef}
                required
                autoFocus
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-normal text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Password"
                ref={passwordRef}
                name="password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="inline-block px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700" onClick={handleSubmit} type="submit">Sign In</button>
              <Link
                className="inline-block text-sm font-normal text-blue-500 align-baseline hover:text-blue-800"
                to="#"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
}


