import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import { Link } from 'react-router-dom'
import HomeNav from './HomeNav';
import Slide from './Slide.js';
import BrandSlider from './BrandSlider';

const Container = styled.div`
	background-color: #fcecf8
`;
const PortFolio= styled.div`
    width: 100%;
    margin-bottom: 6%;
    margin-top: 80px;
`;
const Poster = styled.img`
    width: 50%;
    height: 100%;
	border-top: 10px solid #fc20a5;
    border-bottom: 10px solid #fc20a5;
	border-left: 10px solid #fc20a5;
	border-right: 10px solid #fc20a5;
    ${desktop({display:"none"})}
    ${tablet({display:"none"})}
    ${mobile({display: "none",})}
`;

const Poster1 = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
   width: 50%;
    height: 100%;
    display: none;
border-top: 10px solid #fc20a5;
    border-bottom: 10px solid #fc20a5;
	border-left: 10px solid #fc20a5;
	border-right: 10px solid #fc20a5;
    ${desktop({display:"none"})}
    ${desktop({display: "block",})}
    ${tablet({display:"none"})}
    ${mobile({display: "none",})}
`;

const Poster2 = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
   width: 50%;
   height: 100%;
   display: none;
border-top: 10px solid #fc20a5;
    border-bottom: 10px solid #fc20a5;
	border-left: 10px solid #fc20a5;
	border-right: 10px solid #fc20a5;
    ${desktop({display:"none"})}
   ${tablet({display:"block"})}
    ${mobile({display: "none",})}
`;
const Poster3 = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
   height: 100%;
   display: none;
	border-top: 10px solid #fc20a5;
    border-bottom: 10px solid #fc20a5;
	border-left: 10px solid #fc20a5;
	border-right: 10px solid #fc20a5;
   ${mobile({display: "block",})}
`;

const InnerContainer= styled.div`
  margin-top: 6%;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 992px){display:block; background-color:#f5f4f2}
`;
const Offers= styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 50px 0;
  position: relative;
  flex: 0 0 67% ;
  overflow: initial;
  background-color: #f5f4f2;
  max-width: 100%;
  ${tablet({padding:"0px"})}
  ${mobile({padding:"0px"})}
`;
const List= styled.ul`
  display: flex;
  padding: 30px 0;
  //position: absolute;
  max-width: 900px;
  //right: 0;
  overflow-x: auto;
  list-style: none;
  @media only screen and (max-width: 992px){max-width: none;}
`;
const ListItem = styled.li`
   list-style: none;
   padding: 0 30px;
   flex: 0 1 33.3%;
   @media only screen and (max-width: 992px){padding:20px; flex-basis: 250px; flex-grow: 0; flex-shrink: 0 }
`;
const Num= styled.h2`
  font-size: 110px;
  font-weight: bold;
`;
const ListTitle = styled.h4`
   font-size: 32px;
   line-height: 0.9;
   margin-bottom: 20px;
`;
const ListPara = styled.p`
   font-size: 14px;
   line-height: 24px;
   font-weight: 500;
   margin-bottom: 20px;
`;
const SignupBox= styled.div`
    flex: 1 0 33%;
    border: 1px solid black;
    border-right: none;
    background-color: #cafc4f;
    @media only screen and (max-width: 992px){border-top: none;}
`;
const InnerBox = styled.div`
  height: 100%;
  padding: 132px 50px 182px;
  flex-shrink: 0;
  flex-grow: 1;
  border-right: 1px solid transparent;
  transition: background-color 0.5s ease, border-right-color 0.5s ease;
  &:hover{
     background-color: #c9bffb;
     border-right-color: black;
  }
  @media only screen and (max-width: 992px){padding: 80px 30px 80px;}
`;
const BoxPara= styled.p`
  font-size: 45px;
  margin-bottom: 25px;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -1px;
  color: black;
  font-weight: bolder;
`;
const BoxSpan= styled.span`
   color: white;
   background-color: black;
   padding: 11px 45px;
   border-radius: 1px;
   font-weight: 700;
   font-size: 13px;
`;
const buttonColor = () => {
	let randomNum = Math.floor(Math.random() * 2);
	let colors = {
		0: "https://raw.githubusercontent.com/hellenekpo/hellensclothingfactory/main/client/my-app/photos/clickherepink.png",
		1: "https://raw.githubusercontent.com/hellenekpo/hellensclothingfactory/main/client/my-app/photos/clickhereblue.png"
	}
	console.log(randomNum)
	console.log("This is the button color", colors[randomNum]);
	return colors[randomNum];
}
const randomColor = () => {
	let randomNum = Math.floor(Math.random() * 1);
	let colors = {
		0: "https://raw.githubusercontent.com/hellenekpo/hellensclothingfactory/main/client/my-app/public/newlogo.png"
	}
	console.log("This is the value in the dictionary", colors[randomNum]);
	return colors[randomNum];
}
  function getInfo() {
	  axios({
		  method: 'GET',
		  url: "https://0zcy0plu37.execute-api.us-east-1.amazonaws.com/staging/backend/homeButton"
	  })
	  .then((response) => {
		  console.log("This is something",response)
		  const res = response.data
		  setInformation(({
			  success: res.success
		  }))
	  }).catch((error) => {
		  if (error.response) {
			  console.log(error.response)
		  	  console.log(error.response.status)
		      constoe.log(error.response.headers)
		  }
	  })
  }

const Home = () => {
	const [information, setInformation] = useState(false);
	let color = randomColor();
  return (
    <Container>
        <PortFolio>
          <Poster src={color} alt="poster"/>
          <Poster1 src={color} alt="desktop-poster" />
          <Poster2 src={color} alt="tablet-poster"/>
          <Poster3 src={color} alt="mobile-poster"/>
        </PortFolio>
	    <header>
	  	<p>To get your profile details: </p>
	  	<button onClick={getInfo}>Click me</button>
	  	{information && 
			<div>
	  		<p>User name: {information.success}</p>
	  		</div>
	  }
	  	</header>
        <Slide />

    </Container>
  )
}

export default Home