// import "./loader.css";
import React, { Fragment } from "react";

const Loader = ({ height }) => {
  return (
    <Fragment>
      <div
        className='w-full bg-white dark:bg-black flex items-center justify-center'
        style={{ height }}
      >
        <div className='flex'>
          <div className='dot1 w-2 h-2 rounded-full bg-[#159e6e] dark:bg-[#17c1ff]' />
          <div className='dot2 w-2 h-2 rounded-full bg-[#159e6e] dark:bg-[#17c1ff]' />
          <div className='dot3 w-2 h-2 rounded-full bg-[#159e6e] dark:bg-[#17c1ff]' />
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
