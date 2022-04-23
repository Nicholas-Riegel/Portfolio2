import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>Home</h1>
      </Link>
      <h1 id='nav-a-resume'>
        <a href="https://drive.google.com/file/d/1YZmmZRzDi4ZX-E_zRfhhxAoX5wn7mUYj/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      </h1>
      <Link to='/contact'>
        <h1>Contact</h1>
      </Link>
    </nav>
  )
}

export default Nav