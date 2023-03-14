import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (true) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
