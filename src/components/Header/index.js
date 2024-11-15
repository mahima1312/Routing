import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <nav className="header-container">
      <div className="logo-container">
        <img
          className="wave-img"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <p className="wave-text">Wave</p>
      </div>
      <ul className="links-container">
        <li>
          <Link className="nav-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
