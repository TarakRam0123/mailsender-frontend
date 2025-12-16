import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Welcome from "../components/Welcome";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";
import Landingpage from "../pages/Landingpage";

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
            element: <Landingpage />,
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
