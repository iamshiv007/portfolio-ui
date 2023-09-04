"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";

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
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center gap-3'>
          <FaUserCheck /> About me
        </h2>
        <div className='py-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          <div>
            <Image
              alt='photo'
              className='rounded translate-x-[-550px] opacity-0 transition-all duration-700 shadow-sm shadow-gray-400 dark:shadow-gray-700 bg-gray-400 m-auto'
              height={460}
              ref={profile2Ref}
              src='/images/profile2.jpg'
              width={260}
            />
          </div>

          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left'
            ref={aboutInfoRef}
          >
            <p>
              My name is{" "}
              <span className='text-[#159e6e] dark:text-[#17c1ff] font-semibold'>
                Shivraj Gurjar.
              </span>
            </p>
            <p>
              I&apos;m from{" "}
              <span className='text-[#159e6e] dark:text-[#17c1ff] font-semibold'>
                Kota, Rajasthan, India.
              </span>
            </p>
            <p>
              I&apos;m{" "}
              <span className='text-[#159e6e] dark:text-[#17c1ff] font-semibold'>
                20 Years
              </span>{" "}
              old.
            </p>
            <p>
              I&apos;m a passionate{" "}
              <span className='text-[#159e6e] dark:text-[#17c1ff] font-semibold'>
                React Developer.
              </span>
            </p>

            <div className='mt-3 justify-evenly text-justify'>
              <p className='text-[#159e6e] dark:text-[#17c1ff] font-semibold text-center md:text-left my-1'>
                Objective
              </p>

              <p>
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
