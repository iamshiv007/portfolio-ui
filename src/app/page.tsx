import React, { Fragment } from "react";
import dynamic from "next/dynamic";

import Theme from "./components/others/theme/Theme";
import Loader from "./components/layout/loader/Loader";
const Navbar = dynamic(() => import("./components/layout/navbar/Navbar"));
const MyHome = dynamic(() => import("./pages/home/Home"), {
  loading: () => <Loader height={"100vh"} />,
});
const SocialMedia = dynamic(
  () => import("./components/others/socialMedia/SocialMedia")
);
const About = dynamic(() => import("./pages/about/About"), {
  loading: () => <Loader height={"100vh"} />,
});
const TechStack = dynamic(() => import("./pages/techStack/TechStack"), {
  loading: () => <Loader height={"550px"} />,
});
const Education = dynamic(() => import("./pages/education/Education"), {
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
          {/* Education */}
          <Education />
        </div>
      </Theme>
    </Fragment>
  );
}
