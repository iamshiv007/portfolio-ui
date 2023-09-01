import Image from "next/image";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className='min-h-[100vh] flex items-center mx-[200px] justify-between'>
        <div>
          <p className='text-5xl py-2 font-semibold'>Hi,</p>
          <p className='text-5xl py-2 font-semibold'>I&apos;m Shivraj</p>
          <p className='text-5xl py-2 font-semibold'>
            a web <span className='text-[#3498db]'> Developer</span>
          </p>
        </div>

        <div>
          <Image
            alt='profile'
            className='rounded-full'
            height={300}
            src='/images/profile.png'
            width={300}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
