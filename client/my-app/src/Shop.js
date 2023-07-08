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
import placeholder1 from './images/placeholder1.png'
import placeholder2 from './images/placeholder2.png'
import placeholder3 from './images/placeholder3.png'
import placeholder4 from './images/placeholder4.png'
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
const PortFolio= styled.div`
display: flex;
  justify-content: space-between;
`;
const Poster = styled.img`
width: 30%;
display: block;
  margin-right: auto;
  margin-left: auto;
`;


const WelcomeImage = styled.img`
	width: 70%;
    height: 70%;
	display: block;
  	margin-left: auto;
  	margin-right: auto;

    ${desktop({display: "block",})}
    ${tablet({display:"block"})}
    ${mobile({display: "block",})}
`;
const Shop = () => {
	const [information, setInformation] = useState("");
	const [purchases, setPurchases] = useState(-1);
	const [contactImageState, setContantImageState] = useState(false);
	const [aboutUsImageState, setAboutUsImageState] = useState(false);
	const [homeImageState, setHomeImageState] = useState(false);
	const navigate = useNavigate();
	const changeToPlaceHolder2 = (placeHolder) => {
		if (placeHolder == "placeFirstImage" ||
		    placeHolder == "placeThirdImage" ||
		    placeHolder == "placeFifthImage" ||
		    placeHolder == "placeSeventhImage" ||
		   	placeHolder == "placeNinthImage") {
			document.getElementById(placeHolder).src = placeholder2;
		}
		else {
			document.getElementById(placeHolder).src = placeholder4;
		}
	}
	const changeToPlaceHolder1 = (placeHolder) => {
		if (placeHolder == "placeFirstImage" ||
		    placeHolder == "placeThirdImage" ||
		    placeHolder == "placeFifthImage" ||
		    placeHolder == "placeSeventhImage" ||
		   	placeHolder == "placeNinthImage") {
			document.getElementById(placeHolder).src = placeholder1;
		}
		else {
			document.getElementById(placeHolder).src = placeholder3;
		}
	}
	const changeImage = (imageName) => {
		if (imageName == "contactButton") {
			if (contactImageState == false) {
			document.getElementById("contactButton").src = contactfolderopen;
			setContantImageState(true);
			}
		else {
			document.getElementById("contactButton").src = contactfolderclosed;
			setContantImageState(false);

			}
		}
		else if (imageName == "homeButton") {
			if (homeImageState == false) {
			document.getElementById("homeButton").src = homefolderopened;
			setHomeImageState(true);
			}
		else {
			document.getElementById("homeButton").src = homefolderclosed;
			setHomeImageState(false);

			}
		}
		else if  (imageName == "aboutUsButton") {
			if (aboutUsImageState == false) {
			document.getElementById("aboutUsButton").src = aboutusfolderopened;
			setAboutUsImageState(true);
			}
		else {
			document.getElementById("aboutUsButton").src = aboutusfolderclosed;
			setAboutUsImageState(false);

			}
		}
		
	}
	const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }
	console.log("in here")
    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data);
			for (let i = 0; i < data.Count; ++i) {
				if (data.Items[i].id = "1") {
					setPurchases(data.Items[i].num_of_purchases)
				}
			}
			console.log("This is purchases", purchases);
        }
		console.log(err);
    })
	}
	
	const fetchItem = () => {
		docClient.get({
    		TableName: "clothingitems",
    		Key: {
      			id: "1", // id is the Partition Key, '123' is the value of it
				name: "bubblegumblush"
    		},
  		})
  		.promise()
  		.then(data => console.log(data.Item))
  		.catch(console.error)
	}	
	
	const updatePurchases = (tableName, id, productName) => {
		let newnew = purchases + 1
		var params = {
			TableName: tableName,
			Key: {
				id: id,
				name: productName
			},
			UpdateExpression: `set num_of_purchases = :np + :value`,
			ExpressionAttributeValues: {
				":value": 1,
				":np": purchases,
    		},
		}
		setPurchases(newnew);
		docClient.update(params, function (err, data) {
			if (!err) {
				return "Successfully purchased";
			}
			console.log(err);
		})
	}
	
  return (
    <Container>
	  <img src={homefolderclosed}id="homeButton" alt="home image" onClick={() => {
	  changeImage("homeButton");
	  setTimeout(function(){
		  navigate('/');

	  }, 700); 
  }}
		style={{
		width: '14.5%',
			   "marginLeft": '-20px',
			   "marginTop": '5px',
      	}}
		align="middle"/>
	  	<img src={contactfolderclosed}id="contactButton" alt="contact image" onClick={() => {changeImage("contactButton");
		setTimeout(function(){
		  navigate('/shop');
	  }, 700); 
		}}
		style={{
		width: '22%',
		"marginTop": '2px',
      	}}
		align="right"/>
		<img src={aboutusfolderclosed}id="aboutUsButton" alt="about image" onClick={() => {
			changeImage("aboutUsButton");
			setTimeout(function(){
		  	navigate('/aboutus');
	  		}, 700); 
		}}
		style={{
		width: '23%',
		"marginTop": '5px',

      	}}
		align="left"/>
	    <header>
	  	<p>{information}</p>
	  
	  	</header>
<PortFolio>
          <Poster src={placeholder1} id="placeFirstImage" alt="poster"
			onClick={() => {navigate('/shop/1');
					}} onMouseOver={() => {
									changeToPlaceHolder2("placeFirstImage");
								   }}
						onMouseOut={() => {
									changeToPlaceHolder1("placeFirstImage");
								   }}/>
		  <Poster src={placeholder3} id="placeSecondImage" alt="poster"
			onClick={() => {navigate('/shop/2');
					}} onMouseOver={() => {
									changeToPlaceHolder2("placeSecondImage");
								   }}
						onMouseOut={() => {
									changeToPlaceHolder1("placeSecondImage");
								   }}/>
		<Poster src={placeholder1} id="placeThirdImage" alt="poster"
			onClick={() => {navigate('/shop/3');
					}} onMouseOver={() => {
									changeToPlaceHolder2("placeThirdImage");
								   }}
						onMouseOut={() => {
									changeToPlaceHolder1("placeThirdImage");
								   }}/>
        </PortFolio>
<PortFolio>
          <Poster src={placeholder3} id="placeFourthImage" alt="poster"
			onClick={() => {navigate('/shop/4');
					}} onMouseOver={() => {
									changeToPlaceHolder2("placeFourthImage");
								   }}
						onMouseOut={() => {
									changeToPlaceHolder1("placeFourthImage");
								   }}/>
<Poster src={placeholder1} id="placeFifthImage" alt="poster"
			onClick={() => {navigate('/shop/5');
					}} onMouseOver={() => {
									changeToPlaceHolder2("placeFifthImage");
								   }}
						onMouseOut={() => {
									changeToPlaceHolder1("placeFifthImage");
								   }}/>
<Poster src={placeholder3} id="placeSixthImage" alt="poster"
			onClick={() => {navigate('/shop/6');
					}} onMouseOver={() => {
									changeToPlaceHolder2("placeSixthImage");
								   }}
						onMouseOut={() => {
									changeToPlaceHolder1("placeSixthImage");
								   }}/>

</PortFolio>
<PortFolio>
          <Poster src={placeholder1} id="placeSeventhImage" alt="poster"
			onClick={() => {navigate('/shop/7');
					}} onMouseOver={() => {
									changeToPlaceHolder2("placeSeventhImage");
								   }}
						onMouseOut={() => {
									changeToPlaceHolder1("placeSeventhImage");
								   }}/>
<Poster src={placeholder3} id="placeEighthImage" alt="poster"
			onClick={() => {navigate('/shop/8');
					}} onMouseOver={() => {
									changeToPlaceHolder2("placeEighthImage");
								   }}
						onMouseOut={() => {
									changeToPlaceHolder1("placeEighthImage");
								   }}/>
<Poster src={placeholder1} id="placeNinthImage" alt="poster"
			onClick={() => {navigate('/shop/9');
					}} onMouseOver={() => {
									changeToPlaceHolder2("placeNinthImage");
								   }}
						onMouseOut={() => {
									changeToPlaceHolder1("placeNinthImage");
								   }}/>

</PortFolio>
    </Container>
  )
}

export default Shop