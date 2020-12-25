import React, { createContext, useState } from "react";

export const defaultLocale = "en";
export const locales = ["fr", "en"];
export const LangContext = createContext([]);

export const LangProvider = ({ children }) => {
  const [locale, setLocale] = useState("fr");

  return (
    <LangContext.Provider value={{ locale, setLocale }}>
      {children}
    </LangContext.Provider>
  );
};
