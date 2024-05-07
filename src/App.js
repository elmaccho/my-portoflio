import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import OpenMenuBtn from './components/OpenMenuBtn/OpenMenuBtn';
import { useState } from 'react';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="App">
      <OpenMenuBtn onClick={toggleNavbar} />
      <Navbar isOpen={isNavbarOpen} closeMenu={toggleNavbar}/>
      <Header />
    </div>
  );
}

export default App;
