import React from 'react';
import styled from 'styled-components';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import { PageContainer } from '../../utils/Utils';

const Contact = () => {
  return (
    <PageContainer>
      <GlobalHeader />
      <Content>
      </Content>
      <GlobalFooter />
    </PageContainer>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export default Contact;