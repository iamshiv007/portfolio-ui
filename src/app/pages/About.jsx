import Image from "next/image";
import React, { Fragment } from "react";
import { FaUserCheck } from "react-icons/fa";

const About = () => {
  return (
    <Fragment>
      <section id='about'>
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center gap-3'>
          <FaUserCheck /> About me
        </h2>
        <div className='py-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px] shadow-zinc-300 dark:shadow-zinc-700 shadow-xl'>
          <div>
            <Image
              alt='photo'
              className='rounded shadow-lg shadow-gray-400 dark:shadow-gray-600 bg-gray-400'
              height={100}
              src='/images/profile2.jpg'
              width={260}
            />
          </div>

          <div className='text-lg w-[50%]'>
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

            <p className='text-base mt-2 justify-evenly'>
              I didn&apos;t complete my college for some reason, but I&apos;ve
              learned coding and programming by myself through YouTube and other
              internet resources. I&apos;m definitely aiming to achieve
              something big in my life. I am a consistent learner and a strong
              believer. I&apos;ve worked on numerous React, Next, and MERN stack
              projects.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
