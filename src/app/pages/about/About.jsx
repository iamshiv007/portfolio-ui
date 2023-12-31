"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
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
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-3'>
          <FaUserCheck /> About me
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          <div
            className='bg-[url(/images/profile2.jpg)] shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-400 w-[200px] h-[350px] m-auto bg-cover bg-no-repeat'
            ref={profile2Ref}
          />
          <div
            className='text-lg p-2 translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded'
            ref={aboutInfoRef}
          >
            <p className='text-3xl text-center md:text-left font-semibold text-[#159e6e] dark:text-[#17c1ff]'>
              Shivraj Gurjar.
            </p>
            <p className='text-center md:text-left text-red-600 mt-1'>
              Full Stack Developer
            </p>
            <div>
              {" "}
              <p className='mt-2 text-center md:text-left text-blue-600'>
                Location : Kota, Rajasthan, India 🇮🇳
              </p>
              <p className='text-center md:text-left text-blue-600'>
                Age : 20 Years
              </p>
              <p className='text-center md:text-left text-blue-600'>
                Experience : 6 Months
              </p>
              <p className='text-center md:text-left text-blue-600'>
                Projects : 3
              </p>
            </div>

            <div className='mt-5 justify-evenly text-justify'>
              <p className='text-gray-600 dark:text-gray-300'>
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
