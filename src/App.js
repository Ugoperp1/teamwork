import About from './Components/About';
import Footer from './Components/Footer';
import Login from './Components/Login';
import { Route, Routes, Link } from 'react-router-dom';

// import './App.css';

function App() {
  return (
    <div>
<ul>
  <li>
<Link to="/about">About</Link>

  </li>
  <li>
    <Link to="/login">Login</Link>
  </li>
  <li>
    
  </li>
</ul>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
