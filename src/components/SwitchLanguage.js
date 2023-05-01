import React from "react";
import { useContext } from "react";
import { languageContext } from "../contexts/useLanguageContext.js";
import { FrenchIcon, UkIcon } from "./Icons.js";

function SwitchLanguage({ className = "" }) {
  const { switchLanguage, language } = useContext(languageContext);
  return (
    <>
      {language === "en" && (
        <button className={`ml-4 ${className}`} onClick={() => switchLanguage("fr")}>
          <FrenchIcon />
        </button>
      )}
      {language === "fr" && (
        <button className={`ml-4 ${className}`} onClick={() => switchLanguage("en")}>
          <UkIcon />
        </button>
      )}
    </>
  );
}

export default SwitchLanguage;
