import React from "react";
import Link from "next/link";
import Router from "next/router";
import useTranslation from "../intl/useTranslation";

const MenuOverlay = ({ menuState, setMenuState }) => {
  const { t } = useTranslation();
  Router.events.on("routeChangeStart", () => setMenuState(false));

  return (
    <div
      className={
        menuState
          ? "lg:hidden fixed top-0 right-0 h-full w-full z-10 text-secondary transition-all"
          : "fixed"
      }
      onClick={() => setMenuState(false)}
    >
      <div
        className={
          menuState
            ? "lg:hidden w-80 fixed bg-black h-full z-20 top-0 right-0 overflow-x-hidden transition-all ease-in-out duration-700"
            : "lg:hidden w-0 fixed bg-black h-full z-20 top-0 right-0 overflow-x-hidden transition-all ease-in-out duration-700"
        }
      >
        <div className="relative top-14 flex flex-col items-end pr-10">
          <Link href="/">
            <a className="text-xl my-3 cursor-pointer">{t("home")}</a>
          </Link>
          <Link href="/about">
            <a className="text-xl my-3 cursor-pointer">{t("about")}</a>
          </Link>
          <Link href="/news">
            <a className="text-xl my-3 cursor-pointer">{t("news")}</a>
          </Link>
          <Link href="/contact">
            <a className="text-xl my-3 cursor-pointer">{t("contact")}</a>
          </Link>
          <Link href="/login">
            <a className="text-xl my-3 cursor-pointer ">{t("login")}</a>
          </Link>
          <Link href="/register">
            <a className="text-xl my-3 cursor-pointer">{t("register")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
