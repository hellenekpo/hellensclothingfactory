import React from 'react';
import './Home.css';
import drop3 from '../../images/drop3.gif';
import dropdesktop from '../../images/dropdesktop.gif';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import TimedPopup from '../../components/TimedPopup/TimedPopup';
import {Drop, DropDesktop, PageContainer} from "../../utils/utils";
import {MusicPlayerButton} from "../../components/MusicPlayer/MusicPlayerButton";



const Home = () => {
  return (
    <PageContainer>
      <GlobalHeader />
      <TimedPopup />
      <Drop src={drop3} alt="drop" />
      <DropDesktop src={dropdesktop} alt="dropdesktop" />
      <MusicPlayerButton  />
      <GlobalFooter />
    </PageContainer>
  );
};


export default Home;