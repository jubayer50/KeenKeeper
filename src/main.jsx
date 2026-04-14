import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router";
import { ToastContainer } from "react-toastify";
import TargetFriendContextProvider from "./Components/ContextAPI/TargetFriendContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TargetFriendContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </TargetFriendContextProvider>
  </StrictMode>,
);
