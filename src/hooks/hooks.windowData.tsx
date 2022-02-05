import { useState, useEffect } from "react";

export default function useWindowData() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleWindowResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width: dimensions.width, height: dimensions.height };
}
