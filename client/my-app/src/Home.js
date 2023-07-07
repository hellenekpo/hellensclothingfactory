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
import aboutusfolderclosed from './images/aboutusfolderclosed.png'
import shopfolderopened from './images/shopfolderopened.png'
import contactfolderclosed from './images/contactfolderclosed.png'
import config from './config.json'
import {Routes, Route, useNavigate} from 'react-router-dom';
AWS.config.update(config);
const docClient = new AWS.DynamoDB.DocumentClient();

const Container = styled.div`
`;
const PortFolio= styled.div`
`;
const Poster = styled.img`
width: 30%;
display: block;
margin-top: 70px;
margin-right: 50%;
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




const Home = () => {
	const [information, setInformation] = useState("");
	const [purchases, setPurchases] = useState(-1);
	const [contactImageState, setContantImageState] = useState(false);
	const [aboutUsImageState, setAboutUsImageState] = useState(false);
	const [shopImageState, setShopImageState] = useState(false);
	const navigate = useNavigate();
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
		else if (imageName == "shopButton") {
			if (shopImageState == false) {
			document.getElementById("shopButton").src = shopfolderopened;
			setShopImageState(true);
			}
		else {
			document.getElementById("shopButton").src = shopfolderclosed;
			setShopImageState(false);

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
	  <img src={shopfolderclosed}id="shopButton" alt="shop image" onClick={() => {
	  changeImage("shopButton");
	  setTimeout(function(){
		  navigate('/shop');

	  }, 700); 
  }}
		style={{
		width: '13%',
			   "marginLeft": '-20px',
			   "marginTop": '5px',
      	}}/>
	  	<img src={contactfolderclosed}id="contactButton" alt="contact image" onClick={() => {changeImage("contactButton");
		setTimeout(function(){
		  navigate('/contact');

	  }, 700); 
	}}
		style={{
		width: '22%',
		"marginTop": '2px',
      	}}
		align="right"/>
		<img src={aboutusfolderclosed}id="aboutUsButton" alt="about image" onClick={() => {changeImage("aboutUsButton");
		setTimeout(function(){
		  navigate('/aboutus');

	  }, 700);	
	}}
		style={{
		width: '23%',
		"marginTop": '5px',

      	}}
		align="left"/>
		
        <PortFolio>
          <Poster src={newlogo} alt="poster"/>
        </PortFolio>
		
	    <header>
			  <WelcomeImage src={welcomeimage} alt="poster"/>
	  	<p>{information}</p>
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
	  	</header>	

        <Slide />

    </Container>
  )
}

export default Home