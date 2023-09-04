import Image from "next/image";
import React, { Fragment } from "react";
import { FaUserCheck } from "react-icons/fa";

const About = () => {
  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'
        id='about'
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center gap-3'>
          <FaUserCheck /> About me
        </h2>
        <div className='py-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          <div>
            <Image
              alt='photo'
              className='rounded shadow-sm shadow-gray-400 dark:shadow-gray-700 bg-gray-400 m-auto'
              height={460}
              src='/images/profile2.jpg'
              width={260}
            />
          </div>

          <div className='text-lg mt-4 md:mt-0 md:w-[50%] text-center md:text-left'>
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
