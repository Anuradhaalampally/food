import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Home from "./components/home.js";
import Menu from "./components/menu.js";
import Footer from './components/footer.js';
import About from './components/about.js';
import Contact from './components/Contact.js';
import Login from './components/login.js';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
{/*import SignUp from './components/SignUp.js'*/}
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
         <Route path='/' exact element={<Home />} />
         <Route path='/menu' exact element={<Menu />} />
         <Route path='/about' exact element={< About/>} />
         <Route path='/Contact' exact element={< Contact/>} />
         <Route path='/login' exact element={< Login />}/>
      </Routes>
      {/*<SignUp/>*/}}
      <Footer />
      </Router>
    </div>
  );
}
export default App;
