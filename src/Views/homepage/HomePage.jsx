import MainContainer from '../../Сomponents/MainContainer';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';

import './HomePage.scss';
import Vk from '../../Icons/Vk';
import Ig from '../../Icons/Ig';
import Tg from '../../Icons/Tg';
import Logo from '../../Icons/Logo';
import MusicNearTheSea from '../../Icons/MusicNeartheSea';
import SideBar from '../../Сomponents/SideBar';

export default function HomePage() {
  const [showSidebar, setShowSideBar] = useState(false);
  const toggleModal = useCallback(() => {
    setShowSideBar(prevShowSideBar => !prevShowSideBar);
  }, []);

  return (
    <div className="homepage-wraper">
      <MainContainer>
        <nav>
          <div className="nav-wrapper">
            {!showSidebar && (
              <svg
                onClick={toggleModal}
                viewBox="0 0 100 80"
                width="17"
                height="25"
                className="icon-social menu-btn"
              >
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            )}

            <ul className="icons-wrapper">
              <li className="nav-item">
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Vk />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Ig />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://telegram.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Tg />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          {showSidebar && <SideBar onClose={toggleModal} />}

          <div className="hero-wrapper">
            <Logo />
            <div className="music-wrapper">
              <MusicNearTheSea className="MusicNearTheSea" />
            </div>
            <div className="date-wrapper">
              <p className="date-number">2-3</p>
              <p className="date-month">июля</p>
            </div>
          </div>
          <div className="test">
            <Link to="/buy-tickets">Купить билет</Link>
          </div>
        </main>
      </MainContainer>
    </div>
  );
}
