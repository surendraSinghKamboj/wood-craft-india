import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed z-50 flex py-2 justify-evenly min-w-full backdrop-blur-md bg-white/35">
      <Image
        src={"/next.svg"}
        width={100}
        height={60}
        alt="logo"
        title="Wood Items"
      />
      <ul className="flex w-1/2 justify-evenly">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/products"}>Products</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
