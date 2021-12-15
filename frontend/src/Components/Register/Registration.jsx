
import React, { useEffect, useRef, useState } from 'react'
import React, {useEffect ,useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {handleSubmit,getCity, getState,getVillages} from './registerLogic'
export default function Registration({person,setPerson}) {
  const [villages,setVillages]=useState([])
    const [formdata,setFormdata]=useState({
      userType:"patient",
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:"",
      height:"",
      weight:"",
      bloodGroup:"O+",  
      gender:"male",
      licence:"",
      street:"",
      city:"",
      state:"",
      zip:"",
      photo:""
    })
    const [user,setUser]=useState("patient")
    const navigate=useNavigate()
    useEffect(()=>{
      if(person!=="")
      navigate(`/profile/${person}`)
    },[person])
    
    function handleChange(e,field){     //function to handle all the inputs, except image
        setFormdata({...formdata,[field]:e.target.value})
      }
      
      const [logged,setLogged]=useState("")
    const imageRef=useRef();
      const navigate=useNavigate()
    function handleImage() {         //function to handle the image input
      const image=imageRef.current.files[0]

      if(image && image['type'].split('/')[0] === 'image'){  //continue only if file is an image.
        let fileReader = new FileReader()
        fileReader.onload =fileLoadedEvent =>{
          let srcData = fileLoadedEvent.target.result; // <--- data: base64
          setFormdata({...formdata,photo:srcData})
        }
        fileReader.readAsDataURL(image);
      }
  }

  useEffect(()=>{
    if(logged!=="")
      navigate(`/${logged}`)
  },[logged])

    return (
        <div className="mt-10 sm:mt-0">
            <div className="my-3 text-3xl font-bold text-center">
                Enter your details:
            </div>
    <div className="lg:grid lg:grid-cols-4 place-content-center md:gap-6">
   
    <div className="mt-5 md:mt-0 md:col-start-2 md:col-end-4">
      <form>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-4 py-5 bg-white-700 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" onChange={(e)=>handleChange(e,"email")} name="email_address" id="email_address" autoComplete="email" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
              </div>
              
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" onChange={(e)=>handleChange(e,"phone")} name="phone" id="phone" autoComplete="phone" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" onChange={(e)=>handleChange(e,"firstName")} name="first_name" id="first_name" autoComplete="given-name" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" onChange={(e)=>handleChange(e,"lastName")} name="last_name" id="last_name" autoComplete="family-name" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
               <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create Password</label>
                <input type="password" onChange={(e)=>handleChange(e,"password")} name="password" id="password" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" onChange={(e)=>handleChange(e,"confirmPassword")} name="confirm_password" id="confirm_password" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
              

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700">You are: </label>
                <select id="userType" onChange={(e)=>handleChange(e,"userType")} name="userType" value={user} onChange={(e)=>setUser(e.target.value)} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="patient" defaultChecked>Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="hospital">Hospital</option>
                  <option value="pathology">Pathology</option>
                </select>
              </div>

            {user==="patient" && <div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="height" className="text-sm font-medium text-gray-700">Height</label>
                    <input type="text" onChange={(e)=>handleChange(e,"height")} name="height" id="height" className="border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight</label>
                    <input type="text" onChange={(e)=>handleChange(e,"weight")} name="weight" id="weight" className="mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="bloodGroup" className="text-sm font-medium text-gray-700">Blood Group </label>
                <select id="bloodGroup" onChange={(e)=>handleChange(e,"bloodGroup")} name="bloodGroup" className="px-3 py-2 mt-1 bg-white border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
                {(user==="patient" || user==="doctor") && <div>
                <label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender</label>
                <select id="gender" onChange={(e)=>handleChange(e,"gender")} name="gender" className="px-3 py-2 mt-1 bg-white border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="male" defaultChecked>M</option>
                  <option value="female">F</option>
                  <option value="others">others</option>
                </select>
                </div>}
                {user!=="patient" && <div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="licence" className="block text-sm font-medium text-gray-700">Licence</label>
                        <input type="text" onChange={(e)=>handleChange(e,"licence")} name="licence" id="licence" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                </div>}

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                <input type="number" onChange={(e)=>handleChange(e,"zip")} onBlur={async function(){
                          setFormdata({...formdata,city:await getCity(formdata.zip),state:await getState(formdata.zip)})
                          setVillages(await getVillages(formdata.zip))}} name="postal_code" id="postal_code" autoComplete="postal-code" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Village/Street</label>
                <select id="street_address" onChange={(e)=>handleChange(e,"street")} name="street" className="px-3 py-2 mt-1 bg-white border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="" defaultChecked>Choose your village</option>
                  {
                    villages.length!==0 &&
                    villages.map(village=>(<option key={village} value={village}>{village}</option>))
                  }
                </select>              
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" disabled onChange={(e)=>handleChange(e,"city")} value={formdata.city} name="city" id="city" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input type="text" disabled onChange={(e)=>handleChange(e,"state")} value={formdata.state} name="state" id="state" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>


              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo (max size:50kb)</label>
                <input type="file" accept='image/*' ref={imageRef} name="photo" onChange={(e)=>handleImage()} id="photo" className="block w-full mt-1 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
                
                {   //for rendering image-->
                  formdata.photo!=="" &&
                  <img src={formdata.photo} className='w-20 h-20'/>
                }
            </div>
          </div>
          <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <button type="submit" onClick={(e)=>handleSubmit(e,formdata,person,setPerson)} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
