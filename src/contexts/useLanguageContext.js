import React, { createContext, useEffect, useState } from "react";

export const languageContext = createContext();

const useLanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const userPrefLanguage = window.localStorage.getItem("language");
    if (userPrefLanguage !== null) {
      setLanguage(userPrefLanguage);
    }
  }, []);

  const switchLanguage = (updateLanguage) => {
    setLanguage(updateLanguage);
    window.localStorage.setItem("language", updateLanguage);
  };
  return (
    <languageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export default useLanguageContextProvider;
