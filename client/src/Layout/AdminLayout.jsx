import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaMessage, FaPhotoFilm, FaServicestack, FaHouse } from "react-icons/fa6";
import { useAuth } from "../store/auth";

function AdminLayout() {

  const { user, isLoading} = useAuth();

  if(isLoading){
    return <h1>Loading . . . </h1>
  }

  console.log("user data",user);

  if(!user.isAdmin){
    return( <Navigate to="/" />)
  }

  return (
    <>
      <nav>
        <div className="container">
          <ul>
            <li>
              <NavLink to = "/"> <FaHouse/> Home</NavLink>
            </li>
            <li><NavLink to = "/admin/users"> <FaUsers/> Users</NavLink></li>
            <li><NavLink to = "/admin/contacts"> <FaMessage/> Contacts</NavLink></li>
            <li><NavLink to = "/admin/projects"> <FaPhotoFilm/> Projects</NavLink></li>
            <li><NavLink to = "/admin/services"> <FaServicestack/> Services</NavLink></li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default AdminLayout;
