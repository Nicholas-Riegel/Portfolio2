import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
      <nav>
          <Link to="/">
              <h1>Home</h1>
          </Link>

          <h1 id="nav-a-resume">
              <a
                  href="https://docs.google.com/document/d/1-uGHbeDVb-iRwkzptZs_3j5Jw9URsztBp3KMMe48YyA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Resume
              </a>
          </h1>
          
          <h1>
              <a
                  href="https://github.com/Nicholas-Riegel  "
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  GitHub
              </a>
          </h1>

          <Link to="/contact">
              <h1>Contact</h1>
          </Link>
      </nav>
  );
}

export default Nav