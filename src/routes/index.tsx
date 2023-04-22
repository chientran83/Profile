import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FC } from "react";
import DefaultLayout from "../components/DefaultLayout";
import Home from "../modules/Home";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
