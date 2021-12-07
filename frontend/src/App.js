import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Log from './Components/Login/Log';
import Registration from './Components/Register/Registration';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Log/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
