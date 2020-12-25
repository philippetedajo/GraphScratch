import { useContext } from "react";
import { LangContext, defaultLocale } from "./LangProvider";
import { LangStrings } from "./LangStrings";

const useTranslation = () => {
  const { locale } = useContext(LangContext);

  function t(key) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string ${key} for locale ${locale} `);
    }
    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || "";
  }

  return { t, locale };
};

export default useTranslation;
