import React from 'react'
import Register from '../Components/Register/Register'
import Landing from "../Components/Landing/Landing"
import Login from "../Components/Login/Login"
import Footer from "../Components/Footer/Footer"
export default function Home() {
    return (
        <div>
            <Landing/>
            <Register/>
            <Login/>
            <Footer/>
        </div>
    )
}
