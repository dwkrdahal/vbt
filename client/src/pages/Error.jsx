import { NavLink } from 'react-router-dom';
export default function Error() {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! It seems like pahe yiou're tryind to access doesn't exist.
            If you believe there ia an issue, fell free to report it, and we'll 
            look into it
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
