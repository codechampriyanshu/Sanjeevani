// import react from "react"


 import React, { Component } from "react";

    export default class SignUp extends Component {
        render() {
            return (
                <form>
                    <h3>Sign Up</h3>
                    <div className="grid w-screen h-screen bg-green-100 place-items-center">

                        <label className="text-xl font-semibold text-gray-800">First name</label><input type=" text" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="First name" />
                        
                        <label className="text-xl font-semibold text-gray-800">Last name</label><input type="text" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="Last name" />
                        
                        <label className="text-xl font-semibold text-gray-800">Email address</label><input type="email" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="Enter email" />
                        
                        <label className="text-xl font-semibold text-gray-800">Password</label><input type="password" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="Enter password" />
                        <label className="text-xl font-semibold text-gray-800">ConformPassword</label><input type="Conformpassword" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="Enter password" />
                        
                <div className="container">
                <div className="row">
                    <form>
                        <h3>Photo Upload</h3>
                        <div className="form-group">
                            <input type="file" />
                        </div>
                        <div className="form-group">
                            <button className="px-2 mt-4 text-xl font-semibold border-2 border-green-400 rounded-full btn btn-primary hover:bg-blue-200 btn-block" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
                        
                
                    <button type="submit" className="px-2 mt-4 text-xl font-semibold border-2 border-red-200 rounded-full hover:bg-blue-200 btn btn-primary btn-block">Sign Up</button><br/>
                    <p className="text-right forgot-password">
                        Already registered <a href="#">sign in?</a>
                    </p></div>
                </form>
                
            );
        }
    }