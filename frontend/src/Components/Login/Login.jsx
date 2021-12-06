import React from 'react'

export default function Login() {      
            const usernameRef = React.useRef();
            const passwordRef = React.useRef();
            const handleSubmit = e => {
                e.preventDefault();
            }
            return (
                <div className="grid w-screen h-screen bg-gray-100 place-items-center">
                    <form className="p-8 border-4 border-gray-300 rounded-lg" onSubmit={handleSubmit} >
                        <label className="text-xl font-semibold text-gray-800" htmlFor="username">Username: </label><input className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg focus:bg-white" id="username" ref={usernameRef} type="text" /><br/>
                        <label className="text-xl font-semibold text-gray-800" htmlFor="password">Password: </label><input className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg focus:bg-white" id="password" ref={passwordRef} type="password" /><br/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label><input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <div>
                        <button className="px-2 mt-4 text-xl font-semibold border-2 border-red-200 rounded-full hover:bg-blue-200" type="submit">Submit</button>
                        <p className="text-right text-green focus-within:border-blackforgot-password">
                         Forgot <a href="#">password?</a>
                </p>
                        </div>
                    </form>
                </div>
                );
}
        
        