import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import { PageContainer } from '../../Utils/Utils';
import thankyouwanna from '../../images/thankyouwanna.png';
import aboutuslogo from '../../images/aboutuslogo.png';
import aboutushover from '../../images/aboutushover.png';

const Thanks = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <GlobalHeader />
      <Content>
        <ThankYou src={thankyouwanna} alt="thank you" />
        <AboutUsImage
          src={aboutuslogo}
          alt="about us"
          id="aboutusimage"
          onClick={() => navigate('/about')}
          onMouseOver={() => changeAboutUsHover('aboutusimage')}
          onMouseOut={() => changeAboutUsHover('aboutusimage')}
        />
      </Content>
      <GlobalFooter />
    </PageContainer>
  );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ThankYou = styled.img`
    max-width: 40%;
    max-height: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
`;

const AboutUsImage = styled.img`
    max-width: 20%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 120%);
`;

const changeAboutUsHover = (about) => {
  if (about === 'aboutusimage') {
    const element = document.getElementById(about);
    element.src = element.src === aboutuslogo ? aboutushover : aboutuslogo;
  }
};

export default Thanks;