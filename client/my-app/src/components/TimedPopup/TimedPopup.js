import React, { useState, useEffect } from 'react';
import TimedPopupForm from "../TimedPopupForm/TimedPopupForm";

const TimedPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowPopup(true); // Show the popup after 10 seconds
    }, 1000);

    const hideTimer = setTimeout(() => {
      setShowPopup(false); // Dismiss the popup 20 seconds after it shows
    }, 30000); // 10s delay + 20s display time = 30s total

    // Cleanup the timers if the component unmounts
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      {showPopup && (
        <div className="popup" style={popupStyle}>
          <TimedPopupForm />
        </div>
      )}
    </div>
  );
};

const popupStyle = {
  position: 'fixed',
  top: '45%',
  left: '50%',
  width: "550px",
  height: 500,
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(255, 189, 210, 0.95)',
  borderRadius: '20px',
  border: '1px solid #ffbdd2',
  padding: '20px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
};

export default TimedPopup;
