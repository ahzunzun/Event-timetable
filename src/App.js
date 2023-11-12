import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Logo from "./components/images/logo-1.webp"
import MyCalendar from './components/Timetable';
import Events from './components/Events';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Logo">
          <img src={Logo} alt='Long Beach Place'></img>
        </div>
        <div className='App-Navbar'>
          <Navbar />
        </div>
        <div className='rowB'>
          <Routes>
            <Route path="/Events" element={<Events />} />
          </Routes>
          <div className='App-Timetable'>
            <MyCalendar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
