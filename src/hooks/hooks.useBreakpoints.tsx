import { breakpoints } from "theme";
import { useEffect, useState } from "react";
import { useMediaQuery } from "hooks/hooks.useMediaQuery";

const initialMedia = {
  isMobile: false,
  isTabletOrMobile: false,
  isDesktopOrLaptop: false,
};

export const useBreakpoints = () => {
  const [reactiveMedia, setReactiveMedia] = useState(initialMedia);

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile}px)`,
  });
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobileOrTablet}px)`,
  });
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${breakpoints.desktop}px)`,
  });

  useEffect(() => {
    setReactiveMedia({
      isMobile,
      isTabletOrMobile,
      isDesktopOrLaptop,
    });
  }, [isMobile, isTabletOrMobile, isDesktopOrLaptop]);

  return {
    isDesktopOrLaptop: reactiveMedia.isDesktopOrLaptop,
    isTabletOrMobile: reactiveMedia.isTabletOrMobile,
    isMobile: reactiveMedia.isMobile,
  };
};
