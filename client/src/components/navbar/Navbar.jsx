import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth";

export default function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="">DiwarTech</NavLink>
          </div>

          <nav>
            <ul>
              {isLoggedIn && (
                <li>
                  <NavLink to="/admin"> Admin</NavLink>
                </li>
              )}

              <li>
                <NavLink to="/about"> About</NavLink>
              </li>

              <li>
                <NavLink to="/service"> Service</NavLink>
              </li>

              <li>
                <NavLink to="/project"> Project</NavLink>
              </li>

              <li>
                <NavLink to="/contact"> Contact</NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout"> Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login"> Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register"> Register</NavLink>
                  </li>{" "}
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
