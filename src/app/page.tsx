import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const MyHome = dynamic(() => import("./pages/Home"));
const SocialMedia = dynamic(() => import("./components/SocialMedia"));

export default function Home() {
  return (
    <Fragment>
      {/* Home */}
      <MyHome />
      {/* SocialMedia */}
      <SocialMedia />
    </Fragment>
  );
}
