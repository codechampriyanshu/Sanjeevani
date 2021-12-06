import React from 'react'
import { Link} from 'react-router-dom'
export default function Footer() {
    return (
        <div className="py-2 bg-gray-700 text-custom-muted sm:py-4">
        <div className="flex flex-col justify-around text-xs xs:text-sm between:text-base sm:flex-row sm:text-lg lg:text-xl">
            <div className="flex flex-col mt-1 text-center">
                <h3 className="text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Quick Links</h3>
                <Link to="https://www.nhsinform.scot/search?q=cancer&locpt=&ds=&tab=inform" >Diseases info</Link>
                <Link to="">Emergency</Link>
                <Link to="">check health</Link>
            </div>
            <div className="flex flex-col mt-2 text-center">
                <h3 className="text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Quick Tools</h3>
                <Link to="#" >BMI calculator</Link>
                <Link to=""> Symptoms</Link>
                <Link to=""> Guide</Link>
            </div>
            <div className="flex-col hidden mt-2 text-center sm:flex">
                <h3 className="text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Creators</h3>
                <Link to="#">Ashish Verma</Link>
                <Link to="#">Dharmendra</Link>
                <Link to="#">Priyanshu</Link>
            </div>
            <div className="py-1 text-center sm:flex sm:flex-col ">
                <span className="mr-2 text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Feedback:</span>
                <input className="w-20 mr-2 text-black bg-gray-300 border rounded-sm md:w-32 lg:w-36 sm:w-28" id="opinion"/>
                <button className="w-20 px-1 mt-2 border border-white rounded-sm hover:bg-gray-500">Send</button>
            </div>
        </div>
        <p className="py-4 text-center select-none xs:text-base sm:text-lg md:text-xl lg:text-2xl">© 2021 Sanjeevani, Inc</p>
        </div>
    )
}
