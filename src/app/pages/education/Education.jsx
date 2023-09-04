import Image from "next/image";
import React, { Fragment } from "react";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='education'
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center gap-3'>
          <IoSchoolSharp /> Education
        </h2>

        <div className='py-[30px] px-[20px] md:px-[100px] lg:px-[200px] flex flex-col gap-[50px]'>
          <div className='flex border border-zinc-300 dark:border-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700 rounded gap-6'>
            <Image
              alt='college'
              className='hidden md:block'
              height={150}
              src='https://shiv-s-portfolio.vercel.app/_next/image?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQ3xSTnbK57kUx2XgDd_zzXJp5uXPSNUmeZ9g%26usqp%3DCAUF&w=384&q=75'
              width={150}
            />
            <div className='flex flex-col gap-2 p-3 md:p-1'>
              <p className='text-3xl font-bold text-[#159e6e] dark:text-[#17c1ff]'>
                Bachelor of Science
              </p>
              <p>GOVERNMENT COLLEGE, KOTA</p>
              <p className='text-xl text-blue-700'>
                2021 - 2022 &nbsp; | &nbsp; Dropped in second year
              </p>
            </div>
          </div>
          <div className='flex border border-zinc-300 dark:border-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700 rounded gap-6'>
            <Image
              alt='Senior Secondary'
              className='hidden md:block'
              height={150}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5r_rqg74FNoa-77Q9_bEqu3AyYqK8ngvTA&usqp=CAU'
              width={150}
            />
            <div className='flex flex-col gap-2 p-3 md:p-1'>
              <p className='text-3xl font-bold text-[#159e6e] dark:text-[#17c1ff]'>
                Senior Secondary Examination
              </p>
              <p>SWAMI TEONRAM ALOK SR. SEC. SCHOOL DADABARI, KOTA</p>
              <p className='text-xl text-blue-700'>
                2021 &nbsp; | &nbsp; 96.80%
              </p>
            </div>
          </div>
          <div className='flex border border-zinc-300 dark:border-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700 rounded gap-6'>
            <Image
              alt='avm'
              className='hidden md:block'
              height={150}
              src='https://shiv-s-portfolio.vercel.app/_next/image?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQpCDvRmnjiBTgBd9WyPHlJHEPzRz2shaS3YQ%26usqp%3DCAU&w=384&q=75'
              width={150}
            />
            <div className='flex flex-col gap-2 p-3 md:p-1'>
              <p className='text-3xl font-bold text-[#159e6e] dark:text-[#17c1ff]'>
                Secondary Examination
              </p>
              <p>A.V.M. SECONDARY SCHOOL, RAWATBHATA</p>
              <p className='text-xl text-blue-700'>
                2019 &nbsp; | &nbsp; 93.33%
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Education;
