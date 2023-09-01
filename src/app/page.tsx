import React, { Fragment } from "react";
import dynamic from "next/dynamic";

import Theme from "./components/others/Theme";
const Navbar = dynamic(() => import("./components/layout/Navbar"));
const MyHome = dynamic(() => import("./pages/Home"));
const SocialMedia = dynamic(() => import("./components/others/SocialMedia"));
const About = dynamic(() => import("./pages/About"));

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
          {/* About me */}
          <About />
        </div>
      </Theme>
    </Fragment>
  );
}
