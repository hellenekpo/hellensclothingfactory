import React from "react";
import useMousePosition from "./useMousePosition";
import cursor from './images/cursor.png'
const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  
  return (
    <div 
      style={{ 
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none"
      }}
    >
      <img
        width={25}
        height={40}
	  	src={cursor}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-10%, -10%)",
        }}
      />
    </div>
  );
};

export default Cursor;