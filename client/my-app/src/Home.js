import React from 'react';
import './Home.css';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import * as AWS from 'aws-sdk';
import newlogo1 from './images/newlogo1.png'
import signup from './images/signup.png'
import config from './config.json'
AWS.config.update(config);
const docClient = new AWS.DynamoDB.DocumentClient();

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ComingSoon = styled.img`
  max-width:100%;
  max-height:40%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-100%);

    ${desktop({display: "block",})}
    ${tablet({display:"block"})}
    ${mobile({display: "block",})}
`;
const SignUpForUpdates = styled.img`
  max-width:100%;
  max-height:40%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-0%);

    ${desktop({display: "block",})}
    ${tablet({display:"block"})}
    ${mobile({display: "block",})}
`;


const Home = () => {
  return (
    <Container>
		<ComingSoon src={newlogo1} alt="comingsoon"/>
        <SignUpForUpdates src={signup} alt="signup"/>
    </Container>
  )
}

export default Home