import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGetUserQuery } from "../redux/apiSlice";
import PageLoader from "./PageLoader";

const ProtectedRoute: React.FC = () => {
  const { data, isLoading, isError } = useGetUserQuery();

  if (isLoading) return <PageLoader />; // or loader

  if (isError || !data?.status) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
