import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';
import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../utils/responsive';
import { Link } from 'react-router-dom'
import helene1 from '../../images/helene.png';
import summer2024 from '../../images/summer2024.png';
import summer2024click from '../../images/summer2024click.png';
import helene2 from '../../images/heleneclick.png';
import shop1 from '../../images/shop1.png';
import shop2 from '../../images/shop2.png';
import about1 from '../../images/about1.png';
import about2 from '../../images/about2.png';
import contact1 from '../../images/contact1.png';
import contact2 from '../../images/contact2.png';
import HomeNav from '../../components/HomeNav/HomeNav';
import Slide from '../../components/Slide/Slide';
import { Admin, Menu, Reload, Resize, Search } from '@rsuite/icons';
import { IconButton } from "rsuite";
import BrandSlider from '../../components/BrandSlider/BrandSlider';
import * as AWS from 'aws-sdk';
import newlogo from '../../images/newlogo.png'
import config from '../../config.json'
import {Routes, Route, useNavigate} from 'react-router-dom';
AWS.config.update(config);
const docClient = new AWS.DynamoDB.DocumentClient();


const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Helene = styled.img`
  max-width:29%;
    max-height:100%;
  position:fixed;
  ${tablet({maxWidth:"60%",})}
  ${mobile({maxWidth:"60%",})}


`;

const Summer24 = styled.img`
  max-width:70%;
  top: 40%;
  max-height:20%;
  position:fixed;
  ${mobile({maxWidth:"100%",})}
  ${tablet({maxWidth:"40%",})}

`;

const Shop = styled.img`
  max-width:12%;
  max-height:20%;
  position:fixed;
  ${mobile({maxWidth:"40%",})}
  ${tablet({maxWidth:"40%",})}
  bottom: -0.9%;
  left:0%;

`;
const AboutUs = styled.img`
  max-width:22%;
  max-height:20%;
  position:fixed;
  bottom: 0%;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"10%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"10%"})}
`;
const Contact = styled.img`
  max-width:18%;
     max-height:20%;
     position:fixed;
     ${mobile({maxWidth:"70%", left:"0%", bottom:"20%"})}
     ${tablet({maxWidth:"70%", left:"0%", bottom:"20%"})}
     bottom: 0%;
     right:0%;
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
const Catalog = () => {
	const [information, setInformation] = useState("");
	const [purchases, setPurchases] = useState(-1);
	const [contactImageState, setContantImageState] = useState(false);
	const [aboutUsImageState, setAboutUsImageState] = useState(false);
	const [homeImageState, setHomeImageState] = useState(false);
	const navigate = useNavigate();
const changeOnHover = (image) => {
    if (image == "aboutUs") {
        document.getElementById(image).src = about2;
        }
    if (image == "contact") {
            document.getElementById(image).src = contact2;
            }
    if (image == "catalog") {
            document.getElementById(image).src = catalog2;
            }
            if (image == "helene") {
                            document.getElementById(image).src = helene2;
                            }
    if (image == "summer24") {
                                            document.getElementById(image).src = summer2024click;
                                            }
    }

const changeOnMouseOut = (image) => {
    if (image == "aboutUs") {
       document.getElementById(image).src = about1;
       }
    if (image == "contact") {
        document.getElementById(image).src = contact1;
        }
    if (image == "catalog") {
        document.getElementById(image).src = catalog1;
        }
             if (image == "helene") {
                                    document.getElementById(image).src = helene1;
                                    }
    if (image == "summer24") {
                                        document.getElementById(image).src = summer2024;
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

    <Summer24 src={summer2024}
                                                       onMouseOver={() => {
                                                       changeOnHover("summer24");
                                                       }}
                                                       onMouseOut={() => {
                                                       changeOnMouseOut("summer24");
                                                       }} alt="logo" id="summer24"/>
    <Helene src={helene1} onClick={() => {navigate('/');
                                                  }}
                                                   onMouseOver={() => {
                                                   changeOnHover("helene");
                                                   }}
                                                   onMouseOut={() => {
                                                   changeOnMouseOut("helene");
                                                   }} alt="logo" id="helene"/>
    <AboutUs src={about1} onClick={() => {navigate('/aboutUsInfo');
                                  			    }}
                                  			    alt="aboutus"
                                                onMouseOver={() => {
                                       			changeOnHover("aboutUs");
                                       		    }}
                                       		    onMouseOut={() => {
                                       			changeOnMouseOut("aboutUs");
                                       			}} id="aboutUs"/>

    <Contact src={contact1} onClick={() => {navigate('/contact');
                                    }} onMouseOver={() => {
                                                changeOnHover("contact");
                                                }}
                                                onMouseOut={() => {
                                                changeOnMouseOut("contact");
                                                }} alt="contacting" id="contact"/>

    <Shop src={shop1} onClick={() => {navigate('/shop');
                              					}}
                              					onMouseOver={() => {
                              					changeOnHover("shop");
                              				    }}
                              				    onMouseOut={() => {
                              					changeOnMouseOut("shop");
                              			        }}
                              			        alt="shopping" id="shop"/>

    </Container>
  )
}

export default Catalog