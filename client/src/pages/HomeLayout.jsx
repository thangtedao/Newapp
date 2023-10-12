import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <h2>navbar</h2>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
