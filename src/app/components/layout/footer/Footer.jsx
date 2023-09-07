import React, { Fragment } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <Fragment>
      <div className='px-[20px] py-[30px] flex flex-col md:flex-row justify-between items-start md:items-center gap-3'>
        <div className='flex flex-col'>
          {/* Github repository */}
          <Link
            className='hover:underline'
            href='https://github.com/iamshiv007/portfolio-ui'
            target='_blank'
          >
            Contribute - Create a fork
          </Link>
          <Link
            className='hover:underline'
            href='https://github.com/iamshiv007/portfolio-ui'
            target='_blank'
          >
            Give it a Star
          </Link>
        </div>

        <div>
          <p>Made for Devlopers by Developers ❤️️</p>
        </div>

        <div className='flex flex-col'>
          {/* NextJS official */}
          <Link
            className='hover:underline'
            href='https://nextjs.org/docs'
            target='_blank'
          >
            NextJS
          </Link>
          {/* TailwindCSS official */}
          <Link
            className='hover:underline'
            href='https://tailwindcss.com'
            target='_blank'
          >
            Tailwind CSS
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
