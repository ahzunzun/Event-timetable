import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import MyCalendar from './components/Timetable';
import Events from './components/Events';

function App() {
  return (
    <Router>
      <div className = "app">
        <Routes>
          <Route path="/" element={<MyCalendar />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
