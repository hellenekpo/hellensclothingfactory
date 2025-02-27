import React, { useState, useEffect, useRef } from 'react';
import TimedPopupForm from "../TimedPopupForm/TimedPopupForm";
import styled, { keyframes } from 'styled-components';
import signupForUpdates from "../../images/signupfor.png";
import closeup from "../../images/closeup.png";
import closedown from "../../images/closedown.png";
import {changeOnHover, changeOnMouseOut} from "../../utils/utils";
import {mobile, tablet} from "../../utils/responsive";

const TIME_TO_SHOW_POPUP_IN_MS = 3000; // 3 seconds
const TIME_TO_HIDE_POPUP_IN_MS = 20000; // 20 seconds

const TimedPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => {
        setShowPopup(false); // Dismiss the popup after fade-out
        setFadeOut(false); // Reset fade-out state
      }, 1000); // Duration of fade-out animation
    }, TIME_TO_HIDE_POPUP_IN_MS);
  };

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowPopup(true); // Show the popup after 10 seconds
      resetTimeout(); // Start the fade-out timer
    }, TIME_TO_SHOW_POPUP_IN_MS);

    // Cleanup the timers if the component unmounts
    return () => {
      clearTimeout(showTimer);
      clearTimeout(timeoutRef.current);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleActivity = () => {
    resetTimeout(); // Reset the fade-out timer on user activity
  };

  return (
    <div>
      {showPopup && (
        <PopupContainer
          fadeOut={fadeOut}
          onMouseMove={handleActivity}
          onKeyDown={handleActivity}
          onClick={handleActivity}
        >
          <Close src={closeup}
                 id="closebutton"
                 onClick={() => {
                   setShowPopup(false);
                 }}
                 alt="close"
                 onMouseOver={() => {
                   changeOnHover("closebutton");
                 }}
                 onMouseOut={() => {
                   changeOnMouseOut("closebutton");
                 }}
          />
          <SignUp src={signupForUpdates} alt="submit logo" />
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
  ${mobile({ width: "400px", height: "550px" })}
  position: fixed;
  top: 45%;
  left: 50%;
  width: 550px;
  height: 600px;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 203, 220);
  border-radius: 20px;
  border: 1px solid #ffbdd2;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: ${props => (props.fadeOut ? fadeOutAnimation : fadeIn)} 1s ease-in-out;
`;

const SignUp = styled.img`
    width: 50%;
    margin-top: 15px;
`;

const Close = styled.img`
  width: 8%;
  margin-top: 10px;
  left: 510px;
  position: fixed;
  ${mobile({ left: "380px" })}
`;


export default TimedPopup;