import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <header>
      <nav className='navigation'>
        <ul>
          <li>
            <Link to='/journeys'>Journeys</Link>
          </li>
          <li>
            <Link to='/stations'>Stations</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;