import logo from './logo.svg';
import React, {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home"
import './App.css';


function App() {
  return (
	<BrowserRouter>
    <div className="App">
	  <Routes>
	  	<Route path='/' element={<Home/>} />
	  </Routes>
    </div>
	</BrowserRouter>
  );
}

export default App;
