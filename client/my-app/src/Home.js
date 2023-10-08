import React, {Component, useState} from 'react';
import './Home.css';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import * as AWS from 'aws-sdk';
import helene from './images/helene.png'
import submitlogo from './images/submitlogo.png'
import submitlogohover from './images/submitlogohover.png'
import signupfor from './images/signupfor.png'
import {useNavigate} from 'react-router-dom';
import config from './config.json'
AWS.config.update(config);
import MailchimpSubscribe from "./MailchimpSubscribe";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ComingSoon = styled.img`
  max-width:30%;
  max-height:50%;
  position:fixed;


`;
const SignUpForUpdates = styled.img`
  max-width:40%;
  max-height:20%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-95%);

  ${desktop({display: "block",})}
  ${tablet({display:"block"})}
  ${mobile({display: "block",})}
`;


const Home = () => {
  return (
    <Container>
		<ComingSoon src={helene} alt="comingsoon"/>
        <SignUpForUpdates src={signupfor} alt="signup"/>

    </Container>

  )
}

export default Home