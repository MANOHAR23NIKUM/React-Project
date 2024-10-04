import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
// import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Login from './components/Login';
import Admin from './components/Admin';
import ProtectedRout from './components/ProtectedRout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          {/* <Route path="/home" element={<Home/>} /> */}
            {/* <Route path="/about" element={<About/>} /> */}
             {/* <Route path='/contact' element={<Contact/>}/> */}
               {/* <Route path='/services' element={<Services/>}/> */}
              {/* <Route path="/add" element={<AddUser/>} /> */}
                {/* <Route path="/edit/:id" element={<EditUser/>}/> */}
                 {/* <Route path="/service-details/:id" element={<ServiceDetails/>}/> */}
                    {/* <Route path="/add" element={<SignUp/>} /> */}
          {/* <Route path="/all" element={<AllUser/>}/> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path="/home" element={<Home/>} /> 
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<ProtectedRout Component={Services}/>} />
          <Route path="/all" element={<ProtectedRout Component={AllUser}/>} />
          <Route path="/edit/:id" element={<ProtectedRout Component={EditUser}/>} />
          <Route path="/service-details/:id" element={<ProtectedRout Component={ServiceDetails}/>} />
      
        </Routes> 
    </BrowserRouter>
    <Footer/>
    </>
    
  );
}

export default App;
