import React, { useEffect, useState } from "react";
const MyComponent = () => {
    const [windowWidth, setWindowWidth] = useState(0);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Add event listener on client-side
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize);
  
        // Call handleResize initially to set the initial window width
        handleResize();
  
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []);
  
    return (
      <div>
        <p>Window Width: {windowWidth}px</p>
      </div>
    );
  };