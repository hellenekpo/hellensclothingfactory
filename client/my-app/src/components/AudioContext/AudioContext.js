import React, { createContext, useState, useRef, useEffect } from "react";

const AudioContext = createContext();

const AudioProvider = ({ children }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    const play = (track) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        audioRef.current = new Audio(track.url);
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentTrack(track);
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play();
        } else if (audioRef.current && !isPlaying) {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <AudioContext.Provider value={{ play, pause, isPlaying, currentTrack }}>
            {children}
        </AudioContext.Provider>
    );
};

export { AudioContext, AudioProvider };