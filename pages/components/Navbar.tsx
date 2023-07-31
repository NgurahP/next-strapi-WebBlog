import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavList = [
  { id: 1, navName: "Home", navLink: "/" },
  { id: 2, navName: "Blog & News", navLink: "/blog" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[100%] h-16 bg-black relative">
      <div className="flex items-center w-full">
        <div className="w-[25%]">
          <Link href="/">
            <p className="text-3xl text-white">
              <strong>Web-Blog</strong>
            </p>
          </Link>
        </div>
        <div className="w-[75%]">
          <ul className="flex justify-end text-end">
            {NavList.map(({ id, navLink, navName }) => (
              <li
                key={id}
                className="px-2 mx-1 text-md text-white cursor-pointer capitalize hover:bg-white hover:text-black transition duration-300 rounded-xl">
                <Link href={navLink}>{navName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
