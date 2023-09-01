import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const MyHome = dynamic(() => import("./pages/Home"));
const SocialMedia = dynamic(() => import("./components/others/SocialMedia"));
const Navbar = dynamic(() => import("./components/layout/Navbar"));

export default function Home() {
  return (
    <Fragment>
      {/* Home */}
      <MyHome />
      {/* SocialMedia */}
      <SocialMedia />
      {/* Navbar */}
      <Navbar/>
    </Fragment>
  );
}
