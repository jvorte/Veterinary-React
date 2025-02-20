import React from 'react';


import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Appointments from './components/Appointments';
import Servises from './components/Servises';


function App() {
  return (
    <div>

      <Navbar />
      <Home />
      <About />
     
      <Servises />
      <Appointments />
      <Contact />
    </div>
  );
}

export default App;
