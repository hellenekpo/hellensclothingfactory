import React from 'react'
import './Home.css';
import { useState } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import { Link } from 'react-router-dom'
import welcomeimage from './images/welcomeimage.png'
import aboutusfolderopened from './images/aboutusfolderopened.png'
import homefolderclosed from './images/homefolderclosed.png'
import contactfolderopen from './images/contactfolderopen.png'
import aboutusfolderclosed from './images/aboutusfolderclosed.png'
import homefolderopened from './images/homefolderopened.png'
import contactfolderclosed from './images/contactfolderclosed.png'
import HomeNav from './HomeNav';
import Slide from './Slide.js';
import { Admin, Menu, Reload, Resize, Search } from '@rsuite/icons';
import { IconButton } from "rsuite";
import BrandSlider from './BrandSlider';
import * as AWS from 'aws-sdk';
import newlogo from './images/newlogo.png'
import config from './config.json'
import {Routes, Route, useNavigate} from 'react-router-dom';
AWS.config.update(config);
const docClient = new AWS.DynamoDB.DocumentClient();

const Container = styled.div`
`;
const PortFolio = styled.div`
`;
const Poster = styled.img`
width: 40%;
display: block;
margin-top: 70px;
  margin-right: auto;
  margin-left: auto;
`;

const ShopDisplay = (information) => {
	console.log("We are in here");
	console.log(information)
	console.log(information.name, "The name of the item");
	console.log(information.id, "The id of the item");
	console.log(information.src, "This the src");
  return (
	  <div className="hellen"
	  style={{
	  minHeight: '100vh',
        backgroundColor: (information.name == "cedarchampagne") ? '#EADDCA' : '#ffd5ef',
      }}> 
	  Hellen is here!
	  {information.name}
	  <PortFolio>
          <Poster src={information.src} alt="poster"/>
        </PortFolio>
	  {information.id}
	  <button onClick={() => {
	  axios({
		  method: 'GET',
		  url: "https://0zcy0plu37.execute-api.us-east-1.amazonaws.com/staging/backend/homeButton"
	  })
	  .then((response) => {
		  console.log("This is something",response);
		  setInformation(response.data.success);
		  
	  }).catch((error) => {
		  if (error.response) {
			  console.log(error.response)
		  	  console.log(error.response.status)
		      constoe.log(error.response.headers)
		  }
	  })
  }}>
      		Click me!
    	</button>
	<button onClick={() => {
					 fetchData('clothingitems')
					}}>
		Fetch data from tables!
		</button>
<button onClick={() => {
					 updatePurchases("clothingitems", "1", "bubblegumblush")
					}}>
		Buy this item!
		</button>
	  </div>
	  
    );
}

export default ShopDisplay;