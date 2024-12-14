import React, { useState, useEffect } from 'react';
import TimedPopupForm from "../TimedPopupForm/TimedPopupForm";
import styled, { keyframes } from 'styled-components';

const TIME_TO_SHOW_POPUP_IN_MS = 10000; // 10 seconds
const TIME_TO_HIDE_POPUP_IN_MS = TIME_TO_SHOW_POPUP_IN_MS + 20000; // 20 seconds

const TimedPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowPopup(true); // Show the popup after 10 seconds
    }, TIME_TO_SHOW_POPUP_IN_MS);

    const hideTimer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => {
        setShowPopup(false); // Dismiss the popup after fade-out
        setFadeOut(false); // Reset fade-out state
      }, 1000); // Duration of fade-out animation
    }, TIME_TO_HIDE_POPUP_IN_MS); // 10s delay + 20s display time = 30s total

    // Cleanup the timers if the component unmounts
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      {showPopup && (
        <PopupContainer fadeOut={fadeOut}>
          <TimedPopupForm />
        </PopupContainer>
      )}
    </div>
  );
};

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOutAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const PopupContainer = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    width: 550px;
    height: 500px;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 189, 210, 0.95);
    border-radius: 20px;
    border: 1px solid #ffbdd2;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: ${props => (props.fadeOut ? fadeOutAnimation : fadeIn)} 1s ease-in-out;
`;

export default TimedPopup;