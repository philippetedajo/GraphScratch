import React, { useState } from "react";
import Link from "next/link";
import { MenuOverlay } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const handleToggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div className="px-10 py-4 flex justify-between ">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl cursor-pointer">Nw</h1>
        </Link>
      </div>
      <MenuOverlay menuState={menuState} setMenuState={setMenuState} />
      <ul className="text-lg items-center hidden lg:flex">
        <li>
          <Link href="/about">
            <a className="mr-5">About</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a className="mr-5">News</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <ul className="text-lg flex items-center hidden lg:flex">
        <li>
          <Link href="/login">
            <a className="mr-5">Login</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a className="">Register</a>
          </Link>
        </li>
      </ul>
      <div className="flex items-center lg:hidden z-10">
        {menuState ? (
          <IoCloseSharp
            onClick={handleToggleMenu}
            fill="#f7f3f0"
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
