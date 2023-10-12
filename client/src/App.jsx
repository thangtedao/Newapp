import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, Login, Register } from "../src/pages/index.js";

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
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
