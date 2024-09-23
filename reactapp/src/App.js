import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
// import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     {/* <NavigationBar/> */}
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/add" element={<AddUser/>} />
          <Route path="/add" element={<SignUp/>} />
          <Route path="/all" element={<AllUser/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>
          <Route path="/service-details/:id" element={<ServiceDetails/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/admin' element={<Admin/>}/>
      </Routes> 
    </BrowserRouter>
    <Footer/>
    </>
    
  );
}

export default App;
