import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  // Store token in local storage
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  let isLoggedIn = !!token;

  // Logout function
  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  //jwt Authentication - to get loggedin user data
  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/auth/user`, {
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
      }
    } catch (error) {
      console.log("error authentication");
    } 
  };

  //fetch services
  const fetchServices = async () => {
    const URL = "http://localhost:3000/api/data/service";

    try {
      const response = await fetch(URL, {
        method: "GET",
      });

      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data.response);
        setServices(data.response);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };

  //fetch projects
  const fetchProjects = async () => {
    const projectURL = "http://localhost:3000/api/project";
    try {
      const response = await fetch(projectURL, {
        method: "GET",
      });
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProjects(data)
      }
    } catch (error) {
      console.log(`Project frontend error: ${error}`);
    }
  };

  // Fetch user data when token changes
  useEffect(() => {
    fetchServices();
    fetchProjects();
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
        services,
        projects,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
