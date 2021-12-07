import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {      
            const usernameRef = React.useRef();
            const passwordRef = React.useRef();
            const handleSubmit = e => {
                e.preventDefault();
            }
            return (
                <div className="grid w-screen h-screen place-items-center">
                    <form className="grid p-4 border-4 border-gray-300 rounded-lg bnine:w-2/3 h-1/3 place-content-center sm:px-16 xs:p-8" onSubmit={handleSubmit} >
                        <div className="flex items-center justify-between">
                            <label className="text-base font-semibold text-gray-800 xs:text-lg sm:text-xl sm:mr-4" htmlFor="username">Username: </label>
                            <input className="h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg w-36 focus:bg-white" id="username" ref={usernameRef} type="text" /><br/>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-base font-semibold text-gray-800 xs:text-lg sm:text-xl sm:mr-4">Password: </label>
                            <input className="h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg w-36 focus:bg-white" id="password" ref={passwordRef} type="password" /><br/>
                        </div>
                        <div className="flex items-center xs:my-2">
                            <input type="checkbox" className="w-4 h-4 mr-1 sm:mr-3 sm:h-6 sm:w-6" id="check" />
                            <label className="sm:text-lg" htmlFor="check">Remember me</label>
                        </div>
                        <div>
                            <button className="px-2 mt-4 text-base font-semibold border border-gray-300 rounded-lg sm:text-xl xs:text-lg hover:bg-blue-200" type="submit">Log in</button>
                            <Link to="" className="block text-right sm:text-lg">Forgot Password?</Link>
                        </div>
                    </form>
                </div>
                );
}
        
        