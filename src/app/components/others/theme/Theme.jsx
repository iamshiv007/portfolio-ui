"use client";
import React, { Fragment, useContext } from "react";

import { ThemeContext } from "../../../context/ThemeContext";

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <div className={theme === "dark" ? "dark" : null}>{children}</div>
    </Fragment>
  );
};

export default Theme;
