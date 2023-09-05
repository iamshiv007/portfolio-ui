"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";

import { EducationData } from "../../portfolioData/education/EducationData";

const Education = () => {
  const [isEducation, setIsEducation] = useState(false);
  const educationRef = useRef();
  const educationBoxesRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const educationObserver = new IntersectionObserver(
      ([educationEntry]) => {
        setIsEducation(educationEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      }
    );

    educationObserver.observe(educationRef.current);

    if (isEducation) {
      educationBoxesRef.current.classList.add("educationBoxes");
    } else {
      educationBoxesRef.current.classList.remove("educationBoxes");
    }
  }, [isEducation]);

  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='education'
        ref={educationRef}
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center gap-3'>
          <IoSchoolSharp /> Education
        </h2>

        <div
          className='hideEdcationBoxes py-[30px] px-[20px] md:px-[100px] lg:px-[200px] flex flex-col gap-[50px]'
          ref={educationBoxesRef}
        >
          {EducationData.map((education) => (
            <div
              className='transition-all duration-700 flex border border-zinc-300 dark:border-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700 rounded gap-6'
              key={education.name}
            >
              <Image
                alt={education.name}
                className='hidden md:block bg-blue-600'
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
