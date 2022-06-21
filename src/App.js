import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';



function App() {

  return (
    
    <Router>
      <div className="App">
      <nav>
        <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
        </ul>
      </nav>
    
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>
      
      </div>

    </Router>
  );
}

export default App;
