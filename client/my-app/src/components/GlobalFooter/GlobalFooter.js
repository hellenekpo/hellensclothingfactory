import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import shop1 from '../../images/shop1.png';
import shop2 from '../../images/shop2.png';
import about1 from '../../images/about1.png';
import about2 from '../../images/about2.png';
import contact1 from '../../images/contact1.png';
import contact2 from '../../images/contact2.png';
import catalog1 from '../../images/catalog1.png';
import catalog2 from '../../images/catalog2.png';
import { mobile, tablet } from "../../utils/responsive";

const GlobalFooter = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterItemContainer>
        <FooterItem
          src={shop1}
          onClick={() => navigate('/shop')}
          onMouseOver={() => changeOnHover('shop')}
          onMouseOut={() => changeOnMouseOut('shop')}
          alt="shopping"
          id="shop"
          className="shop"
        />
      </FooterItemContainer>
      <FooterItemContainer>
        <FooterItem
          src={about1}
          onClick={() => navigate('/aboutUsInfo')}
          onMouseOver={() => changeOnHover('aboutUs')}
          onMouseOut={() => changeOnMouseOut('aboutUs')}
          alt="aboutus"
          id="aboutUs"
        />
      </FooterItemContainer>
      <FooterItemContainer>
        <FooterItem
          src={contact1}
          onClick={() => navigate('/contact')}
          onMouseOver={() => changeOnHover('contact')}
          onMouseOut={() => changeOnMouseOut('contact')}
          alt="contacting"
          id="contact"
        />
      </FooterItemContainer>
      <FooterItemContainer>
        <FooterItem
          src={catalog1}
          onClick={() => navigate('/catalog')}
          onMouseOver={() => changeOnHover('catalog')}
          onMouseOut={() => changeOnMouseOut('catalog')}
          alt="catalogging"
          id="catalog"
        />
      </FooterItemContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const FooterItemContainer = styled.div`
    width: 18%;
    height: 20%;
    display: flex;
    align-items: flex-end; /* Align items to the bottom */
    ${mobile({ width: '40%' })}
    ${tablet({ width: '40%' })}
`;

const FooterItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    &.shop {
        width: 90%; /* Make the shop item a little smaller */
        height: 90%;
    }
`;

const changeOnHover = (image) => {
  if (image === 'shop') {
    document.getElementById(image).src = shop2;
  } else if (image === 'aboutUs') {
    document.getElementById(image).src = about2;
  } else if (image === 'contact') {
    document.getElementById(image).src = contact2;
  } else if (image === 'catalog') {
    document.getElementById(image).src = catalog2;
  }
};

const changeOnMouseOut = (image) => {
  if (image === 'shop') {
    document.getElementById(image).src = shop1;
  } else if (image === 'aboutUs') {
    document.getElementById(image).src = about1;
  } else if (image === 'contact') {
    document.getElementById(image).src = contact1;
  } else if (image === 'catalog') {
    document.getElementById(image).src = catalog1;
  }
};

export default GlobalFooter;