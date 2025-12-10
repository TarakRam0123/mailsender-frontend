import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Welcome from "../components/Welcome";

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
    ],
  },
]);
