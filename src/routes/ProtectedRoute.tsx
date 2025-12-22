import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetUserQuery } from "../redux/apiSlice";

// const ProtectedRoute: React.FC = () => {
//   const isAuthenticated = !!sessionStorage.getItem("token"); // 👈 change as needed
//   const location = useLocation();

//   if (!isAuthenticated) {
//     // redirect to /login and remember where user tried to go
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;
const ProtectedRoute: React.FC = () => {
  const { data, isLoading, isError } = useGetUserQuery();

  if (isLoading) return null; // or loader

  if (isError || !data?.status) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
