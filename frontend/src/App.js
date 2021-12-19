import './App.css';
import Home from './pages/Home';
import {useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom'
import Log from './Components/Login/Log';
import Registration from './Components/Register/Registration';
import Profile from './pages/Profile';
import Doctor from './Components/Doctor/Doctor';
import Test from './Components/Maps/Test';


function App() {

  const [person,setPerson]=useState("")   //to store identity of user
  useEffect(()=>{                         //checking whether user is logged in / cookie expired
    if(sessionStorage.getItem("user")){  
      setPerson(sessionStorage.getItem("user"))
    }else{
      fetch("http://localhost:8080/checkUser",{              
          credentials: 'include',
        })
      .then((res)=>res.json())
      .then((res)=>{
          sessionStorage.setItem("user",res.user)
          // localStorage.setItem("user",res.user)
          setPerson(res.user)
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
        <Route path='/profile' element={<Profile person={person} setPerson={setPerson}/>}></Route>

        {/*testing routes --> */}
        <Route path='/maps' element={<Test/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
