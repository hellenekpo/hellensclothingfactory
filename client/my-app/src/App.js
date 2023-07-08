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
	  	<Route path="/shop/1" element = {<ShopDisplay name = "bubblegumblush" id="1" src = {bubblegumblush}/>} />
	  <Route path="/shop/2" element = {<ShopDisplay name = "cedarchampagne" id="2"/>} />
	  <Route path="/shop/3" element = {<ShopDisplay name = "fuchsiafusion" id="3"/>} />
	  <Route path="/shop/4" element = {<ShopDisplay name = "shamrockspring" id="4"/>} />
	  <Route path="/shop/5" element = {<ShopDisplay name = "strawberrystrudel" id="5"/>} />
	  <Route path="/shop/6" element = {<ShopDisplay name = "hickoryharvest" id="6"/>} />
	  <Route path="/shop/7" element = {<ShopDisplay name = "watermelonwonder" id="7"/>} />
	  <Route path="/shop/8" element = {<ShopDisplay name = "brunettebrunch" id="8"/>} />
	  <Route path="/shop/9" element = {<ShopDisplay name = "blanket" id="9"/>} />
	  
	  </Routes>
      <Cursor />
    </div>
	</BrowserRouter>
  );
}

export default App;
