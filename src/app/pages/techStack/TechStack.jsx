"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData } from "../../portfolioData/techStack/TechStackData";
import Loader from "../../components/layout/loader/Loader";

const TechStack = () => {
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [istechStack, setIsTechStack] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsTechStack(techStackEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    techStackObserver.observe(techStackRef.current);

    if (istechStack) {
      techBoxesRef.current.classList.add("techBoxes");
      buttonsRef.current.classList.add("slide-in");
    } else {
      techBoxesRef.current.classList.remove("techBoxes");
      buttonsRef.current.classList.remove("slide-in");
    }
  }, [istechStack]);

  useEffect(() => {
    const selectedSection = TechStackData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current.classList.add("techBoxes");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'
        id='techStack'
        ref={techStackRef}
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center gap-3'>
          <FaLaptopCode /> Tech Stack
        </h2>

        <div
          className='translate-x-[200px] opacity-0 transition-all duration-500 w-fit m-auto rounded-lg border border-black dark:border-white border-solid overflow-hidden'
          ref={buttonsRef}
        >
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Advance" ? "bg-[#159e6e] dark:bg-[#17c1ff]" : null
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("techBoxes");
            }}
          >
            Advance
          </button>
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Good" ? "bg-[#159e6e] dark:bg-[#17c1ff]" : null
            } transition-all border-l border-r border-black dark:border-white border-solid`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("techBoxes");
            }}
          >
            Good
          </button>
          <button
            className={`w-[100px] md:w-[150px] p-2 font-bold ${
              section === "Familiar" ? "bg-[#159e6e] dark:bg-[#17c1ff]" : null
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("techBoxes");
            }}
          >
            Familiar
          </button>
        </div>

        <div
          className='techBoxesRotate flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5'
          ref={techBoxesRef}
        >
          {sectionData.length !== 0 ? (
            sectionData.map((tech) => (
              <div
                className='transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center'
                key={tech.name}
              >
                <p>{tech.icon}</p>
                <p>{tech.name}</p>
              </div>
            ))
          ) : (
            <Loader height={"450px"} />
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default TechStack;
