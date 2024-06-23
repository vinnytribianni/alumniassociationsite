import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar.js';
import Home from './Pages/Home';
import History from './Pages/History'
import Leadership from './Pages/Leadership'
import Events from './Pages/Events'
import Support from './Pages/Support'
import Footer from './Components/Footer.js'
import './CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <title>Alpha Rho Alumni Association</title>
        </Helmet>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
