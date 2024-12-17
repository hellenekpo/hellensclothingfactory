import React from 'react';
import styled from 'styled-components';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import { PageContainer } from '../../utils/utils';
import {MusicPlayerButton} from "../../components/MusicPlayer/MusicPlayerButton";

const Contact = () => {
  return (
    <PageContainer>
      <GlobalHeader />
        <MusicPlayerButton  />
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