import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoHG from '../../images/logo-hg.png'
import LogoSubtitle from '../../images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCircleUser, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoHG} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo subtitle" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHouseChimney} color="#000000" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faCircleUser} color="#000000" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faPaperPlane} color="#000000" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/harveygleeson"
          >
            <FontAwesomeIcon icon={faGithub} color="#000000" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/harvey-gleeson/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#000000" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
