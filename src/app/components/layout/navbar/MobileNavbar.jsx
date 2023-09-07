import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

import { NavbarData } from "../../../portfolioData/navbar/NavbarData";

const MobileNavbar = ({ showMenu, setShowMenu }) => {
  return (
    <Fragment>
      {/* Background When mobile side menu open */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-10 bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] ${
          showMenu ? null : "hidden"
        } `}
        onClick={() => setShowMenu(!showMenu)}
      >
        {/* SideMenu */}
        <div
          className={`w-[70%] h-screen bg-white dark:bg-black shadow-sm shadow-gray-600 dark:shadow-gray-300 transition-all duration-1000 ${
            showMenu ? null : "translate-x-[-450px]"
          }`}
        >
          <div className='p-3 flex justify-between items-center gap-3 bg-gray-200 dark:bg-gray-800'>
            {/* Profile image with welcome text */}
            <div className='flex items-center gap-3'>
              <Image
                alt='profile'
                className='rounded-full'
                height={30}
                src='/images/profile.png'
                width={30}
              />
              <p className='text-2xl font-semibold'>Welcome </p>
            </div>

            {/* SideMenu Close button */}
            <button
              className='text-3xl font-bold'
              onClick={() => setShowMenu(!showMenu)}
            >
              <IoMdClose />
            </button>
          </div>

          <div className='p-2 flex flex-col gap-2'>
            {/* Navbar Links */}
            {NavbarData.map((navbar) => (
              <Link
                className='text-lg p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 rounded'
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
