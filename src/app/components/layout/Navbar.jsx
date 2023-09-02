"use client";
import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

import { ThemeContext } from "../../context/ThemeContext";
import { NavbarData } from "../../portfolioData/NavbarData";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      <div className='fixed top-0 hidden md:flex gap-4 justify-between w-full p-3 shadow-gray-300 dark:shadow-gray-800 shadow-md z-10 px-8 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-filter backdrop-blur-lg'>
        <p className='flex text-gray-400'>
          <span className='font-bold text-lg'>SHIV</span> <DiTechcrunch />
        </p>
        <div className='space-x-4'>
          {NavbarData.map((navbar) => (
            <Link
              className={
                "font-semibold p-1 text-[#159e6e] dark:text-[#17c1ff] border-b border-white dark:border-black hover:border-[#159e6e] dark:hover:border-[#17c1ff] border-solid"
              }
              href={navbar.url}
              key={navbar.name}
            >
              {navbar.name}
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
    </Fragment>
  );
};

export default Navbar;
