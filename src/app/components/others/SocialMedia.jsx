import React, { Fragment } from "react";
import Link from "next/link";

import { SocialMediaData } from "../../portfolioData/SocialMediaData";

const SocialMedia = () => {
  return (
    <Fragment>
      <div className='absolute left-10 bottom-3'>
        {SocialMediaData.map((social) => (
          <div
            className={"text-xl text-white rounded-full w-fit p-2 mb-3"}
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
