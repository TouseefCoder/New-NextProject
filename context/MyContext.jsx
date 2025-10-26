"use client";

import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [navLeft, setNavLeft] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const [rightNav, setRightNav] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <MyContext.Provider
      value={{
        navLeft,
        setNavLeft,
        cartOpen,
        setCartOpen,
        user,
        setUser,
        rightNav,
        setRightNav,
        scrolled,
        setScrolled,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
