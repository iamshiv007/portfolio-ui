import Image from "next/image";
import React, { Fragment } from "react";
import { IoSchoolSharp } from "react-icons/io5";

import { EducationData } from "../../portfolioData/education/EducationData";

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
          {EducationData.map((education) => (
            <div
              className='flex border border-zinc-300 dark:border-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700 rounded gap-6'
              key={education.name}
            >
              <Image
                alt={education.name}
                className='hidden md:block'
                height={150}
                src={education.image}
                width={150}
              />
              <div className='flex flex-col gap-2 p-3 md:p-1'>
                <p className='text-3xl font-bold text-[#159e6e] dark:text-[#17c1ff]'>
                  {education.name}
                </p>
                <p>{education.schoolOrCollege}</p>
                <p className='text-xl text-blue-700'>
                  {education.fromTo} &nbsp; | &nbsp;{" "}
                  {education.statusOrPrecentage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Education;
