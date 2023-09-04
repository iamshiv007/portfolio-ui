"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";

import { SocialMediaData } from "../../../portfolioData/socialMedia/SocialMediaData";

const SocialMedia = () => {
  const [isSocial, setIsSocial] = useState(false);
  const socialRef = useRef();

  useEffect(() => {
    const socialObserver = new IntersectionObserver(
      ([socialEntry]) => {
        setIsSocial(socialEntry.isIntersecting);
      },
      {
        rootMargin: "-60px",
      }
    );

    socialObserver.observe(socialRef.current);

    if (isSocial) {
      socialRef.current.classList.add("social-show");
    } else {
      socialRef.current.classList.remove("social-show");
    }
  }, [isSocial]);

  return (
    <Fragment>
      <div className='absolute left-10 bottom-3 social-hide' ref={socialRef}>
        {SocialMediaData.map((social) => (
          <div
            className={
              "text-xl text-white rounded-full p-2 mb-3 hover:scale-[1.2] transition-all duration-500"
            }
            key={social.name}
            style={{ background: social.color }}
          >
            <Link href={social.url} target='_blank'>
              {social.icon}
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SocialMedia;
