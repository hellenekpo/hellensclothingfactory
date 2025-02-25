import React from 'react'
import * as AWS from 'aws-sdk';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Admin, Menu, Reload, Resize, Search } from '@rsuite/icons';
import { IconButton } from "rsuite";
import '../../pages/Home/Home.css';
import { useState } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';
import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../utils/responsive';
import { Link } from 'react-router-dom'
import HomeNav from '../HomeNav/HomeNav';
import Slide from '../Slide/Slide.js';
import BrandSlider from '../BrandSlider/BrandSlider';
import { changeOnHover, changeOnMouseOut } from '../../utils/utils.js';
import config from '../../config.json'
import { API } from 'aws-amplify';
import aws from '../../aws';
import helene1 from "../../images/helene.png";

AWS.config.update(config);
API.configure(aws);

const PortFolio = styled.div`
`;
const Helene = styled.img`
  max-width:29%;
	max-height:100%;
  position:fixed;
  ${tablet({maxWidth:"60%",})}
  ${mobile({maxWidth:"60%",})}
`;
const Container = styled.div`
  display: flex; 
  justify-content: center;
`;
const Poster = styled.img`
	${tablet({width: "90%", height: "90%", marginLeft:"0%",})}
	${mobile({width: "90%", height: "90%", marginLeft:"20%",})}
	width: 40%;
	display: block;
	margin-top: 150px;
	margin-right: auto;
	margin-left: auto;
`;

const ShopDisplay = (information) => {
	const navigate = useNavigate();
	console.log("We are in here");
	console.log(information)
	console.log(information.name, "The name of the item");
	console.log(information.id, "The id of the item");
	console.log(information.src, "This the src");
	async function getItems() {
		try {
			API.get('helene', '/helene', {})
				.then(result => {
					console.log(result);
					console.log("here");
				})
				.catch(err => {
					console.log(err);
				})
		}
		catch (e) {
			console.log('GET call failed: ', JSON.parse(e.response.body));
		}
	}
  return (
	  <Container>
		  <Helene src={helene1} onClick={() => {navigate('/');}}
				  onMouseOver={() => {changeOnHover("helene");}}
				  onMouseOut={() => {changeOnMouseOut("helene");}}
				  alt="logo" id="helene"/>
		  <PortFolio>
			  <Poster src={information.src} alt="poster"/>
		  </PortFolio>
		  <button onClick={async () => {
			  await getItems();
		  }}>
			  Click me!
		  </button>
	  </Container>
	  
    );
}

export default ShopDisplay;