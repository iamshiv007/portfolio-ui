"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

import Theme from "../components/others/Theme";

const Home = () => {
  const profileRef = useRef();
  const [showResume, setShowResume] = useState(false);

  // Function to toggle the resume text on hover
  const handleHover = () => {
    setShowResume(true);
  };

  const handleLeave = () => {
    setShowResume(false);
  };

  useEffect(() => {
    const currentProfileRef = profileRef.current;
    currentProfileRef.addEventListener("mouseenter", handleHover);
    currentProfileRef.addEventListener("mouseleave", handleLeave);

    // Clean up event listeners when component unmounts
    return () => {
      currentProfileRef.removeEventListener("mouseenter", handleHover);
      currentProfileRef.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <Fragment>
      <Theme>
        <div className='min-h-[100vh] px-[20px] md:px-[100px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between'>
          <div>
            <p className='text-4xl sm:text-5xl py-2 font-semibold'>Hi,</p>
            <p className='text-4xl sm:text-5xl py-2 font-semibold'>
              I&apos;m Shivraj
            </p>
            <p className='text-4xl sm:text-5xl py-2 font-semibold'>
              a web{" "}
              <span className='text-[#159e6e] dark:text-[#17c1ff]'>
                {" "}
                Developer
              </span>
            </p>
          </div>

          <div
            className='bg-[url(/images/profile.png)] w-[300px] h-[300px] bg-cover rounded-full bg-gray-400 dark:bg-gray-500 hover:cursor-pointer hover:bg-blend-multiply m-auto md:m-0 mt-[40px] md:mt-0'
            ref={profileRef}
          >
            {showResume ? (
              <Link
                className='w-full h-full flex justify-center items-center underline text-xl text-white font-bold'
                href='https://drive.google.com/file/d/1AWiU8oWJi5rY0nl6d3iMHOjevBq7izOU/view?usp=drive_link'
                passHref
                target='_blank'
              >
                Resume <FiExternalLink />
              </Link>
            ) : null}
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default Home;
