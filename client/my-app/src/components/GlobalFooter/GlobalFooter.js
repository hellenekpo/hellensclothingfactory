import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import shop1 from '../../images/shop1.png';
import shop2 from '../../images/shop2.png';
import about1 from '../../images/about1.png';
import about2 from '../../images/about2.png';
import contact1 from '../../images/contact1.png';
import contact2 from '../../images/contact2.png';
import catalog1 from '../../images/catalog1.png';
import catalog2 from '../../images/catalog2.png';
import { mobile, tablet } from "../../Utils/responsive";

const GlobalFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    if (path === 'shop') {
      document.getElementById('shop').src = shop2;
    } else if (path === 'about') {
      document.getElementById('about').src = about2;
    } else if (path === 'contact') {
      document.getElementById('contact').src = contact2;
    } else if (path === 'catalog') {
      document.getElementById('catalog').src = catalog2;
    }
  }, [location]);

  const changeOnHover = (image) => {
    const path = location.pathname.split('/').pop();
    if (path !== image) {
      if (image === 'shop') {
        document.getElementById(image).src = shop2;
      } else if (image === 'about') {
        document.getElementById(image).src = about2;
      } else if (image === 'contact') {
        document.getElementById(image).src = contact2;
      } else if (image === 'catalog') {
        document.getElementById(image).src = catalog2;
      }
    }
  };

  const changeOnMouseOut = (image) => {
    const path = location.pathname.split('/').pop();
    if (path !== image) {
      if (image === 'shop') {
        document.getElementById(image).src = shop1;
      } else if (image === 'about') {
        document.getElementById(image).src = about1;
      } else if (image === 'contact') {
        document.getElementById(image).src = contact1;
      } else if (image === 'catalog') {
        document.getElementById(image).src = catalog1;
      }
    }
  };

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
          onClick={() => navigate('/about')}
          onMouseOver={() => changeOnHover('about')}
          onMouseOut={() => changeOnMouseOut('about')}
          alt="about us"
          id="about"
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

export default GlobalFooter;