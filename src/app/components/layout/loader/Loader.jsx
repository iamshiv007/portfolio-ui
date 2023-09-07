import React, { Fragment } from "react";

const Loader = ({ height }) => {
  return (
    <Fragment>
      <div
        className='w-full bg-white dark:bg-black flex justify-center items-center'
        style={{ height }}
      >
        {/* Loader Dots */}
        <div className='flex'>
          <div className='dot1 w-2 h-2 bg-[#159e6e] dark:bg-[#17c1ff] rounded-full' />
          <div className='dot2 w-2 h-2 bg-[#159e6e] dark:bg-[#17c1ff] rounded-full' />
          <div className='dot3 w-2 h-2 bg-[#159e6e] dark:bg-[#17c1ff] rounded-full' />
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
