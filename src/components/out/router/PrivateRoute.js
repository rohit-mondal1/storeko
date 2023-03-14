import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const {loder} = useContext(AuthContext)
  const state = useSelector(state => state);
  const user = state.user;
  if(loder){
    return <div>
      <div className="w-16 mx-auto my-20 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    </div>
  }

  if (user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
