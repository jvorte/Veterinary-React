import React from 'react';


import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Appointments from './components/Appointments';
import Servises from './components/Servises';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
         <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>


    <Navbar />
      <Home />
      <About />
     
      <Servises />
      <Appointments />
      <Contact />


 </BrowserRouter>  
    </div>
  );
}

export default App;
