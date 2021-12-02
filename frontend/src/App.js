import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from '../src/pages/Home';
import About from '../src/pages/About';

function App() {
  return (
    <BrowserRouter>
    <Link to='/about'>About</Link>
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path='/' element={<Home/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
