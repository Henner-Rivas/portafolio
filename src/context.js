import React, { createContext, useState } from "react";
export const Context = createContext("");

const Provider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("darkMode") || false);

  const value = {
    mode,
    setMode,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Provider,
  Consumer: Context.Consumer,
};
