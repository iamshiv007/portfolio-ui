import React, { Fragment } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { MdOutlineLightMode } from "react-icons/md";

import { NavbarData } from "../../portfolioData/NavbarData";

const Navbar = () => {
  return (
    <Fragment>
      <div className='fixed top-0 flex gap-4 justify-between w-full p-3 shadow-gray-600 shadow-md z-10 bg-black px-8'>
        <p className='flex text-gray-400'>
          <span className='font-bold text-lg'>SHIV</span> <DiTechcrunch />
        </p>
        <div className='space-x-4'>
          {NavbarData.map((navbar) => (
            <Link
              className='font-semibold p-1 text-[#17c1ff] border-b border-black active:border-[#17c1ff] hover:border-[#17c1ff] border-solid'
              href={navbar.url}
              key={navbar.name}
            >
              {navbar.name}
            </Link>
          ))}
        </div>
        <button className='text-xl'>
          <MdOutlineLightMode color='#f71967' />
        </button>
      </div>
    </Fragment>
  );
};

export default Navbar;
