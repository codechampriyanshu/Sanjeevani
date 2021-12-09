// import react from "react"


 import React, { Component } from "react";

    export default class SignUp extends Component {
        render() {
            return (
                <form>
                    <div className="w-screen h-screen flex bg-gray-100">
                        <div className="flex-1 px-8">
                            <label className="text-xl font-bold text-gray-800">Email: </label>
                            <input type="email" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="Enter email" /><br/>
                            
                            <label className="text-xl font-bold text-gray-800">Phone:</label>
                            <input type="text" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="Phone" /><br/>
                            
                            <label className="text-xl font-bold text-gray-800">Password:</label>
                            <input type="password" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="Enter password" /><br/>
                            <label className="text-xl font-bold text-gray-800">Confirm Password:</label>
                            <input type="password" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="Re-enter password" /><br/>
                            
                            <label className="text-xl font-bold text-gray-800" htmlFor="userType">You are: </label>
                            <select id="userType" className="mx-4 w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white">
                                <option defaultValue name="userType" value="patient">patient</option>
                                <option name="userType" value="doctor">doctor</option>
                                <option name="userType" value="hospital">Hospital</option>
                                <option name="userType" value="pathlab">PathLab</option></select><br/>

                            <label className="text-xl font-bold text-gray-800">First name:</label>
                            <input type=" text" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="First name" /><br/>
                            
                            <label className="text-xl font-bold text-gray-800">Last name:</label>
                            <input type="text" className="w-48 h-6 my-2 bg-gray-200 border border-gray-400 rounded-lg form-control focus:bg-white" placeholder="Last name" /><br/>
                            
                            
                        </div>
                        <div className="flex-1 px-8">
                        </div>
                </div>
                <div className="row">
                    <form>
                        <h3>Photo Upload</h3>
                        <div className="form-group">
                            <input type="file" />
                        </div>
                        <div className="form-group">
                            <button className="px-2 mt-2 text-xl font-semibold border-2 border-green-400 rounded-full btn btn-primary hover:bg-blue-200 btn-block" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
                        
                
                    <button type="submit" className="px-2 mt-4 text-xl font-semibold border-2 border-red-200 rounded-full hover:bg-blue-200 btn btn-primary btn-block">Sign Up</button><br/>
                    <p className="text-right forgot-password">
                        Already registered <a href="#">sign in?</a>
                    </p>
            </form>
                
            );
        }
    }