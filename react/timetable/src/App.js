import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Logo from "./components/images/logo-1.webp"

function App() {
  const [helloWorld, setHelloWorld] = useState(0);
  useEffect(() => {
    async function getHelloWorld() {
      const response = await fetch("http://localhost:3001/helloworld/");   
      if (!response.ok) {
        window.alert(`Error: ${response.statusText}`);
        return;
      }
      setHelloWorld(await response.text());
    }
    getHelloWorld();
    return;
  }, []);
  return (
    <div className="App">
      <div className="Logo">
        <img src={Logo} alt='Long Beach Place'></img>
      </div>
      <>
        <Router>
          <Navbar/>          
          <Routes>
            <Route path = '/' />
          </Routes>
        </Router>
      </>
      <div className='App-Sidebar'>
        <Sidebar/>
      </div>
      
      
    </div>
  );
}

export default App;
