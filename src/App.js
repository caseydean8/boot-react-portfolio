import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <div className='container-fluid wrapper flex-grow-1'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
