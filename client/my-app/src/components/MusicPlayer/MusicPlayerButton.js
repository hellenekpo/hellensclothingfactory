import {changeOnHover, changeOnMouseDown, changeOnMouseOut, changeOnMouseUp, MusicPlayer} from "../../utils/utils";
import pausebutton from "../../images/pause.png";
import playbutton from "../../images/play.png";
import thankyou from "../../sounds/thankyou.mp3";
import React, {useContext} from "react";
import {AudioContext} from "../AudioContext/AudioContext";

export const MusicPlayerButton = () => {
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
        <div>
            <MusicPlayer
                id="playButton"
                alt="playbutton"
                src={isPlaying ? pausebutton : playbutton}
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
            ></MusicPlayer>
        </div>
    );
};