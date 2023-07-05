import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import { Link } from 'react-router-dom'
import HomeNav from './HomeNav';
import Slide from './Slide.js';
import BrandSlider from './BrandSlider';
import * as AWS from 'aws-sdk';
import newlogo from './images/newlogo.png'
import config from './config.json' 
AWS.config.update(config);
const docClient = new AWS.DynamoDB.DocumentClient();

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

const randomColor = () => {
	let randomNum = Math.floor(Math.random() * 1);
	let colors = {
		0: "https://raw.githubusercontent.com/hellenekpo/hellensclothingfactory/main/client/my-app/public/newlogo.png"
	}
	console.log("This is the value in the dictionary", colors[randomNum]);
	return colors[randomNum];
}



const Home = () => {
	const [information, setInformation] = useState("heyyyy");
	const [purchases, setPurchases] = useState(-1);
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
		docClient.update(params, function (err, data) {
			if (!err) {
			}
			console.log(err);
		})
	}
  return (
    <Container>
        <PortFolio>
          <Poster src={newlogo} alt="poster"/>
          <Poster1 src={newlogo} alt="desktop-poster" />
          <Poster2 src={newlogo} alt="tablet-poster"/>
          <Poster3 src={newlogo} alt="mobile-poster"/>
        </PortFolio>
	    <header>
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