"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"; // Using react-icons
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Top bar */}
      <div className="w-full bg-primary h-[30px]"></div>

      {/* Navbar container */}
      <div className="flex items-center shadow-sm justify-between w-full h-[76px] bg-white px-6 md:px-[106px]">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-20">
          <ul className="flex gap-5 items-center">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className={`font-medium font-roboto text-base text-black-50 flex items-center gap-2 transition-all ${
                    pathname === path ? "font-bold text-lg text-black-80" : ""
                  }`}
                >
                  {pathname === path && <span className="w-2 h-2 bg-black-80 rounded-full"></span>}
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
          <Link href={"/auth/login"}>
            <button className="font-semibold text-black-50 text-base font-poppins border-none">Sign In</button>
            </Link>
            <Link href={"/auth/signup"}>
            <button className="font-semibold text-white rounded-[20px] font-poppins bg-primary-2 w-[109px] h-[42px] flex justify-center items-center text-base border-none">
              Sign Up
            </button>
            </Link>
          </div>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-[110px] z-10 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-5 py-5">
            {navLinks.map(({ name, path }) => (
              <li key={name} className="w-full text-center">
                <Link
                  href={path}
                  onClick={toggleMenu}
                  className={`font-medium text-base font-roboto flex items-center gap-2 justify-center transition-all ${
                    pathname === path ? "font-bold text-lg text-black-80" : ""
                  }`}
                >
                  {pathname === path && <span className="w-2 h-2 bg-black-80 rounded-full"></span>}
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-3 pb-5">
            <Link href={"/auth/login"}>
            <button className="font-semibold text-black-50 text-base border-none font-poppins">Sign In</button>
            </Link>
            <Link href={"/auth/signup"}>
            <button className="font-semibold text-white rounded-[20px] font-poppins bg-primary-2 w-[109px] h-[42px] flex justify-center items-center text-base border-none">
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
