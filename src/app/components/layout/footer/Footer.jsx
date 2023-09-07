import React, { Fragment } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <Fragment>
      <div className='flex flex-col md:flex-row gap-3 justify-between px-[20px] py-[30px] items-start md:items-center'>
        <div className='flex flex-col'>
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
          <Link
            className='hover:underline'
            href='https://nextjs.org/docs'
            target='_blank'
          >
            NextJS
          </Link>
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
