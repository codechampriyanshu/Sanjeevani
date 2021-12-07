import React from 'react'
import Register from '../Components/Register/Register'
import Landing from "../Components/Landing/Landing"
import Login from "../Components/Login/Login"
import Navbar from "../Components/Navbar/Nav"
import Footer from "../Components/Footer/Footer"
import Testimonials from '../Components/Testimonials/Testimonials'
export default function Home() {
    return (
        <div className="bg-gray-50">
            <Navbar/>
            <Landing/>
            <Register/>
            <Testimonials/>
            <Login/>
            <Footer/>
        </div>
    )
}
