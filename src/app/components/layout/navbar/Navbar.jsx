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

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    window.onscroll = function () {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0");
      } else {
        setTop("-80px"); // Hides the navbar
      }

      prevScrollPos = currentScrollPos;
    };
  });

  return (
    <Fragment>
      <div
        className='h-[70px] navbar transition-all duration-500 fixed hidden md:flex gap-4 justify-between items-center w-full shadow-gray-300 dark:shadow-gray-800 shadow-md z-10 px-8 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-filter backdrop-blur-lg'
        style={{ top: top }}
      >
        <p className='flex text-gray-400'>
          <span className='font-bold text-lg'>SHIV</span> <DiTechcrunch />
        </p>
        <div className='flex h-full gap-4'>
          {NavbarData.map((navbar) => (
            <Link
              className={
                "font-semibold text-[#159e6e] dark:text-[#17c1ff] hover:border-b-4 hover:scale-110  border-[#159e6e] dark:border-[#17c1ff] border-solid"
              }
              href={navbar.url}
              key={navbar.name}
            >
              <div className='flex items-center h-full px-2'>{navbar.name}</div>
            </Link>
          ))}
        </div>
        <button
          className='text-xl text-[#159e6e] dark:text-[#17c1ff]'
          onClick={() => setTheme(theme === "dark" ? null : "dark")}
        >
          {theme === "dark" ? <TbBulbFilled /> : <BsFillLightningChargeFill />}
        </button>
      </div>

      {/* mobile Header */}
      <div
        className='md:hidden navbar transition-all duration-500 flex justify-between fixed w-full py-3 px-5 shadow-gray-300 dark:shadow-gray-800 shadow-md z-10 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-filter backdrop-blur-lg'
        style={{ top }}
      >
        <div className='flex gap-4 items-center'>
          <button
            className='text-3xl font-semibold'
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>

          <p className='flex text-gray-400'>
            <span className='font-bold text-lg'>SHIV</span> <DiTechcrunch />
          </p>
        </div>

        <div>
          <button
            className='text-2xl font-semibold text-[#159e6e] dark:text-[#17c1ff]'
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

      <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </Fragment>
  );
};

export default Navbar;
