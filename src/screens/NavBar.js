import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/navBar.scss'

const NavBar = () => {
  const [unfold, setUnfold] = useState(false)

  return (
    <nav className={unfold ? "nav-active" : ""}>
      <div className='logo'>
        <h4>My Portfolio</h4>
      </div>
      <ul className='nav-links'>
        <li>
          <NavLink exact to={'/story'} activeClassName={'active'}>
            Story
          </NavLink>
        </li>
        <li>
          <NavLink to={'/projects'} activeClassName={'active'}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} activeClassName={'active'}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div onClick={() => setUnfold(!unfold)} className={`burger ${unfold ? "unfold" : ""}`}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default NavBar
