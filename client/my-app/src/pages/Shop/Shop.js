import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import {
    PortFolio,
    Poster,
    PageContainer,
    changeOnHover,
    changeOnMouseOut,
    changeOnMouseUp,
    changeOnMouseDown
} from '../../utils/utils';
import placeholder1 from '../../images/placeholder1.png';
import placeholder2 from '../../images/placeholder2.png';
import playbutton from "../../images/play.png";
import thankyou from "../../sounds/thankyou.mp3";
import pausebutton from "../../images/pause.png";
import {AudioContext} from "../../components/AudioContext/AudioContext";

const Shop = () => {
  const { play, pause, isPlaying, currentTrack } = useContext(AudioContext);
  const handlePlay = (track) => {
        play(track);
        console.log(currentTrack);
    };
  const handlePause = (track) => {
        pause(track);
        console.log(currentTrack);
    };
  const navigate = useNavigate();
  const changeToPlaceHolder1 = (placeHolder) => {
    document.getElementById(placeHolder).src = placeholder1;
  };

  const changeToPlaceHolder2 = (placeHolder) => {
    document.getElementById(placeHolder).src = placeholder2;
  };

  return (
      <PageContainer>
          <GlobalHeader/>
          <img
              id="playButton"
              alt="playbutton"
              src={isPlaying ? pausebutton : playbutton}
              style={{height: "80px", width: "80px", left: "0px", position: "fixed"}}
              onClick={() => {
                  if (!isPlaying) {
                      handlePlay({url: thankyou});
                      document.getElementById("playbutton").src = pausebutton;
                  } else if (isPlaying) {
                      handlePause({url: thankyou});
                      document.getElementById("playbutton").src = playbutton;
                  }
              }}
              onMouseOver={() => changeOnHover("playButton", isPlaying)}
              onMouseOut={() => changeOnMouseOut("playButton", isPlaying)}
              onMouseUp={() => changeOnMouseUp("playButton", isPlaying)}
              onMouseDown={() => changeOnMouseDown("playButton", isPlaying)}
          ></img>
          <PortFolio>
              <Poster
                  src={placeholder1}
                  id="placeFirstImage"
                  alt="poster"
                  onClick={() => navigate('/shop/1')}
                  onMouseOver={() => changeToPlaceHolder2('placeFirstImage')}
                  onMouseOut={() => changeToPlaceHolder1('placeFirstImage')}
              />
              <Poster
                  src={placeholder1}
                  id="placeSecondImage"
                  alt="poster"
                  onClick={() => navigate('/shop/2')}
                  onMouseOver={() => changeToPlaceHolder2('placeSecondImage')}
                  onMouseOut={() => changeToPlaceHolder1('placeSecondImage')}
              />
              <Poster
                  src={placeholder1}
                  id="placeThirdImage"
                  alt="poster"
                  onClick={() => navigate('/shop/3')}
                  onMouseOver={() => changeToPlaceHolder2('placeThirdImage')}
                  onMouseOut={() => changeToPlaceHolder1('placeThirdImage')}
              />
          </PortFolio>
          <GlobalFooter/>
      </PageContainer>
  );
};

export default Shop;