import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      { path: "/timeline", element: <Timeline></Timeline> },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
    ],
  },
]);
