import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/about" activeclassname="active">About Me</NavLink>
        </li>
        <li>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
        </li>
        <li>
            <NavLink to="/resume" activeclassname="active">Resume</NavLink>
        </li>
        <li>
            <NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
