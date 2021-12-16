import './App.css';
import Home from './pages/Home';
import {useState} from 'react'
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom'
import Log from './Components/Login/Log';
import Registration from './Components/Register/Registration';
import Profile from './pages/Profile';
import Doctor from './Components/Doctor/Doctor';
function App() {
  const [person,setPerson]=useState("")
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home person={person} setPerson={setPerson}/>}></Route>
        <Route path='/login' element={<Log setPerson={setPerson}/>}></Route>
        <Route path='/register' element={<Registration person={person} setPerson={setPerson}/>}></Route>
        <Route path='/profile' element={<Profile person={person}/>}></Route> 
        <Route path='/doctor' element={<Doctor person={person}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
