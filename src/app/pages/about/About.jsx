"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const aboutObserver = new IntersectionObserver(
      ([aboutEntry]) => {
        setIsAbout(aboutEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      }
    );

    aboutObserver.observe(aboutRef.current);

    if (isAbout) {
      profile2Ref.current.classList.add("slide-in");
      aboutInfoRef.current.classList.add("slide-in");
    } else {
      profile2Ref.current.classList.remove("slide-in");
      aboutInfoRef.current.classList.remove("slide-in");
    }
  }, [isAbout]);

  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='about'
        ref={aboutRef}
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-3'>
          <FaUserCheck /> About me
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          <div
            className='bg-[url(/images/profile2.jpg)] bg-blue-400 w-[200px] h-[350px] bg-cover bg-no-repeat'
            ref={profile2Ref}
          />
          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left'
            ref={aboutInfoRef}
          >
            <p className='text-3xl text-center md:text-left text-blue-700'>
              Shivraj Gurjar.
            </p>
            <p className='text-center md:text-left text-blue-600 mt-1'>
              Full Stack Developer
            </p>
            <p className='mt-2 text-center md:text-left text-gray-700 dark:text-gray-500'>
              Location : Kota, Rajasthan, India 🇮🇳
            </p>
            <p className='text-center md:text-left text-gray-700 dark:text-gray-500'>
              Age : 20 Years
            </p>

            <div className='mt-5 justify-evenly text-justify'>
              <p className='text-center md:text-left my-1'>Objective</p>

              <p className='text-gray-700 dark:text-gray-500'>
                I didn&apos;t complete my college for some reason, but I&apos;ve
                learned coding and programming by myself through YouTube and
                other internet resources. I&apos;m definitely aiming to achieve
                something big in my life. I am a consistent learner and a strong
                believer. I&apos;ve worked on numerous React, Next, and MERN
                stack projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
