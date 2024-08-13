import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/add" element={<AddUser/>} />
          <Route path="/all" element={<AllUser/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
