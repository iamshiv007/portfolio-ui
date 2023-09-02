"use client";
import React, { Fragment, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

import { ThemeContext } from "../../context/ThemeContext";
import { NavbarData } from "../../portfolioData/NavbarData";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      {/* Header */}
      <div className='md:hidden flex justify-between fixed top-0 w-full py-3 px-5 shadow-gray-300 dark:shadow-gray-800 shadow-md z-10 bg-[#ffffff98] dark:bg-[#00000098] backdrop-filter backdrop-blur-lg'>
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

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] ${
            showMenu ? null : "hidden"
          } `}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div
            className={`w-[70%] h-screen bg-white dark:bg-black shadow-sm shadow-gray-600 dark:shadow-gray-300  transition-all ${
              showMenu ? null : "-translate-x-[100%]"
            }`}
          >
            <div className='flex items-center p-3 gap-2 justify-between  bg-gray-200 dark:bg-gray-800'>
              <div className='flex gap-3 items-center'>
                <Image
                  alt='profile'
                  className='rounded-full'
                  height={30}
                  src='/images/profile.png'
                  width={30}
                />
                <p className='text-2xl font-semibold'>Welcome </p>
              </div>

              <button
                className='text-3xl font-bold'
                onClick={() => setShowMenu(!showMenu)}
              >
                <IoMdClose />
              </button>
            </div>

            <div className='flex flex-col p-2 gap-2'>
              {NavbarData.map((navbar) => (
                <Link
                  className='text-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 rounded p-2'
                  href={navbar.url}
                  key={navbar.name}
                >
                  {navbar.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;
