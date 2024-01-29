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
	  </Routes>
      <Cursor />
    </div>
	</BrowserRouter>
  );
}

export default App;
