import React, { useContext } from "react";
import Link from "next/link";
import { LangContext } from "../intl/LangProvider";
import useTranslation from "../intl/useTranslation";

const Footer = () => {
  const { locale, setLocale } = useContext(LangContext);
  const { t } = useTranslation();

  const switchToEn = () => {
    setLocale("en");
  };
  const switchToFr = () => {
    setLocale("fr");
  };

  return (
    <div
      className="px-10 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center"
      style={{ height: "50px" }}
    >
      <ul className="flex">
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
            className="ml-2 mr-2.5 lg:mr-5 lg:ml-0 cursor-pointer"
          >
            FR
          </a>
        </li>
        <li>
          <a onClick={switchToEn} className="cursor-pointer">
            EN
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
