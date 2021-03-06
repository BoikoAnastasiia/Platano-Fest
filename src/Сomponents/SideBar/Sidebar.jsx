import './SideBar.scss';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../Views/HomePage/images/sideBarLogo.svg';
import Close from '../../Views/HomePage/images/close.svg';

export default function Sidebar({ onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div id="sidebarWrapper">
      <div className="upper-wrap">
        <Close className="close-btn" onClick={onClose} />
        <NavLink to="/">
          <Logo className="logo-sidebar" />
        </NavLink>
        <ul className="nav-links">
          <li className="router-list">
            <NavLink
              to="/artists"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              артисты
            </NavLink>
          </li>
          <li className="router-list">
            <NavLink
              to="/information"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              информация
            </NavLink>
          </li>
          <li className="router-list">
            <NavLink
              to="/buy-tickets"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              купить билеты
            </NavLink>
          </li>
          <li className="router-list">
            <NavLink
              to="/map"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              карта
            </NavLink>
          </li>
          <li className="router-list">
            <NavLink
              to="/contacts"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              контакты
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="bottom-wrap">
        <p className="bottom-text">platano fest</p>
        <p className="bottom-text">поселок дюрсо</p>
        <p className="bottom-text">2-3 июля 2021</p>
      </div>
    </div>
    // </div>
  );
}
