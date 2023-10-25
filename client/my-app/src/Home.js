import React, {Component, useState} from 'react';
import './Home.css';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import * as AWS from 'aws-sdk';
import helene from './images/helene.png'
import dropgif3 from './images/dropgif3.gif'
import submitlogo from './images/submitlogo.png'
import submitlogohover from './images/submitlogohover.png'
import signupfor from './images/signupfor.png';
import shop1 from './images/shop1.png';
import catalog1 from './images/catalog1.png';
import about1 from './images/about1.png';
import contact1 from './images/contact1.png';
import {useNavigate} from 'react-router-dom';
import config from './config.json'
AWS.config.update(config);
import MailchimpSubscribe from "./MailchimpSubscribe";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Helene = styled.img`
  max-width:35%;
  max-height:50%;
  position:fixed;
  ${tablet({maxWidth:"60%",})}
  ${mobile({maxWidth:"60%",})}


`;
const Shop = styled.img`
  max-width:12%;
  max-height:20%;
  position:fixed;
  ${mobile({maxWidth:"40%",})}
  ${tablet({maxWidth:"40%",})}
  bottom: -1%;
  left:0%;

`;
const AboutUs = styled.img`
  max-width:22%;
  max-height:20%;
  position:fixed;
  bottom: 0%;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"10%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"10%"})}
  left:22%;
`;
const Contact = styled.img`
  max-width:18%;
  max-height:20%;
  position:fixed;
  bottom: 0%;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"19%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"19%"})}
  right:26%;
`;
const Catalog = styled.img`
  max-width:18%;
  max-height:20%;
  position:fixed;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"27%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"27%"})}
  bottom: -1.2%;
  right:0%;
`;

const Drop = styled.img`
  max-width:0%;
  max-height:100%;
  position:fixed;
  ${desktop({maxWidth:"0",  top: "22%"})}
  ${mobile({maxWidth:"80`%",  top: "12%"})}
  ${tablet({maxWidth:"70%", top: "12%"})}
 top: 30%;



`;

const Home = () => {
  return (
    <Container>
		<Helene src={helene} alt="logo"/>
		<Drop src={dropgif3} alt="drop"/>
        <Shop src={shop1} alt="signup"/>
        <AboutUs src={about1} alt="aboutus1"/>
        <Contact src={contact1} alt="contact"/>
        <Catalog src={catalog1} alt="catalog"/>

    </Container>

  )
}

export default Home