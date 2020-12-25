import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="px-10 flex justify-between items-center"
      style={{ height: "50px" }}
    >
      <ul className="flex">
        <li>
          <p className="mr-10">@2020 Nextwind </p>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy policies</a>
          </Link>
        </li>
      </ul>
      <ul className="flex">
        <li>
          <Link href="/about">
            <a className="mr-5">FR</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="">EN</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
