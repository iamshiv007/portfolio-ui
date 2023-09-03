import React, { Fragment } from "react";
import dynamic from "next/dynamic";

import Theme from "./components/others/Theme";
import Loader from "./components/layout/loader/Loader";
const Navbar = dynamic(() => import("./components/layout/navbar/Navbar"));
const MyHome = dynamic(() => import("./pages/Home"), {
  loading: () => <Loader height={"100vh"} />,
});
const SocialMedia = dynamic(() => import("./components/others/SocialMedia"));
const About = dynamic(() => import("./pages/About"), {
  loading: () => <Loader height={"100vh"} />,
});
const TechStack = dynamic(() => import("./pages/TechStack"), {
  loading: () => <Loader height={"550px"} />,
});

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
          {/* Tech Stacks */}
          <TechStack />
        </div>
      </Theme>
    </Fragment>
  );
}
