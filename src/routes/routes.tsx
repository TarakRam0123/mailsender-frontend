import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";
import Messages from "../pages/Messages";
import Landingpage from "../pages/Landingpage";
import Profile from "../pages/Profile";
import Provider from "../pages/Provider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 👈 Layout with Navbar
    children: [
      {
        index: true, // 👈 default route: "/"
        element: <Welcome />,
      },
      {
        path: "login", // "/login"
        element: <Login />,
      },
      {
        path: "register", // "/register"
        element: <Register />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "home",
            element: <Messages />,
          },
          {
            path: "mail",

            children: [
              {
                path: "provider",
                element: <Provider />,
              },
              {
                path: "sendmail",
                element: <Landingpage />,
              },
            ],
          },

          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
