import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

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
      <>
        <Router>
          <Navbar/>
          <Sidebar/>
          <Routes>
            <Route path = '/' />
          </Routes>
        </Router>
      </>
      
      
      <header className="App-header">
        <h1>A Test React Application</h1>
        <p>Message from back-end server: {helloWorld}</p>
      </header>
      
    </div>
  );
}

export default App;
