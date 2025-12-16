import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("token"); // 👈 change as needed
  const location = useLocation();

  if (!isAuthenticated) {
    // redirect to /login and remember where user tried to go
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
