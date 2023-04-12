import { Outlet } from "react-router-dom";

import React from "react";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
    <main className="App">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
