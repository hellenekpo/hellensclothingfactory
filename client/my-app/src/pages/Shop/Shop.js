import React from 'react'
import '../Home/Home.css';
import { useState } from 'react';
import { Container, Helene, AboutUs,
    Contact, Catalog, PortFolio, Poster,changeOnHover, changeOnMouseOut } from '../../utils/Utils.js';
import helene1 from '../../images/helene.png';
import catalog1 from '../../images/catalog1.png';
import about1 from '../../images/about1.png';
import contact1 from '../../images/contact1.png';
import placeholder1 from '../../images/placeholder1.png'
import placeholder2 from '../../images/placeholder2.png'
import { useNavigate} from 'react-router-dom';

const Shop = () => {
	const [purchases, setPurchases] = useState(-1);
	const navigate = useNavigate();
    const changeToPlaceHolder1 = (placeHolder) => {
        document.getElementById(placeHolder).src = placeholder1;
    }
    const changeToPlaceHolder2 = (placeHolder) => {
        document.getElementById(placeHolder).src = placeholder2;
    }
  return (
    <Container>
    <Helene src={helene1} onClick={() => {navigate('/');}}
            onMouseOver={() => {changeOnHover("helene");}}
            onMouseOut={() => {changeOnMouseOut("helene");}}
            alt="logo" id="helene"/>
    <PortFolio>
        <Poster src={placeholder1} id="placeFirstImage" alt="poster"
                onClick={() => {navigate('/shop/1');}}
                onMouseOver={() => {changeToPlaceHolder2("placeFirstImage");}}
                onMouseOut={() => {changeToPlaceHolder1("placeFirstImage");}}
        />
        <Poster src={placeholder1} id="placeSecondImage" alt="poster"
                onClick={async () => {navigate('/shop/3');}}
                onMouseOver={() => {changeToPlaceHolder2("placeSecondImage");}}
                onMouseOut={() => {changeToPlaceHolder1("placeSecondImage");}}
        />
        <Poster src={placeholder1} id="placeThirdImage" alt="poster"
                onClick={() => {navigate('/shop/3');}}
            onMouseOver={() => {changeToPlaceHolder2("placeThirdImage");}}
            onMouseOut={() => {changeToPlaceHolder1("placeThirdImage");}}
        />
    </PortFolio>

    <AboutUs src={about1}
             onClick={() => {navigate('/aboutUsInfo');}}
             alt="aboutus"
             onMouseOver={() => {changeOnHover("aboutUs");}}
             onMouseOut={() => {changeOnMouseOut("aboutUs");}}
             id="aboutUs"/>
    <Contact src={contact1} onClick={() => {navigate('/contact');}}
             onMouseOver={() => {changeOnHover("contact");}}
             onMouseOut={() => {changeOnMouseOut("contact");}}
             alt="contacting"
             id="contact"/>
    <Catalog src={catalog1} onClick={() => {navigate('/catalog');}}
             onMouseOver={() => {changeOnHover("catalog");}}
             onMouseOut={() => {changeOnMouseOut("catalog");}}
             alt="catalogging"
             id="catalog"/>
    </Container>
  )
}

export default Shop