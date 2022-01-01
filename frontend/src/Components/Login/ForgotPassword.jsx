import { useRef,useState,useEffect } from "react"
import {Link,useNavigate} from 'react-router-dom'
export default function ForgotPassword(){
    const navigate=useNavigate()
    const [show,setShow]=useState('email')          
    const [button,setButton]=useState(false)        //for resend otp button
    const [id,setId]=useState(null)
    const [updated,setUpdated]=useState(false)      //password is updated successfully or not
    const emailRef=useRef()     
    const passwordRef=useRef()
    const confirmPasswordRef=useRef()
    const otpRef=useRef()
    useEffect(()=>{     //if password is updated, navigate to login page
        if(updated){
            navigate('/login')
        }
    },[updated])
    const handleCheck=(e)=>{            //function to request to send otp
        e.preventDefault()
        const emailId=emailRef.current.value
        if(emailId==="" || !emailId){
            return window.alert("please enter your email id.")
        }
        fetch(`http://localhost:8080/resetPassword/${emailId}`)
        .then(res=>res.json())
        .then(res=>{
            if(res.status===200){
                setShow('otp')
                window.setTimeout(()=> { setButton(false)},50000)
                setButton(true)
                e.target.innerText="Resend OTP"
            }
            else
                window.alert(res.message)
        }).catch(e=>window.alert("some error occured",e))
    }

    const handleOTP=(e)=>{      //function to match OTP
        e.preventDefault()
        fetch(`http://localhost:8080/checkOTP/${emailRef.current.value}/${otpRef.current.value}`)
        .then(res=>res.json())
        .then(res=>{
            if(res.status===200){
                setShow('update')
                setId(res.user)
            }else if(res.status===404)
                window.alert(res.message)
        })
        .catch(e=>window.alert(e))
    }

    const handleReset=(e)=>{        //function to finally update the password
        e.preventDefault()
        const password=passwordRef.current.value
        const cPassword=confirmPasswordRef.current.value
        if(password===""  || !password || password.length<6){
            return window.alert("Please enter valid password")
        }
        if(password!==cPassword){
            passwordRef.current.value=""
            confirmPasswordRef.current.value=""
            return window.alert("Passwords do not match.\nTry again")
        }
        
        //url is made like this, so that no one can type it and update the password illegally
        fetch(`http://localhost:8080/update/password/${id}/${otpRef.current.value}`,{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({password})
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.status===200){
                window.alert("password updated successfully.")
                setUpdated(true)
            }
            else
                window.alert(res.message)
        })
        .catch((e)=>window.alert(e))
    }
    return(
        <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
            <form className="px-12 pt-6 pb-8 mb-4 bg-white rounded shadow-lg">
                <div className="flex justify-center py-2 mb-4 text-2xl text-gray-800 border-b-2">Reset password</div>
                {show!=='update' && <><div className="mb-4">
                    <label className="block mb-2 text-sm font-normal text-gray-700" htmlFor="email" >Email</label>
                    <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="email" type="email" ref={emailRef} required autoFocus placeholder="Email" />
                </div>
                <button className={(button?"hidden ":" ")+"inline-block px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700"} type='submit' onClick={(e)=>handleCheck(e)}>Send OTP</button></>}
                <span className={(button?"":"hidden ")+"text-gray-500 text-sm"}>Resend will be enabled after sometime</span>
                <div className={(show==="otp"?" ":"hidden ")}>
                    Enter the otp sent to your registered Email
                    <input type="text" className="px-3 py-2 mr-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" ref={otpRef} id="otp" />
                    <button className="inline-block px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700" type='submit' onClick={(e)=>handleOTP(e)}>OK</button>

                </div>
                {show==='update' &&  <><div className="mb-4">
                        <label className="block mb-2 text-sm font-normal text-gray-700" htmlFor="password">Enter new password</label>
                        <input type='password' className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" ref={passwordRef} required id="password"/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-normal text-gray-700" htmlFor="confirmPassword">Retype new password</label>
                        <input type='password' className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" ref={confirmPasswordRef} required id="confirmPassword"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="inline-block px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700" type='submit' onClick={(e)=>handleReset(e)}>Reset</button>
                        <Link className="inline-block text-sm font-normal text-blue-500 align-baseline hover:text-blue-800" to="/register">Register</Link>
                    </div></>}
            </form>
        </div>
        </div>
    )
}