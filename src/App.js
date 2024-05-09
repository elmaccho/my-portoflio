import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import OpenMenuBtn from './components/OpenMenuBtn/OpenMenuBtn';

import { useState } from 'react';
import Projects from './components/Projects/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="App">
      <OpenMenuBtn onClick={toggleNavbar} />
      <Navbar isOpen={isNavbarOpen} closeMenu={toggleNavbar}/>
      <Header/>
      <About/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
