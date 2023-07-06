import React from "react";
import { NavLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed w-full bg-white lg:px-40 px-4">
      <div className="flex flex-row py-4 justify-between">
        <Link href='/'>
          <Image src="/logo.svg" width={80} height={43} alt="logo" />
        </Link>
        <ul className="lg:flex hidden text-small gap-3 hover:text-gray-400">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.key}
                className="inline mr-4 cursor-pointer text-center text-[13px] antialiased font-sans font-semibold hover:text-black"
                href={link.href}
              >
                {link.text}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
