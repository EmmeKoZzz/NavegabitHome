import React from "react";
import {Outlet} from "react-router-dom";
import PathProvider from "../contexts/Path-Context";

const Layout = () => {
  return (
    <>
      <PathProvider>
      </PathProvider>
      <Outlet />
    </>
  );
};

export default Layout;