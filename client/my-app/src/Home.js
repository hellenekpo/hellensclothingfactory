import React from 'react';
import './Home.css';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import { Link } from 'react-router-dom'
import HomeNav from './HomeNav';
import Slide from './Slide.js';
import { Admin, Menu, Reload, Resize, Search } from '@rsuite/icons';
import { IconButton } from "rsuite";
import BrandSlider from './BrandSlider';
import * as AWS from 'aws-sdk';
import newlogo from './images/newlogo.png'
import welcomeimage from './images/welcomeimage.png'
import aboutusfolderopened from './images/aboutusfolderopened.png'
import shopfolderclosed from './images/shopfolderclosed.png'
import contactfolderopen from './images/contactfolderopen.png'
import newlogo1 from './images/newlogo1.png'
import signup from './images/signup.png'
import aboutusfolderclosed from './images/aboutusfolderclosed.png'
import shopfolderopened from './images/shopfolderopened.png'
import contactfolderclosed from './images/contactfolderclosed.png'
import config from './config.json'
import {Routes, Route, useNavigate} from 'react-router-dom';
AWS.config.update(config);
const docClient = new AWS.DynamoDB.DocumentClient();

const Container = styled.div`
`;

const ComingSoon = styled.img`
	width: 70%;
    height: 70%;
	display: block;
  	margin-left: auto;
    margin-top: 10%;
  	margin-right: auto;

    ${desktop({display: "block",})}
    ${tablet({display:"block"})}
    ${mobile({display: "block",})}
`;
const SignUpForUpdates = styled.img`
	width: 70%;
    height: 70%;
	display: block;
  	margin-left: auto;
  	margin-right: auto;

    ${desktop({display: "block",})}
    ${tablet({display:"block"})}
    ${mobile({display: "block",})}
`;


const Home = () => {
  return (
    <Container>
		<ComingSoon src={newlogo1} alt="comingsoon"/>
		<SignUpForUpdates src={signup} alt="comingsoon2"/>
    </Container>
  )
}

export default Home