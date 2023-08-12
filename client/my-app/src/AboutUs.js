import React from 'react'
import './Home.css';
import styled from 'styled-components'

import config from './config.json'
import helene from "./images/helene.png";
import thankyouwanna from "./images/thankyouwanna.png";
import aboutuslogo from "./images/aboutuslogo.png";
import aboutushover from "./images/aboutushover.png";
import {desktop, mobile, tablet} from "./responsive";
import {useNavigate} from "react-router-dom";
const Container = styled.div`
`;
const ComingSoon = styled.img`
  max-width:100%;
  max-height:40%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-190%);
    ${desktop({display: "block",})}
    ${tablet({display:"block"})}
    ${mobile({display: "block",})}
`;
const AboutUsImage = styled.img`
  max-width:20%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,120%);
    ${desktop({display: "block", })}
    ${tablet({display:"block", })}
    ${mobile({display: "block", maxWidth: "40%", })}
`;
const ThankYou = styled.img`
  max-width:40%;
  max-height:40%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-30%);

  ${desktop({display: "block"})}
  ${tablet({display:"block", width: "20%",})}
  ${mobile({display: "block", maxWidth: "80%", })}
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


const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <Container>
		<ComingSoon src={helene} alt="comingsoon"/>
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