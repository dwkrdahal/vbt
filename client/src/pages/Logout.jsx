import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Logout = () => {
  const { logoutUser } = useAuth();
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    if (!loggedOut) {
      logoutUser();
      toast.success("Logged Out!", { toastId: "logout-toast" });
      setLoggedOut(true);
    }
  }, [logoutUser, loggedOut]);

  console.log("Logout component rendered");

  return <Navigate to= "/login" />;
};
