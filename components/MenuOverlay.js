import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

const MenuOverlay = ({ menuState, setMenuState }) => {
  Router.events.on("routeChangeStart", () => setMenuState(false));

  return (
    <div
      className={
        menuState
          ? "lg:hidden w-80 fixed bg-black text-white h-full z-10 w-0 top-0 right-0 overflow-x-hidden helloworld transition-all ease-in-out duration-700"
          : "lg:hidden w-0 fixed bg-black text-white h-full z-10 w-0 top-0 right-0 overflow-x-hidden helloworld transition-all ease-in-out duration-700"
      }
    >
      <div className="border border-red-500 relative top-1/4 flex flex-col ">
        <Link href="/about">
          <a className="mr-5">About</a>
        </Link>
        <Link href="/contact">
          <a className="mr-5">Contact</a>
        </Link>
        <Link href="/privacy">
          <a>Privacy</a>
        </Link>
      </div>
    </div>
  );
};

export default MenuOverlay;
