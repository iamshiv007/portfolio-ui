import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const MyHome = dynamic(() => import("./pages/Home"));

export default function Home() {
  return (
    <Fragment>
      <MyHome />
    </Fragment>
  );
}
