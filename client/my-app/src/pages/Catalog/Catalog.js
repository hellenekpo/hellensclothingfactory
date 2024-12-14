import React from 'react';
import styled from 'styled-components';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import { PageContainer, changeOnHover, changeOnMouseOut } from '../../Utils/Utils';
import summer2024 from '../../images/summer2024.png';
import { mobile, tablet } from "../../Utils/responsive";

const Catalog = () => {
  return (
    <PageContainer>
      <GlobalHeader />
      <Content>
        <Summer24
          src={summer2024}
          onMouseOver={() => changeOnHover('summer24')}
          onMouseOut={() => changeOnMouseOut('summer24')}
          alt="summer 2024"
          id="summer24"
        />
      </Content>
      <GlobalFooter />
    </PageContainer>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Summer24 = styled.img`
  max-width: 70%;
  top: 40%;
  max-height: 20%;
  position: fixed;
  ${mobile({ maxWidth: '100%' })}
  ${tablet({ maxWidth: '40%' })}
`;

export default Catalog;