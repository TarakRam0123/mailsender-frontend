import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import PageLoader from "./PageLoader";

const Welcome = lazy(() => import("../pages/Welcome"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Messages = lazy(() => import("../pages/Messages"));
const Landingpage = lazy(() => import("../pages/Landingpage"));
const Provider = lazy(() => import("../pages/Provider"));
const Profile = lazy(() => import("../pages/Profile"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Welcome />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Register />
          </Suspense>
        ),
      },

      /* =========================
         Protected Routes
      ========================= */
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "home",
            element: (
              <Suspense fallback={<PageLoader />}>
                <Messages />
              </Suspense>
            ),
          },
          {
            path: "mail",
            children: [
              {
                path: "provider",
                element: (
                  <Suspense fallback={<PageLoader />}>
                    <Provider />
                  </Suspense>
                ),
              },
              {
                path: "sendmail",
                element: (
                  <Suspense fallback={<PageLoader />}>
                    <Landingpage />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<PageLoader />}>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },

      {
        path: "*",
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
