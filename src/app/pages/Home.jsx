"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const Home = () => {
  const [isHome, setIsHome] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

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

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const homeObserver = new IntersectionObserver(
      ([homeEntry]) => {
        setIsHome(homeEntry.isIntersecting);
        console.log(homeEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      }
    );

    homeObserver.observe(homeRef.current);

    if (isHome) {
      profileRef.current.classList.add("slide-in");
      introRef.current.classList.add("slide-in");
    } else {
      profileRef.current.classList.remove("slide-in");
      introRef.current.classList.remove("slide-in");
    }
  }, [isHome]);

  return (
    <Fragment>
      <section id='home'>
        <div
          className='min-h-[100vh] px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'
          ref={homeRef}
        >
          <div
            className='translate-x-[-500px] transition-all duration-700 opacity-0'
            ref={introRef}
          >
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
            className='bg-[url(/images/profile.png)] translate-x-[500px] transition-all opacity-0 duration-700 w-[300px] h-[300px] bg-cover rounded-full bg-gray-400 dark:bg-gray-500 hover:cursor-pointer hover:bg-blend-multiply m-auto md:m-0 mt-[40px] md:mt-0'
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
      </section>
    </Fragment>
  );
};

export default Home;
