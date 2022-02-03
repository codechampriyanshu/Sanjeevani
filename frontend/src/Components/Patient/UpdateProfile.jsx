import { useEffect, useState,useRef } from "react"
import { useNavigate } from "react-router-dom"
import {getCity, getState,getVillages} from '../Register/registerLogic'

export default function UpdateProfile({person}){
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState({})
    const [isChanged,setIsChanged]=useState(false)
    const imageRef=useRef()
    const [villages,setVillages]=useState([])
    const navigate = useNavigate()
    function handleChange(e,field){
        if(!isChanged)  setIsChanged(true)     //function to handle all the inputs, except image
        setUser({...user,[field]:e.target.value})
      }

      function handleImage() {         //function to handle the image input
        if(!isChanged)  setIsChanged(true)
        const image=imageRef.current.files[0]
        if(image && image['type'].split('/')[0] === 'image'){  //continue only if file is an image.
          let fileReader = new FileReader()
          fileReader.onload =fileLoadedEvent =>{
            let srcData = fileLoadedEvent.target.result; // <--- data: base64
            setUser({...user,photo:srcData})
          }
          fileReader.readAsDataURL(image);
        }
      }
    
    useEffect(()=>{
        fetch(`http://localhost:8080/user/${person}`,{
            method:'GET',
            credentials:'include',
        }).then(res=>res.json())
            .then(res=>{
                setUser({...res})
                setLoading(false)
            })
            .catch(e=>{window.alert("error occured: ",e)
            setLoading(false)})
    },[])

    function handleUpdate(e){
        fetch(`http://localhost:8080/update/profile/${user._id}`,{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...user})      
        })
        .then(res=>res.json())
        .then(res=>{
          if(res.status===200){
            window.alert("successfully updated")
            navigate('/profile')
          }else
          window.alert(res.message)
        })
        .catch(e=>window.alert("some error occured"+e))
    }

    return (
        <div>
            {loading && <div className='text-xl text-green-500 '>Loading...</div>}
            {!loading && user && <div className="my-4 text-center">
                <div className="flex justify-around mt-4">
                    <div className="flex flex-col">
                        <img className="w-24 h-24 rounded-lg" src={user.photo} alt={`${user.name}'s photo`}/>
                        <label htmlFor="photo" className="block mb-2 text-sm font-bold text-gray-700">Change Photo (max size:50kb)</label>
                        <input type="file" accept='image/*' ref={imageRef} name="photo" onChange={(e)=>handleImage()} id="photo" className="w-full px-3 py-2 mb-2 ml-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div>Write against the values you want to update</div>
                </div>
                <div className="w-1/2 p-4 mx-auto text-left border border-gray-400 rounded-lg"><div className="mb-2 text-sm font-bold text-gray-700">*You are: {user.userType}</div>
                    <div className="mb-2 text-sm font-bold text-gray-700">*Name: {user.name}</div>
                    <div className="mb-2 text-sm font-bold text-gray-700">*Email: {user.email}</div>
                    <div className="mb-2 text-sm font-bold text-gray-700">*Gender: {user.gender}</div>
                    <div className="mb-2 text-sm font-bold text-gray-700">age: <input type="number" name="age" id="age" autoComplete="age" placeholder={user.age} onChange={(e)=>handleChange(e,"age")} className="px-3 py-2 ml-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/></div>
                    {user.userType==="patient" && 
                    <><div className="mb-2 text-sm font-bold text-gray-700">Blood Group: {user.bloodGroup}<select id="bloodGroup" onChange={(e)=>handleChange(e,"bloodGroup")} name="bloodGroup" className="px-3 py-2 mb-2 ml-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline">
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
                    <div className="mb-2 text-sm font-bold text-gray-700">Height: <input type="text" placeholder={user.height} onChange={(e)=>handleChange(e,"height")} name="height" id="height" className="px-3 py-2 mb-2 ml-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/></div>
                    <div className="mb-2 text-sm font-bold text-gray-700">weight: <input type="text" placeholder={user.weight} onChange={(e)=>handleChange(e,"weight")} name="height" id="weight" className="px-3 py-2 mb-2 ml-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/></div>
                    </>}
                    {user.userType!=="patient" && <div className="mb-2 text-sm font-bold text-gray-700">*Licence: {user.licence}</div>}

                <label htmlFor="postal_code" className="mb-2 text-sm font-bold text-gray-700">ZIP - {user.zip}</label>
                <input type="number" placeholder="current ZIP" onChange={(e)=>handleChange(e,"zip")} autoComplete='false' onBlur={async function(){
                          setUser({...user,city:await getCity(user.zip),state:await getState(user.zip)})
                          setVillages(await getVillages(user.zip))}} name="postal_code" id="postal_code" className="px-3 py-2 mb-2 ml-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/><br/>

                <label htmlFor="street_address" className="mb-2 text-sm font-bold text-gray-700">Village/Street</label>
                <select id="street_address" onChange={(e)=>handleChange(e,"street")} name="street" className="px-3 py-2 mb-2 ml-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline">
                  <option value="" defaultChecked>Choose your village</option>
                  {
                    villages.length!==0 &&
                    villages.map(village=>(<option key={village} value={village}>{village}</option>))
                  }
                </select><br/>      

                <label htmlFor="city" className="mb-2 text-sm font-bold text-gray-700">City</label>
                <input type="text" disabled onChange={(e)=>handleChange(e,"city")} value={user.city} name="city" id="city" className="px-3 py-2 mb-2 ml-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/><br/>

                <label htmlFor="state" className="mb-2 text-sm font-bold text-gray-700">State</label>
                <input type="text" disabled onChange={(e)=>handleChange(e,"state")} value={user.state} name="state" id="state" className="px-3 py-2 mb-2 ml-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-indigo-500 focus:outline-none focus:shadow-outline"/><br/>
            </div>
                <div>you cannot change * values</div>
                {isChanged && <button type="submit" onClick={(e)=>handleUpdate(e)} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Update
            </button>}
                </div>}
        </div>
    )
}
