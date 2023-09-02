"use client";
import React, { Fragment, useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData } from "../portfolioData/TechStackData";

const TechStack = () => {
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    const selectedSection = TechStackData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);
  }, [section]);

  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'
        id='techStack'
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center gap-3'>
          <FaLaptopCode /> Tech Stack
        </h2>

        <div className='w-fit m-auto rounded-lg border border-black dark:border-white border-solid overflow-hidden'>
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Advance" ? "bg-[#159e6e] dark:bg-[#17c1ff]" : null
            } transition-all`}
            onClick={(e) => setSection(e.target.innerText)}
          >
            Advance
          </button>
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Good" ? "bg-[#159e6e] dark:bg-[#17c1ff]" : null
            } transition-all border-l border-r border-black dark:border-white border-solid`}
            onClick={(e) => setSection(e.target.innerText)}
          >
            Good
          </button>
          <button
            className={`w-[100px] md:w-[150px] p-2 font-bold ${
              section === "Familiar" ? "bg-[#159e6e] dark:bg-[#17c1ff]" : null
            } transition-all`}
            onClick={(e) => setSection(e.target.innerText)}
          >
            Familiar
          </button>
        </div>

        <div className='flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center gap-5'>
          {sectionData.map((tech) => (
            <div
              className='px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center'
              key={tech.name}
            >
              <p>{tech.icon}</p>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default TechStack;
