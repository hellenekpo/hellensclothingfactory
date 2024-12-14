import React from 'react';
import styled from 'styled-components';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import { PageContainer} from '../../utils/Utils';
import aboutusinfo from '../../images/aboutusinfo.png';
import aboutusdesktop from '../../images/aboutusdesktop.png';
import { desktop, mobile, tablet } from "../../utils/responsive";

const AboutUs = () => {
  return (
    <PageContainer>
      <GlobalHeader />
      <Content>
        <AboutUsInformation src={aboutusinfo} alt="aboutUsInfo" />
        <AboutUsInformationDesk src={aboutusdesktop} alt="aboutUsInfoDesk" />
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

const AboutUsInformation = styled.img`
  max-width: 0%;
  max-height: 100%;
  position: absolute;
  top: 15%;
  ${desktop({ maxWidth: '0%' })}
  ${tablet({ maxWidth: '100%' })}
  ${mobile({ maxWidth: '100%' })}
`;

const AboutUsInformationDesk = styled.img`
  max-width: 62%;
  max-height: 100%;
  position: absolute;
  top: 15%;
  ${desktop({ maxWidth: '100%' })}
  ${tablet({ maxWidth: '0%' })}
  ${mobile({ maxWidth: '0%' })}
`;

export default AboutUs;