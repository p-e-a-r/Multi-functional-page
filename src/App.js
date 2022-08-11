import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Newsletter from './Components/Newsletter';
import Register from './Components/Register'
import Login from './Components/Login';
import Shop from './Components/Shop';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<><Hero/><Newsletter/></>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='shop' element={<Shop/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
