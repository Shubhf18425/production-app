import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/header";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Footer from "./components/footer";
import Adminpage from "./components/adminpage.jsx";
import Timeline from "./components/timeline.jsx";
import Userpage from "./components/userpage.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/userpage.jsx";
import { WorkoutsContextProvider } from "./components/context/WorkoutsContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Signup />
      </div>
    ),
  },
  {
    path: "/admin",
    element: (
      <div>
        <Adminpage />
      </div>
    ),
  },
  {
    path: "/timeline",
    element: (
      <div>
        <Timeline />
      </div>
    ),
  },
  {
    path: "/user",
    element: (
      <div>
      {/* <p>uhu</p> */}
        <WorkoutsContextProvider>
          <Home />
        </WorkoutsContextProvider>
      </div>
    ),
  },
  // {
  //   path: "/",
  //   element: <div><Userpage/></div>,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
