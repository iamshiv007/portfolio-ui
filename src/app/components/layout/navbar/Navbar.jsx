"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

import { ThemeContext } from "../../../context/ThemeContext";
import { NavbarData } from "../../../portfolioData/navbar/NavbarData";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [top, setTop] = useState("0");
  const [showMenu, setShowMenu] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  // Logic for Navbar Hide and Show on scrolling behaviour
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    window.onscroll = function () {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0"); // Show the navbar
      } else {
        setTop("-80px"); // Hides the navbar
      }

      prevScrollPos = currentScrollPos;
    };
  });

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className='z-10 px-8 h-[70px] w-full fixed hidden md:flex justify-between items-center gap-4 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] shadow-sm shadow-gray-300 dark:shadow-gray-800 transition-all duration-500 backdrop-filter backdrop-blur-lg'
        style={{ top: top }}
      >
        {/* Name Logo */}
        <p className='text-gray-400 flex'>
          <span className='font-bold text-lg'>SHIV</span> <DiTechcrunch />
        </p>
        <div className='h-full flex gap-4'>
          {/* All Links */}
          {NavbarData.map((navbar) => (
            <Link
              className={
                "font-semibold text-[#159e6e] dark:text-[#17c1ff] hover:border-b-4  border-[#159e6e] dark:border-[#17c1ff] hover:scale-110"
              }
              href={navbar.url}
              key={navbar.name}
            >
              <div className='px-2 h-full flex items-center'>{navbar.name}</div>
            </Link>
          ))}
        </div>
        {/* Theme button */}
        <button
          className='text-xl text-[#159e6e] dark:text-[#17c1ff] hover:scale-110'
          onClick={() => setTheme(theme === "dark" ? null : "dark")}
        >
          {theme === "dark" ? <TbBulbFilled /> : <BsFillLightningChargeFill />}
        </button>
      </div>

      {/* mobile Header */}
      <div
        className='py-3 px-5 w-full z-10 fixed flex justify-between md:hidden bg-[#ffffffcc] dark:bg-[#000000cc] shadow-md shadow-gray-300 dark:shadow-gray-800 backdrop-filter backdrop-blur-lg'
        style={{ top }}
      >
        <div className='flex items-center gap-4'>
          {/* Open SideMenu Button */}
          <button
            className='text-3xl font-semibold'
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>

          {/* Name Logo */}
          <p className='text-gray-400 flex'>
            <span className='font-bold text-lg'>SHIV</span> <DiTechcrunch />
          </p>
        </div>

        {/* Theme Button */}
        <div>
          <button
            className='text-2xl font-semibold text-[#159e6e] dark:text-[#17c1ff] hover:scale-110'
            onClick={() => setTheme(theme === "dark" ? null : "dark")}
          >
            {theme === "dark" ? (
              <TbBulbFilled />
            ) : (
              <BsFillLightningChargeFill />
            )}
          </button>
        </div>
      </div>

      {/* SideMenu for mobile screen */}
      <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </Fragment>
  );
};

export default Navbar;
