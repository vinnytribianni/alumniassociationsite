import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar.js';
import Home from './Pages/Home';
import './CSS/App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
