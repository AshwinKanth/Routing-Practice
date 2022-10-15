import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-logo"
        />
        <p className="wave-name">Wave</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
