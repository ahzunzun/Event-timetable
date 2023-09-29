import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Logo from "./components/images/logo-1.webp"
import MyCalendar from './components/Timetable';
import EventPopup from './components/addEventPopup.js';

function App() {
  return (
    <div className="App">
      <div className="Logo">
        <img src={Logo} alt='Long Beach Place'></img>
      </div>
      <div className='App-Navbar'>
          <Navbar/>          
          <Routes>
            <Route path = '/' />
          </Routes>
      </div>
      <div className='rowB'>
        <div className='App-Timetable'>
          <MyCalendar/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
