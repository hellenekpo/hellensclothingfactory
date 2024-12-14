import React, {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import AboutUsInfo from "./AboutUsInfo";
import Shop from "./Shop";
import Contact from "./Contact";
import Catalog from "./Catalog";
import './App.css';
import Cursor from "./Cursor";
import ShopDisplay from "./ShopDisplay";
import newlogo1 from './images/newlogo1.png'


function App() {
  return (
	<BrowserRouter>
    <div className="App">
	  <Routes>
	  	<Route path='/' element={<Home/>} />
	  	<Route path='/shop' element={<Shop/>} />
	  	<Route path='/contact' element={<Contact/>} />
	  	<Route path='/catalog' element={<Catalog/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/aboutUsInfo' element={<AboutUsInfo/>} />
		<Route path="/shop/1" element = {<ShopDisplay name = "bubblegumblush" id="1" src = {newlogo1}/>} />
		<Route path="/shop/2" element = {<ShopDisplay name = "fuchsiafusion" id="2" src = {newlogo1}/>} />
		<Route path="/shop/3" element = {<ShopDisplay name = "strawberrysorbet" id="3" src = {newlogo1}/>} />
	  </Routes>
      <Cursor />
    </div>
	</BrowserRouter>
  );
}

export default App;
