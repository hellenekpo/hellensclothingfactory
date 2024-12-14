import styled from "styled-components";
import {mobile, tablet} from "./responsive";
import about2 from "../images/about2.png";
import contact2 from "../images/contact2.png";
import catalog2 from "../images/catalog2.png";
import helene2 from "../images/heleneclick.png";
import about1 from "../images/about1.png";
import contact1 from "../images/contact1.png";
import catalog1 from "../images/catalog1.png";
import helene1 from "../images/helene.png";

export const Container = styled.div`
  display: flex; 
  justify-content: center;
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Helene = styled.img`
  max-width:29%;
  max-height:100%;
  position:fixed;
  ${tablet({maxWidth:"60%",})}
  ${mobile({maxWidth:"60%",})}
`;

export const AboutUs = styled.img`
  max-width:22%;
  max-height:20%;
  position:fixed;
  bottom: 0%;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"1%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"2%"})}
  left:0%;
`;

export const Contact = styled.img`
  max-width:18%;
  max-height:20%;
  position:fixed;
  bottom: 0%;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"10%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"10%"})}
`;

export const Catalog = styled.img`
  max-width:18%;
  max-height:20%;
  position:fixed;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"18%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"18%"})}
  bottom: -0.9%;
  right:0%;
`;

export const PortFolio= styled.div`
    ${tablet({paddingTop: "18%", display: "grid", height:"50%", width:"50%"})}
    ${mobile({paddingTop: "25%", display: "grid", height:"50%", width:"70%", justifyContent:"spaces"})}
    padding-top: 20%;
    display: flex;
    justify-content: space-between;
`;

export const Poster = styled.img`
    width: 30%;
    height: 100%;
    ${tablet({width: "90%", height: "90%", marginLeft:"0%",})}
    ${mobile({width: "90%", height: "90%", marginLeft:"20%",})}
    display: block;
    margin-right: auto;
    margin-left: auto;
`;

export const changeOnHover = (image) => {
    if (image === "about") {
        document.getElementById(image).src = about2;
    }
    if (image === "contact") {
        document.getElementById(image).src = contact2;
    }
    if (image === "catalog") {
        document.getElementById(image).src = catalog2;
    }
    if (image === "helene") {
        document.getElementById(image).src = helene2;
    }
}

export const changeOnMouseOut = (image) => {
    if (image === "about") {
        document.getElementById(image).src = about1;
    }
    if (image === "contact") {
        document.getElementById(image).src = contact1;
    }
    if (image === "catalog") {
        document.getElementById(image).src = catalog1;
    }
    if (image === "helene") {
        document.getElementById(image).src = helene1;
    }
}


