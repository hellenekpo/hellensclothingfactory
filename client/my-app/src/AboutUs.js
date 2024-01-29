import React from 'react'
import './Home.css';
import styled from 'styled-components'

import config from './config.json'
import helene1 from "./images/helene.png";
import helene2 from './images/heleneclick.png';
import thankyouwanna from "./images/thankyouwanna.png";
import aboutuslogo from "./images/aboutuslogo.png";
import aboutushover from "./images/aboutushover.png";
import {desktop, mobile, tablet} from "./responsive";
import shop1 from './images/shop1.png';
import shop2 from './images/shop2.png';
import catalog1 from './images/catalog1.png';
import catalog2 from './images/catalog2.png';
import contact1 from './images/contact1.png';
import contact2 from './images/contact2.png';
import {useNavigate} from "react-router-dom";
const Container = styled.div`
display: flex;
  justify-content: center;

`;
const ComingSoon = styled.img`
  max-width:29%;
   max-height:100%;
   position:fixed;
   ${tablet({maxWidth:"60%",})}
   ${mobile({maxWidth:"60%",})}
`;
const AboutUsImage = styled.img`
  max-width:20%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,120%);
    ${desktop({display: "block", })}
    ${tablet({ maxWidth: "70%",left:"50%", top: "20%"})}
    ${mobile({ maxWidth: "70%",left:"50%", top: "25%"})}
`;
const ThankYou = styled.img`
  max-width:40%;
  max-height:40%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-30%);

  ${desktop({display: "block"})}
  ${tablet({ maxWidth: "100%",left:"50%", top: "30%"})}
  ${mobile({ maxWidth: "100%",left:"50%", top: "30%"})}
`;

const Contact = styled.img`
  max-width:18%;
  max-height:20%;
  position:fixed;
  bottom: 0%;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"10%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"12%"})}
  right:26%;
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
const Shop = styled.img`
  max-width:12%;
  max-height:20%;
  position:fixed;
  ${mobile({maxWidth:"40%",})}
  ${tablet({maxWidth:"40%",})}
  bottom: -0.9%;
  left:0%;

`;

const Helene = styled.img`
  max-width:29%;
  max-height:100%;
  position:fixed;
  ${tablet({maxWidth:"60%",})}
  ${mobile({maxWidth:"60%",})}


`;
let hover = false;
const changeAboutUsHover= (aboutus) => {
    if (aboutus === "aboutusimage") {
        if (!hover) {
            document.getElementById(aboutus).src = aboutushover;
            hover = true;
        }
        else {
            document.getElementById(aboutus).src = aboutuslogo;
            hover = false;
        }
    }
}

const changeOnHover = (image) => {
    if (image == "shop") {
        document.getElementById(image).src = shop2;
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


const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <Container>
            <Shop src={shop1} onClick={() => {navigate('/shop');
                              					}}
                              					onMouseOver={() => {
                              					changeOnHover("shop");
                              				    }}
                              				    onMouseOut={() => {
                              					changeOnMouseOut("shop");
                              			        }}
                              			        alt="shopping" id="shop"/>

            <Contact src={contact1} onMouseOver={() => {
                                                changeOnHover("contact");
                                                }}
                                                onMouseOut={() => {
                                                changeOnMouseOut("contact");
                                                }} alt="contacting" id="contact"/>
            <Catalog src={catalog1} onMouseOver={() => {
                                                changeOnHover("catalog");
                                                }}
                                                onMouseOut={() => {
                                                changeOnMouseOut("catalog");
                                                }} alt="catalogging" id="catalog"/>

		<Helene src={helene1} onClick={() => {navigate('/');
                                                      }}
                                                       onMouseOver={() => {
                                                       changeOnHover("helene");
                                                       }}
                                                       onMouseOut={() => {
                                                       changeOnMouseOut("helene");
                                                       }} alt="logo" id="helene"/>
        <ThankYou src={thankyouwanna}
             alt="aboutUs"
                  style={{
                      width: "100%",
                      transform: "translate(-50%,-50%)",
                      display: "inline-block",
                      position: "absolute",
                  }}/>
        <AboutUsImage src={aboutuslogo}
             alt="aboutUs" id="aboutusimage"
                      onClick={() => {
                          navigate('/aboutusinfo')
                      }}
                      onMouseOut={() => {
                          changeAboutUsHover("aboutusimage");
                      }}
                      onMouseOver={() => {
                          changeAboutUsHover("aboutusimage");
                      }}/>

    </Container>
  )
}

export default AboutUs