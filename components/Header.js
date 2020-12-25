import React, { useState } from "react";
import Link from "next/link";
import { MenuOverlay } from "../components";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const handleToggleMenu = () => {
    setMenuState(!menuState);
    console.log(menuState);
  };

  return (
    <div className="px-10 py-2 flex justify-between ">
      <div className="flex items-center">
        <Link href="/">
          <a className="text-2xl">Nextwind</a>
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
          <Link href="/contact">
            <a className="mr-5">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy</a>
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
      {menuState ? (
        <button
          onClick={handleToggleMenu}
          className="lg:hidden z-10 menu-close"
          style={{ color: "red" }}
        >
          close
        </button>
      ) : (
        <button
          onClick={handleToggleMenu}
          className="lg:hidden z-10"
          style={{ color: "red" }}
        >
          open
        </button>
      )}
    </div>
  );
};

export default Header;
