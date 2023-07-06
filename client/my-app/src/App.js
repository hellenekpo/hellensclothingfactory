import logo from './logo.svg';
import React, {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home"
import './App.css';
import AboutUs from "./AboutUs.js"
import Shop from "./Shop.js"
import Contact from "./Contact.js"
import Cursor from "./Cursor";


function App() {
  return (
	<BrowserRouter>
    <div className="App">
	  <Routes>
	  	<Route path='/' element={<Home/>} />
	    <Route path= '/shop' element = {<Shop/>} />
		<Route path= '/aboutus' element = {<AboutUs/>} />
	  	<Route path= '/contact' element = {<Contact/>} />
	  </Routes>
      <Cursor />
    </div>
	</BrowserRouter>
  );
}

export default App;
