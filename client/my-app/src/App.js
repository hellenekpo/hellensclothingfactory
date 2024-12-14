import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutUsInfo from "./pages/AboutUsInfo/AboutUsInfo";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import Cursor from "./components/Cursor/Cursor";
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
	  </Routes>
      <Cursor />
    </div>
	</BrowserRouter>
  );
}

export default App;
