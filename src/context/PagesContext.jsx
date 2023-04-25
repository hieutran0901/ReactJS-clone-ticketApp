import React, { createContext, useState } from "react";

export const PagesContext = createContext();

const PagesContextProvider = ({ children }) => {
  const [title, setTitle] = useState(undefined);
  const onClickChangeTitle = (title) => {
    setTitle(title);
  };
  const PagesContextData = { title, onClickChangeTitle };
  return <PagesContext.Provider value={PagesContextData}>{children}</PagesContext.Provider>;
};

export default PagesContextProvider;
