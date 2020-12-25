import React from "react";
import Link from "next/link";
import Router from "next/router";

const MenuOverlay = ({ menuState, setMenuState }) => {
  Router.events.on("routeChangeStart", () => setMenuState(false));

  return (
    <div
      className={
        menuState
          ? "lg:hidden fixed top-0 right-0 h-full w-full border border-red-500 z-10"
          : "fixed"
      }
      onClick={() => setMenuState(false)}
    >
      <div
        className={
          menuState
            ? "lg:hidden w-80 fixed bg-black text-white h-full z-10 top-0 right-0 overflow-x-hidden transition-all ease-in-out duration-700"
            : "lg:hidden w-0 fixed bg-black text-white h-full z-10 top-0 right-0 overflow-x-hidden transition-all ease-in-out duration-700"
        }
      >
        <div className="relative top-14 flex flex-col items-end pr-10">
          <Link href="/about">
            <p className="text-xl my-3 cursor-pointer">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-xl my-3 cursor-pointer">Contact</p>
          </Link>
          <Link href="/privacy">
            <p className="text-xl my-3 cursor-pointer">Privacy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
