import React, { useState } from 'react'
import Captcha from './Captcha'
export default function Registration() {
    const [user,setUser]=useState("patient")
    return (
        <div className="mt-10 sm:mt-0">
            <div className="my-3 text-3xl font-bold text-center">
                Enter your details:
            </div>
    <div className="lg:grid lg:grid-cols-4 place-content-center md:gap-6">
   
    <div className="mt-5 md:mt-0 md:col-start-2 md:col-end-4">
      <form action="#" onSubmit={(e)=>e.preventDefault()} method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email_address" id="email_address" autoComplete="email" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
              
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" id="phone" autoComplete="phone" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
               <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create Password</label>
                <input type="password" name="password" id="password" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" name="confirm_password" id="confirm_password" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
              

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700">You are: </label>
                <select id="userType" name="userType" value={user} onChange={(e)=>setUser(e.target.value)} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="patient" defaultChecked>Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="hospital">Hospital</option>
                  <option value="pathology">Pathology</option>
                </select>
              </div>

            {user==="patient" && <div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="height" className="text-sm font-medium text-gray-700">Height</label>
                    <input type="text" name="height" id="height" className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight</label>
                    <input type="text" name="weight" id="weight" className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="bloodGroup" className="text-sm font-medium text-gray-700">Blood Group </label>
                <select id="bloodGroup" name="bloodGroup" className="px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm w- focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="O+" defaultChecked>O+</option>
                  <option value="O-">O-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                 <option value="AB+">AB+</option>
                 <option value="AB-">AB-</option>
                </select>
              </div>
                </div>}
                {user!=="patient" && <div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="licence" className="block text-sm font-medium text-gray-700">Licence</label>
                        <input type="text" name="licence" id="licence" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                </div>}
              <div className="col-span-6">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="city" id="city" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" name="state" id="state" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo</label>
                <input type="file" name="photo" id="photo" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

            </div>
          </div>
          <Captcha/>
          <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}
