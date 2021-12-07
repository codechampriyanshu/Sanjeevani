import React from 'react'
import Landing from "../Components/Landing/Landing"
import Navbar from "../Components/Navbar/Nav"
import Footer from "../Components/Footer/Footer"
import Testimonials from '../Components/Testimonials/Testimonials'
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <div className="bg-gray-50">
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Navbar/>
            <Landing/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
