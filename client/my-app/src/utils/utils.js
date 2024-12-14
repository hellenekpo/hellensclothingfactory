import styled from "styled-components";
import {desktop, mobile, tablet} from "./responsive";
import about2 from "../images/about2.png";
import contact2 from "../images/contact2.png";
import catalog2 from "../images/catalog2.png";
import helene2 from "../images/heleneclick.png";
import about1 from "../images/about1.png";
import contact1 from "../images/contact1.png";
import catalog1 from "../images/catalog1.png";
import helene1 from "../images/helene.png";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const PortFolio= styled.div`
    ${mobile({marginTop: "-20%", width: "500%", height: "200%", paddingLeft: "330%"})}
    ${tablet({paddingTop: "25%", width: "300%", height: "300%", paddingLeft: "200%"})}
    ${desktop({paddingTop: "35%",})}
    padding-top: 15%;
    display: fixed;
    justify-content: space-between;
`;

export const Poster = styled.img`
    width: 30%;
    height: 100%;
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


