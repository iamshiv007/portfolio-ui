"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

import { ProjectsData } from "../../portfolioData/projects/ProjectsData";

const Projects = () => {
  const [height1, setHeight1] = useState("");
  const [isProjects, setIsProjects] = useState(false);
  const projectsRef = useRef();
  const projectBoxesRef = useRef();

  useEffect(() => {
    const projectsObserver = new IntersectionObserver(
      ([projectsEntry]) => {
        setIsProjects(projectsEntry.isIntersecting);
      },
      {
        rootMargin: "-100px",
      }
    );

    projectsObserver.observe(projectsRef.current);

    if (isProjects) {
      projectBoxesRef.current.classList.add("pop-up-child");
    } else {
      projectBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isProjects]);

  return (
    <Fragment>
      <section id='projects' ref={projectsRef}>
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-3'>
          <CgWebsite /> Projects
        </h2>

        <div
          className='pop-down-child pb-[30px] flex flex-wrap px-[20px] gap-4 justify-around shadow-zinc-300 dark:shadow-zinc-700'
          ref={projectBoxesRef}
        >
          {ProjectsData.map((project) => (
            <div className='transition-all duration-700' key={project.name}>
              <div
                className={
                  "w-[280px] md:w-[330px] shadow-md shadow-zinc-300 dark:shadow-zinc-700 h-48 bg-no-repeat flex flex-col justify-end rounded overflow-hidden bg-cover"
                }
                onMouseLeave={() => setHeight1("")}
                onMouseMove={() => setHeight1(project.name)}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div
                  className='bg-red-600 text-center p-1 cursor-pointer'
                  onMouseLeave={() => setHeight1("")}
                  onMouseMove={() => setHeight1(project.name)}
                >
                  <p
                    className='text-white'
                    onClick={() =>
                      setHeight1(height1 === "" ? project.name : "")
                    }
                  >
                    {project.name}
                  </p>
                  <div
                    className='overflow-hidden transition-all duration-500 h-[70px] flex gap-10 justify-center items-center'
                    style={
                      height1 === project.name
                        ? { maxHeight: "200px" }
                        : { maxHeight: "0" }
                    }
                  >
                    {/* GitHub repository Link */}
                    <Link
                      className='text-xl text-white p-1 bg-gray-700 hover:bg-gray-950 rounded'
                      href={project.url}
                      target='_blank'
                    >
                      <HiExternalLink />
                    </Link>
                    {/* Application live url */}
                    <Link
                      className='text-xl text-white p-1 bg-gray-700 hover:bg-gray-950 rounded'
                      href={project.githubUrl}
                      target='_blank'
                    >
                      <BsGithub />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Tags related to project */}
              <div className='flex gap-1 mt-1'>
                {project.tags.map((tag) => (
                  <p
                    className='px-1 text-sm rounded bg-blue-500 text-white'
                    key={tag}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
