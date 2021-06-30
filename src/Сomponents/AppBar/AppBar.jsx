import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SmallLogo from '../../../src/Icons/SmallLogo';
import './AppBar.scss';

export default function AppBar() {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link exact to="/">
              <SmallLogo />
            </Link>
          </li>
          <li>
            <NavLink
              exact
              to="/artists"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              артисты
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/information"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              информация
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="/map"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              карта
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contacts"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              контакты
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/buy-tickets"
              className="NavButton"
              activeClassName="NavButton--active"
            >
              купить билеты
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
