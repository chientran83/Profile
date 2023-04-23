import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FC } from "react";
import DefaultLayout from "../components/DefaultLayout";
import Home from "../modules/Home";
import Project from "../modules/Project";

const AppRoutes: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "project/:projectId",
          element: <Project />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
