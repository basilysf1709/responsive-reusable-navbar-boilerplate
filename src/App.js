import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Contactus from './Pages/contactus';
import Signup from './Pages/signup';
import Services from './Pages/services';

const App = () => {

  return (
    <BrowserRouter>
     <Navbar />
     <Routes> 
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/contact-us" element={<Contactus/>} />
       <Route path="/sign-up" element={<Signup/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
