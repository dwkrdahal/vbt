// Import FontAwesome and necessary icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <div className="top-bar">
        <span className="location">Jawalakhel, Lalitpur, Nepal</span>
        <span className="service-hours">24 x 7</span>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/image.png" alt="Alka Hospital Pvt. Ltd." height="auto" width="auto" />
        </div>
        <ul className="nav-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Packages</a></li>
          <li><a href="#">Departments</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Vacancy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="actions">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <button className="reports-button">Reports</button>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
