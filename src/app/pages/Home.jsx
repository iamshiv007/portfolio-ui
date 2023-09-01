"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

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
      <div className='min-h-[100vh] flex items-center mx-[200px] justify-between'>
        <div>
          <p className='text-5xl py-2 font-semibold'>Hi,</p>
          <p className='text-5xl py-2 font-semibold'>I&apos;m Shivraj</p>
          <p className='text-5xl py-2 font-semibold'>
            a web <span className='text-[#3498db]'> Developer</span>
          </p>
        </div>

        <div
          className='bg-[url(http://localhost:3000/images/profile.png)] w-[300px] h-[300px] bg-cover rounded-full hover:bg-gray-500 hover:cursor-pointer bg-blend-multiply'
          ref={profileRef}
        >
          {showResume ? (
            <Link
              className='w-full h-full flex justify-center items-center underline text-xl'
              href='https://drive.google.com/file/d/1AWiU8oWJi5rY0nl6d3iMHOjevBq7izOU/view?usp=drive_link'
              target='_blank'
            >
              Resume <FiExternalLink />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
