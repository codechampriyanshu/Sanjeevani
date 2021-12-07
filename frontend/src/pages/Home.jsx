import React from 'react'
import Register from '../Components/Register/Register'
import Landing from "../Components/Landing/Landing"
import Login from "../Components/Login/Login"
import Navbar from "../Components/Navbar/Nav"
export default function Home() {
    return (
        <div>
            <Navbar/>
            <Landing/>
            <Register/>
            <Login/>
        </div>
    )
}
