import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutUsInfo from "./pages/AboutUsInfo/AboutUsInfo";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import Cursor from "./components/Cursor/Cursor";
import ShopDisplay from "./components/ShopDisplay/ShopDisplay";
import newlogo1 from './images/newlogo1.png';
import './App.css';


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
