"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

import { NavbarData } from "../../portfolioData/NavbarData";

const MobileNavbar = ({ showMenu, setShowMenu }) => {
  return (
    <Fragment>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-10 bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] ${
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
                className='text-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 rounded p-2'
                href={navbar.url}
                key={navbar.name}
              >
                {navbar.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;
