import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Login,
  Register,
  Error,
  DashboardLayout,
  AddJob,
  Stats,
  Profile,
  Admin,
} from "../src/pages/index.js";

import { action as register } from "../src/pages/Register.jsx";
import { action as login } from "../src/pages/Login.jsx";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        // set mac dinh page khi vao duong link '/'
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        //action must be return
        action: register,
      },
      {
        path: "login",
        element: <Login />,
        action: login,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        children: [
          { index: true, element: <AddJob /> },
          { path: "all-jobs", element: <Stats /> },
          { path: "stats", element: <Stats /> },
          { path: "profile", element: <Profile /> },
          { path: "admin", element: <Admin /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
