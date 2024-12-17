import {
    changeOnHover,
    changeOnMouseDown,
    changeOnMouseOut,
    changeOnMouseUp,
    MusicPlayer,
    NowPlaying
} from "../../utils/utils";
import pausebutton from "../../images/pause.png";
import playbutton from "../../images/play.png";
import nowplayingqtip from "../../images/nowplayingqtip.png";
import vivrantthing from "../../sounds/vivrantthing.mp3";
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
            {isPlaying ? <NowPlaying src={nowplayingqtip} /> :
                <NowPlaying src={nowplayingqtip} style={{display: "none"}} />}
            <MusicPlayer
                id="playButton"
                alt="playbutton"
                src={isPlaying ? pausebutton : playbutton}
                onClick={() => {
                    if (!isPlaying) {
                        handlePlay({ url: vivrantthing});
                        document.getElementById("playbutton").src = pausebutton;
                    }
                    else if (isPlaying) {
                        handlePause({ url: vivrantthing});
                        document.getElementById("playbutton").src = playbutton;
                    }
                }}
                onMouseOver={() => changeOnHover("playButton", isPlaying)}
                onMouseOut={() => changeOnMouseOut("playButton", isPlaying)}
            ></MusicPlayer>
        </div>
    );
};