import './App.css';
import Home from './pages/Home';
import {useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Log from './Components/Login/Log';
import Registration from './Components/Register/Registration';
import Maps from './Components/Maps/Maps';
import Help from './pages/Help';
import NewAppointment from './Components/Patient/NewAppointment';
import ForgotPassword from './Components/Login/ForgotPassword'
import UpdateProfile from './Components/Patient/UpdateProfile';
import Services from './Components/Patient/Services';
import Dashboard from './Components/Doctor/Dashboard';
import PatientAppointments from './Components/Patient/Appointments';
import DoctorAppointments from './Components/Doctor/Appointments'
import Call from './Components/Calling/Call'
import Video from './Components/Calling/Video';

function App() {

  const [person,setPerson]=useState("")   //to store identity of user
  const [userType,setUserType]=useState("");
  useEffect(()=>{                         //checking whether user is logged in / cookie expired
    if(sessionStorage.getItem("user") && sessionStorage.getItem("userType")){  
      setPerson(sessionStorage.getItem("user"))
      setUserType(sessionStorage.getItem("userType"))
    }else{
      fetch("http://localhost:8080/checkUser",{              
          credentials: 'include',
        })
      .then((res)=>res.json())
      .then((res)=>{
          if(res.status===200){
            console.log(res)
            sessionStorage.setItem("user",res.user)
            sessionStorage.setItem("userType",res.userType)
            setPerson(res.user)
            setUserType(res.userType)
          }
      })
      .catch((e)=>console.log(e))
    }
},[])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home person={person} setPerson={setPerson}/>}></Route>
        <Route path='/login' element={<Log person={person} setPerson={setPerson}/>}></Route>
        <Route path='/register' element={<Registration person={person} setPerson={setPerson}/>}></Route>
        <Route path='/dashboard' element={person!==""? (userType==="patient"?<Services person={person}/>:<Dashboard person={person}/>) : <Log person={person} setPerson={setPerson}/>}></Route>
        <Route path='/appointment' element={person!==""? (userType==="patient"?<PatientAppointments person={person}/>:<DoctorAppointments person={person}/>) : <Log person={person} setPerson={setPerson}/>}></Route>
        <Route path="/nearby/:id" element={<Maps/>}></Route>
        <Route path="/help" element={<Help/>}></Route>
        <Route path="/patient/appointment/new/:id" element={<NewAppointment person={person}/>}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
        <Route path="/profile/update" element={person!==""? <UpdateProfile person={person}/> : <Log person={person} setPerson={setPerson}/>}></Route>
        <Route path="/call" element={person!==""? <Call person={person}/> : <Log person={person} setPerson={setPerson}/>}></Route>
        <Route path="/call/video" element={person!==""? <Video person={person}/> : <Log person={person} setPerson={setPerson}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;