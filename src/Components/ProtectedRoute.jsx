import React from "react";
import { UserAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  if (!user) {
    return navigate("/signup");
  } else {
    return children;
  }
};

export default ProtectedRoute;
