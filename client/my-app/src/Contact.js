import React, {Component, useState} from 'react';
import './Home.css';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import * as AWS from 'aws-sdk';
import helene1 from './images/helene.png';
import helene2 from './images/heleneclick.png';
import drop3 from './images/drop3.gif';
import dropdesktop from './images/dropdesktop.gif';
import submitlogo from './images/submitlogo.png';
import submitlogohover from './images/submitlogohover.png'
import signupfor from './images/signupfor.png';
import shop1 from './images/shop1.png';
import shop2 from './images/shop2.png';
import catalog1 from './images/catalog1.png';
import catalog2 from './images/catalog2.png';
import about1 from './images/about1.png';
import about2 from './images/about2.png';
import contact1 from './images/contact1.png';
import contact2 from './images/contact2.png';
import {Routes, Route, useNavigate} from 'react-router-dom';
import config from './config.json'
AWS.config.update(config);
import MailchimpSubscribe from "./MailchimpSubscribe";

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

const Catalog = styled.img`
   max-width:18%;
   max-height:20%;
   position:fixed;
   ${mobile({maxWidth:"70%", left:"0%", bottom:"18%"})}
   ${tablet({maxWidth:"70%", left:"0%", bottom:"18%"})}
   bottom: -0.9%;
   right:0%;
`;



const changeOnHover = (image) => {
    if (image == "shop") {
        document.getElementById(image).src = shop2;
        }
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
                    }


const changeOnMouseOut = (image) => {
    if (image == "shop") {
       document.getElementById(image).src = shop1;
       }
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
}
const Contact = () => {
const navigate = useNavigate();
  return (
    <Container>
		<Helene src={helene1} onClick={() => {navigate('/');
                                              }}
                                               onMouseOver={() => {
                                               changeOnHover("helene");
                                               }}
                                               onMouseOut={() => {
                                               changeOnMouseOut("helene");
                                               }} alt="logo" id="helene"/>
        <Shop src={shop1} onClick={() => {navigate('/shop');
                          					}}
                          					onMouseOver={() => {
                          					changeOnHover("shop");
                          				    }}
                          				    onMouseOut={() => {
                          					changeOnMouseOut("shop");
                          			        }}
                          			        alt="shopping" id="shop"/>
        <AboutUs src={about1} onClick={() => {navigate('/aboutUsInfo');
                              			    }}
                              			    alt="aboutus"
                                            onMouseOver={() => {
                                   			changeOnHover("aboutUs");
                                   		    }}
                                   		    onMouseOut={() => {
                                   			changeOnMouseOut("aboutUs");
                                   			}} id="aboutUs"/>
        <Catalog src={catalog1} onClick={() => {navigate('/catalog');
                                        }} onMouseOver={() => {
                                            changeOnHover("catalog");
                                            }}
                                            onMouseOut={() => {
                                            changeOnMouseOut("catalog");
                                            }} alt="catalogging" id="catalog"/>

    </Container>

  )
}

export default Contact