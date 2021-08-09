//sample for now
import React, { createContext, useContent, useEffect, useState } from "react";

const ViewportContext = createContext({ width: window.innerWidth });

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <ViewportContext.Provider value={{ width }}>{children}</ViewportContext.Provider>;
};

export const useViewport = () => {
  const { width } = useContext(ViewportContext);
  return { width };
};
//src :https://stackoverflow.com/questions/61057744/how-to-add-multiple-event-listeners-for-the-same-react-component
//usage
//const { width } = useViewport()
