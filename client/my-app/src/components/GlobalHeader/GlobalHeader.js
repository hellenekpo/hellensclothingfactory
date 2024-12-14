import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import helene1 from '../../images/helene.png';
import helene2 from '../../images/heleneclick.png';
import { mobile, tablet } from "../../utils/responsive";

const GlobalHeader = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Helene
        src={helene1}
        onClick={() => navigate('/')}
        onMouseOver={() => changeOnHover('helene')}
        onMouseOut={() => changeOnMouseOut('helene')}
        alt="logo"
        id="helene"
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Helene = styled.img`
  max-width: 29%;
  max-height: 100%;
  position: fixed;
  ${tablet({ maxWidth: '60%' })}
  ${mobile({ maxWidth: '60%' })}
`;

const changeOnHover = (image) => {
  if (image === 'helene') {
    document.getElementById(image).src = helene2;
  }
};

const changeOnMouseOut = (image) => {
  if (image === 'helene') {
    document.getElementById(image).src = helene1;
  }
};

export default GlobalHeader;