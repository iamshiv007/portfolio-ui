"use client";
import React, { useState, createContext } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
