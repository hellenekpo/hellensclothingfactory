import React, {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home"
import './App.css';
import Cursor from "./Cursor";


function App() {
  return (
	<BrowserRouter>
    <div className="App">
	  <Routes>
	  	<Route path='/' element={<Home/>} />
	  </Routes>
      <Cursor />
    </div>
	</BrowserRouter>
  );
}

export default App;
