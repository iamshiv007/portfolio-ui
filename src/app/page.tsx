import React, { Fragment } from "react";
import dynamic from "next/dynamic";

import Theme from "./components/others/Theme";
const MyHome = dynamic(() => import("./pages/Home"));
const SocialMedia = dynamic(() => import("./components/others/SocialMedia"));
const Navbar = dynamic(() => import("./components/layout/Navbar"));

export default function Home() {
  return (
    <Fragment>
      <Theme>
        <div className='dark:bg-black dark:text-white'>
          {/* Navbar */}
          <Navbar />
          {/* Home */}
          <MyHome />
          {/* SocialMedia */}
          <SocialMedia />
        </div>
      </Theme>
    </Fragment>
  );
}
