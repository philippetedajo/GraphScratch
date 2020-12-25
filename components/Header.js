import React, { useState } from "react";
import Link from "next/link";
import { MenuOverlay } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import useTranslation from "../intl/useTranslation";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const { t } = useTranslation();

  const handleToggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div className="px-10 py-4 flex justify-between ">
      <div className="flex items-center">
        <Link href="/">
          <a className="text-2xl cursor-pointer">Nextwind</a>
        </Link>
      </div>
      <MenuOverlay menuState={menuState} setMenuState={setMenuState} />
      <ul className="text-lg items-center hidden lg:flex">
        <li>
          <Link href="/about">
            <a className="mr-5">{t("about")}</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a className="mr-5">{t("news")}</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>{t("contact")}</a>
          </Link>
        </li>
      </ul>
      <ul className="text-lg flex items-center hidden lg:flex">
        <li>
          <Link href="/login">
            <a className="mr-5">{t("login")}</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a className="">{t("register")}</a>
          </Link>
        </li>
      </ul>
      <div className="flex items-center lg:hidden z-10">
        {menuState ? (
          <IoCloseSharp
            onClick={handleToggleMenu}
            fill="#fff"
            size={26}
            className="menu-close cursor-pointer transition-all"
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleToggleMenu}
            size={23}
            className="cursor-pointer transition-all"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
