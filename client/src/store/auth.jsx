import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  // API = "https://localhost:3000/api";
  const API = import.meta.env.VITE_APP_URI_API;

  //list of URL called
  const AuthURL = `${API}/auth/user`;

  // console.log(API);

  // Store token in local storage
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // converting into boolean
  let isLoggedIn = !!token;

  // Logout function
  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  //jwt Authentication - to get loggedin user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(AuthURL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      // console.log(response);

      if (response.ok) {
        const data = await response.json();
        // console.log("datahere",data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error authentication");
    }
  };

  // Fetch user data when token changes
  useEffect(() => {
    userAuthentication();
  }, [token]);

  // checking whether data is set or not
  // useEffect(() => {
  //   console.log("User state updated:", user);
  // }, [user]);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        logoutUser,
        authorizationToken,
        isLoggedIn,
        user,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
