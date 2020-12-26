import React, { useContext, useState } from "react";
import Link from "next/link";
import { LangContext } from "../intl/LangProvider";
import useTranslation from "../intl/useTranslation";

const Footer = () => {
  const { locale, setLocale } = useContext(LangContext);
  const [localeTextColor, setLocaleTextColor] = useState("FR");

  const { t } = useTranslation();

  const switchToEn = () => {
    setLocale("en");
    setLocaleTextColor("EN");
  };
  const switchToFr = () => {
    setLocale("fr");
    setLocaleTextColor("FR");
  };

  return (
    <div
      className="px-10 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center"
      style={{ height: "50px" }}
    >
      <ul className="flex flex-col text-center sm:flex-row">
        <li>
          <p className="mr-2.5 lg:mr-10">@2020 Nextwind </p>
        </li>
        <li>
          <Link href="/privacy">
            <a>{t("privacy")}</a>
          </Link>
        </li>
      </ul>
      <ul className="flex">
        <li>
          <a
            onClick={switchToFr}
            className={`ml-2 mr-2.5 lg:mr-5 lg:ml-0 cursor-pointer ${
              localeTextColor === "FR" ? "text-third" : ""
            }`}
          >
            FR
          </a>
        </li>
        <li>
          <a
            onClick={switchToEn}
            className={`cursor-pointer ${
              localeTextColor === "EN" ? "text-third" : ""
            }`}
          >
            EN
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
