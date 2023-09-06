import React, { Fragment } from "react";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <Fragment>
      <div>
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-3'>
          Get In Touch
        </h2>

        <div className='flex shadow-sm shadow-zinc-300 dark:shadow-zinc-700 pb-[30px] px-[20px] md:px-[200px] justify-between items-center'>
          <Image
            alt='developer'
            className=''
            height={400}
            src={"/images/developer.png"}
            width={400}
          />

          <form
            action=''
            className='flex flex-col gap-2 shadow-lg shadow-zinc-300 dark:shadow-zinc-700 p-4 m-2'
            method='post'
          >
            <label className='mt-2' htmlFor='name'>
              Name
            </label>
            <input
              className='py-1 px-2 dark:bg-gray-900 outline-none rounded border dark:border-gray-500  border-gray-400 w-[350px] '
              placeholder='Write You Name'
              type='text'
            />

            <label className='mt-2' htmlFor='subject'>
              Subject
            </label>
            <input
              className='py-1 px-2 dark:bg-gray-900 outline-none rounded border dark:border-gray-500  border-gray-400 w-[350px]'
              placeholder='Write You Subject'
              type='text'
            />

            <label className='mt-2' htmlFor='message'>
              Message
            </label>
            <textarea
              className='py-1 px-2 dark:bg-gray-900 outline-none rounded border dark:border-gray-500  border-gray-400 w-[350px]'
              cols='30'
              id=''
              name='message'
              placeholder='Write Your Message'
              rows='3'
            />
            <button
              className='py-1 px-2 bg-red-400 hover:bg-red-500 rounded mt-2 text-white'
              type='submit'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default GetInTouch;
