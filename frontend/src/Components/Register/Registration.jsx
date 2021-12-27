
import React, {useEffect ,useRef, useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {handleSubmit,getCity, getState,getVillages} from './registerLogic'
export default function Registration({person,setPerson}) {
  const [villages,setVillages]=useState([])
  const [formdata,setFormdata]=useState({userType:"patient", name:"", email:"",licence:"", password:"", confirmPassword:"", height:"", weight:"", bloodGroup:"O+", age:0, gender:"male", street:"", city:"", state:"", zip:"", photo:""})
  const navigate=useNavigate()
  const imageRef=useRef();
  useEffect(()=>{
    if(person!=="")
    navigate(`/profile`)
  },[person])
  

  function handleChange(e,field){     //function to handle all the inputs, except image
      setFormdata({...formdata,[field]:e.target.value})
    }
      
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


    return (
        <div className="mt-10 sm:mt-0">
            <div className="my-3 text-3xl font-bold text-center">
                Enter your details:
            </div>
    <div className="lg:grid lg:grid-cols-4 place-content-center md:gap-6">
   
    <div className="mt-5 md:mt-0 md:col-start-2 md:col-end-4">
      <form>
        <div className="overflow-hidden shadow-md sm:rounded-md">
          <div className="px-4 py-5 bg-white-700 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email_address" className="block mb-2 text-sm font-bold text-gray-700">Email address</label>
                <input type="text" onChange={(e)=>handleChange(e,"email")} name="email_address" id="email_address" autoComplete="email" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div>
              
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone" className="block mb-2 text-sm font-bold text-gray-700">Phone</label>
                <input type="tel" onChange={(e)=>handleChange(e,"phone")} name="phone" id="phone" autoComplete="phone" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">Name</label>
                <input type="text" onChange={(e)=>handleChange(e,"name")} name="name" id="name" autoComplete="name" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div>

               <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Create Password</label>
                <input type="password" onChange={(e)=>handleChange(e,"password")} name="password" id="password" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="confirm_password" className="block mb-2 text-sm font-bold text-gray-700">Confirm Password</label>
                <input type="password" onChange={(e)=>handleChange(e,"confirmPassword")} name="confirm_password" id="confirm_password" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div>
              

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="userType" className="block mb-2 text-sm font-bold text-gray-700">You are: </label>
                <select id="userType" onChange={(e)=>handleChange(e,"userType")} name="userType" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline">
                  <option value="patient" defaultChecked>Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="hospital">Hospital</option>
                  <option value="pathology">Pathology</option>
                </select>
              </div>

            {formdata.userType==="patient" && <div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="height" className="block mb-2 text-sm font-bold text-gray-700">Height</label>
                    <input type="text" onChange={(e)=>handleChange(e,"height")} name="height" id="height" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="weight" className="block mb-2 text-sm font-bold text-gray-700">Weight</label>
                    <input type="text" onChange={(e)=>handleChange(e,"weight")} name="weight" id="weight" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="bloodGroup" className="block mb-2 text-sm font-bold text-gray-700">Blood Group </label>
                <select id="bloodGroup" onChange={(e)=>handleChange(e,"bloodGroup")} name="bloodGroup" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline">
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
                {(formdata.userType==="patient" || formdata.userType==="doctor") && 
                <>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="gender" className="block mb-2 text-sm font-bold text-gray-700">Gender</label>
                  <select id="gender" onChange={(e)=>handleChange(e,"gender")} name="gender" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline">
                    <option value="male" defaultChecked>M</option>
                    <option value="female">F</option>
                    <option value="others">others</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="age" className="block mb-2 text-sm font-bold text-gray-700">Age</label>
                <input type="number" onChange={(e)=>handleChange(e,"age")} name="age" id="age" autoComplete="age" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div></>}
                {formdata.userType!=="patient" &&
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="licence" className="block mb-2 text-sm font-bold text-gray-700">Licence</label>
                        <input type="text" onChange={(e)=>handleChange(e,"licence")} name="licence" id="licence" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
                    </div>}

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postal_code" className="block mb-2 text-sm font-bold text-gray-700">ZIP / Postal</label>
                <input type="number" onChange={(e)=>handleChange(e,"zip")} autoComplete='false' onBlur={async function(){
                          setFormdata({...formdata,city:await getCity(formdata.zip),state:await getState(formdata.zip)})
                          setVillages(await getVillages(formdata.zip))}} name="postal_code" id="postal_code" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div>

              <div className="col-span-6">
                <label htmlFor="street_address" className="block mb-2 text-sm font-bold text-gray-700">Village/Street</label>
                <select id="street_address" onChange={(e)=>handleChange(e,"street")} name="street" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline">
                  <option value="" defaultChecked>Choose your village</option>
                  {
                    villages.length!==0 &&
                    villages.map(village=>(<option key={village} value={village}>{village}</option>))
                  }
                </select>              
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block mb-2 text-sm font-bold text-gray-700">City</label>
                <input type="text" disabled onChange={(e)=>handleChange(e,"city")} value={formdata.city} name="city" id="city" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="state" className="block mb-2 text-sm font-bold text-gray-700">State</label>
                <input type="text" disabled onChange={(e)=>handleChange(e,"state")} value={formdata.state} name="state" id="state" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div>


              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="photo" className="block mb-2 text-sm font-bold text-gray-700">Upload Photo (max size:50kb)</label>
                <input type="file" accept='image/*' ref={imageRef} name="photo" onChange={(e)=>handleImage()} id="photo" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
              </div>
                
            </div>
          </div>
          <Link
                className="inline-block text-sm font-normal text-blue-500 align-baseline hover:text-blue-800"
                to="/login">
                Already registered? Log in
              </Link>
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 sm:px-6">
                {   //for rendering image-->
                  formdata.photo!=="" &&
                  <img src={formdata.photo} alt='' className='w-20 h-20'/>
                }
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
