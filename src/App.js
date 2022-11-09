import React from 'react';
import logo from './pics/MA_logoRGB.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Myworks from './components/Myworks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <img src={logo} className="logo" alt="logo" />
        <Navbar />
        <Routes>
          <Route
            exact path='/'
            element={<Home />}
          />
          <Route
            exact path='/aboutme'
            element={<Aboutme />}
          />
          <Route
            exact path='/myworks'
            element={<Myworks />}
          />
          <Route
            exact path='/contact'
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
