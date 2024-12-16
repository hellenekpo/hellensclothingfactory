import React, {useContext} from 'react';
import './Home.css';
import styled from 'styled-components';
import { desktop, tablet, mobile } from '../../utils/responsive';
import drop3 from '../../images/drop3.gif';
import dropdesktop from '../../images/dropdesktop.gif';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import TimedPopup from '../../components/TimedPopup/TimedPopup';
import { PageContainer } from "../../utils/utils";
import { AudioContext } from "../../components/AudioContext/AudioContext";
import thankyou from "../../sounds/thankyou.mp3";

const Home = () => {
    const { play, pause, isPlaying, currentTrack } = useContext(AudioContext);

    const handlePlay = (track) => {
        play(track);
    };
  return (
    <PageContainer>
      <GlobalHeader />
      <TimedPopup />
      <Drop src={drop3} alt="drop" />
      <DropDesktop src={dropdesktop} alt="dropdesktop" />
        <button style={{marginTop: "550px", marginLeft: "250px"}} onClick={() => handlePlay({ url: thankyou})}>
            Play
        </button>
        <button onClick={pause}>Pause</button>
        {isPlaying && <p>Playing: {currentTrack.title}</p>}
      <GlobalFooter />
    </PageContainer>
  );
};

const Drop = styled.img`
    max-width: 0%;
    max-height: 100%;
    position: fixed;
    ${desktop({ maxWidth: '0', top: '22%' })}
    ${mobile({ maxWidth: '85%', top: '10%' })}
    ${tablet({ maxWidth: '85%', top: '10%' })}
    top: 40%;
`;

const DropDesktop = styled.img`
  max-width: 80%;
  max-height: 100%;
  position: fixed;
  ${desktop({ maxWidth: '100%' })}
  ${mobile({ maxWidth: '0%' })}
  ${tablet({ maxWidth: '0%' })}
  top: 8%;
`;

export default Home;