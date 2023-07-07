import React, {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home"
import './App.css';
import AboutUs from "./AboutUs.js"
import Shop from "./Shop.js"
import Contact from "./Contact.js"
import Cursor from "./Cursor";
import ShopDisplay from "./ShopDisplay.js"
import bubblegumblush from './images/bubblegumblush.png'


function App() {
  return (
	<BrowserRouter>
    <div className="App">
	  <Routes>
	  	<Route path='/' element={<Home/>} />
	    <Route path= '/shop' element = {<Shop/>} />
		<Route path= '/aboutus' element = {<AboutUs/>} />
	  	<Route path= '/contact' element = {<Contact/>} />
	  	<Route path="/shop/1" element = {<ShopDisplay name = "bubblegum" id="1" src = {bubblegumblush}/>} />
	  <Route path="/shop/2" element = {<ShopDisplay name = "fuschiafusion" id="2"/>} />
	  
	  </Routes>
      <Cursor />
    </div>
	</BrowserRouter>
  );
}

export default App;
