"use client";

import React from "react";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-4">
      <Link href="/">Lama</Link>
      <div>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="px-2">
            {link.title}
          </Link>
        ))}
        <button onClick={() => console.log("logged out")}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
