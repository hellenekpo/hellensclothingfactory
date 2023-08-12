import React from 'react'
import './Home.css';
import styled from 'styled-components'
import helene from "./images/helene.png";
import aboutusinfo from "./images/aboutusinfo.png";
import {desktop, mobile, tablet} from "./responsive";
const Container = styled.div`
`;
const Helene = styled.img`
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
const AboutUsInformation = styled.img`
  max-width:90%;
  max-height:100%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-20%);
  ${desktop({display: "block",})}
  ${tablet({display:"block"})}
  ${mobile({display: "block",})}
`;


const AboutUsInfo = () => {

    return (
        <Container>
            <Helene src={helene} alt="helene"/>
            <AboutUsInformation src={aboutusinfo}
                      alt="aboutUsInfo"/>

        </Container>
    )
}

export default AboutUsInfo;