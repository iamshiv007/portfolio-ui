"use client";
import React, { Fragment, useState } from "react";
import { MdWork } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsArrowDownCircle } from "react-icons/bs";

import { ExperienceData } from "../../portfolioData/experience/ExperienceData";

const Experience = () => {
  const [desc, setDesc] = useState("");

  return (
    <Fragment>
      <section id='experience'>
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center gap-3'>
          <MdWork /> Experience
        </h2>

        <div className='pb-[30px] px-[20px] '>
          {ExperienceData.map((experience, index) =>
            experience.side === "left" ? (
              <div
                className={`md:flex gap-2 items-end ${
                  index !== 0 ? "mt-7" : ""
                }`}
                key={experience.company}
              >
                <div
                  className='md:w-[45%] cursor-pointer p-3 border border-zinc-300 dark:border-zinc-700 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm rounded'
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description
                    )
                  }
                >
                  <div className='flex justify-between gap-2'>
                    <p className='text-xl md:text-2xl font-bold text-amber-600'>
                      {experience.companyName}
                    </p>
                    <p className='flex gap-2 items-center text-blue-500'>
                      <ImLocation /> {experience.location}
                    </p>
                  </div>

                  <div className='flex justify-between text-gray-600 dark:text-gray-400 gap-2 mt-2'>
                    <p className='font-semibold'>{experience.role}</p>
                    <p>{experience.fromTo}</p>
                  </div>

                  <p
                    className='mt-2 text-justify transition-all duration-500 overflow-hidden text-gray-700 dark:text-gray-500'
                    style={
                      desc == experience.description
                        ? { maxHeight: "400px" }
                        : { maxHeight: "0px" }
                    }
                  >
                    {experience.description}
                  </p>
                </div>
                <button
                  className='transition-all duration-500 hidden md:block'
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description
                    )
                  }
                  style={
                    desc === experience.description
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                >
                  <BsArrowDownCircle size={22} />
                </button>
              </div>
            ) : (
              <div
                className='cursor-pointer md:flex justify-end items-end mt-7 gap-2'
                key={experience.companyName}
                onClick={() =>
                  setDesc(
                    desc === experience.description
                      ? ""
                      : experience.description
                  )
                }
              >
                <button
                  className='transition-all duration-500 hidden md:block'
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description
                    )
                  }
                  style={
                    desc === experience.description
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                >
                  <BsArrowDownCircle size={22} />
                </button>
                <div className='md:w-[45%] p-3 border border-zinc-300 dark:border-zinc-700 shadow-zinc-300 dark:shadow-zinc-700 shadow-smrounded'>
                  <div className='flex justify-between gap-2'>
                    <p className='text-xl md:text-2xl font-bold text-amber-600'>
                      {experience.companyName}
                    </p>
                    <p className='flex gap-2 items-center text-blue-500'>
                      <ImLocation /> {experience.location}
                    </p>
                  </div>

                  <div className='flex justify-between text-gray-600 dark:text-gray-400 mt-2 gap-2'>
                    <p className='font-semibold'>{experience.role}</p>
                    <p>{experience.fromTo}</p>
                  </div>
                  <p
                    className='mt-2 overflow-hidden transition-all duration-500 text-justify text-gray-700 dark:text-gray-500'
                    style={
                      desc == experience.description
                        ? { maxHeight: "400px" }
                        : { maxHeight: "0px" }
                    }
                  >
                    {experience.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
