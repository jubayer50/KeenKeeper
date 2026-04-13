import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      { path: "/friend-details/:Id", element: <FriendDetails></FriendDetails> },

      { path: "/timeline", element: <Timeline></Timeline> },

      {
        path: "/stats",
        element: <Stats></Stats>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
