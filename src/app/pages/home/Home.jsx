"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";

const Home = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const homeObserver = new IntersectionObserver(
      ([homeEntry]) => {
        setIsHome(homeEntry.isIntersecting);
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
          className='min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'
          ref={homeRef}
        >
          <div
            className='translate-x-[-500px] transition-all duration-700 opacity-0'
            ref={introRef}
          >
            <p className='py-2 text-4xl font-semibold font-sans'>Hi There !</p>

            <p className='text-4xl py-2 font-semibold font-sans'>
              I&apos;m a web{" "}
              <span className='text-[#159e6e] dark:text-[#17c1ff]'>
                {" "}
                Developer<span className='text-white'>|</span>
              </span>
            </p>
            <div className='mt-5 md:mt-10 flex gap-3'>
              <button className='text-white text-xl font-semibold rounded bg-red-400 hover:bg-red-500 px-2 py-1'>
                Hire me
              </button>
              <button className='text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1'>
                Download CV
              </button>
            </div>
          </div>

          <div
            className='bg-[url(/images/profile3.png)] translate-x-[500px] transition-all opacity-0 duration-700 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-cover m-auto md:m-0 mt-[40px] md:mt-0'
            ref={profileRef}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
