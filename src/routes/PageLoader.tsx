import React from "react";
import { CircularProgress } from "@mui/material";

const PageLoader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
      }}
    >
      <CircularProgress color="success" />
    </div>
  );
};

export default PageLoader;
