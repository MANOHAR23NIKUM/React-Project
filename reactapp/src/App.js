import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import AllUser from './components/AllUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';
import Footer from './components/Footer';
import Services from './components/Services';
import AddUser from './components/AddUser';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/all" element={<AllUser/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>
          <Route path='/user' element={<AddUser/>}/>
          <Route path='/signup' element={<SignUp/>}/>


      </Routes> 
    </BrowserRouter>
    <Footer/>
    </>
    
  );
}

export default App;
