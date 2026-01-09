import React from "react";
import { CircularProgress } from "@mui/material";

const PageLoader = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="success" />
    </div>
  );
};

export default PageLoader;
