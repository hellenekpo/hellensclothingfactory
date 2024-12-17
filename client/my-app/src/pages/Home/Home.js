import React, {useContext, useEffect, useState} from 'react';
import './Home.css';
import styled from 'styled-components';
import { desktop, tablet, mobile } from '../../utils/responsive';
import drop3 from '../../images/drop3.gif';
import dropdesktop from '../../images/dropdesktop.gif';
import playbutton from "../../images/play.png"
import pausebutton from "../../images/pause.png";
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import TimedPopup from '../../components/TimedPopup/TimedPopup';
import {changeOnHover, changeOnMouseDown, changeOnMouseOut, changeOnMouseUp, PageContainer} from "../../utils/utils";
import { AudioContext } from "../../components/AudioContext/AudioContext";
import thankyou from "../../sounds/thankyou.mp3";
const Home = () => {
    const { play, pause, isPlaying, currentTrack } = useContext(AudioContext);

    const handlePlay = (track) => {
        play(track);
        console.log(currentTrack);
    };
    const handlePause = (track) => {
        pause(track);
        console.log(currentTrack);
    };
  return (
    <PageContainer>
      <GlobalHeader />
      <TimedPopup />
      <Drop src={drop3} alt="drop" />
      <DropDesktop src={dropdesktop} alt="dropdesktop" />
        <img
            id="playButton"
            alt="playbutton"
            src={isPlaying ? pausebutton : playbutton}
            style={{height: "80px", width: "80px", left: "0px", position: "fixed"}}
            onClick={() => {
                if (!isPlaying) {
                    handlePlay({ url: thankyou});
                    document.getElementById("playbutton").src = pausebutton;
                }
                else if (isPlaying) {
                    handlePause({ url: thankyou});
                    document.getElementById("playbutton").src = playbutton;
                }
            }}
            onMouseOver={() => changeOnHover("playButton", isPlaying)}
            onMouseOut={() => changeOnMouseOut("playButton", isPlaying)}
            onMouseUp={() => changeOnMouseUp("playButton", isPlaying)}
            onMouseDown={() => changeOnMouseDown("playButton", isPlaying)}
        ></img>
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