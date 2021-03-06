import MainContainer from '../../Сomponents/MainContainer';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import MainLogo from './images/main-logo.png';
import './HomePage.scss';
import Social from '../../Сomponents/Social';

import MusicNearTheSea from '../../Icons/MusicNeartheSea';
import SideBar from '../../Сomponents/SideBar';

export default function HomePage() {
  const [showSidebar, setShowSideBar] = useState(false);
  const toggleModal = useCallback(() => {
    setShowSideBar(prevShowSideBar => !prevShowSideBar);
  }, []);

  return (
    <div id="homepage-wraper">
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
            <Social className="icons-wrapper" />
          </div>
        </nav>
        <main>
          {showSidebar && <SideBar onClose={toggleModal} />}

          <div className="hero-wrapper">
            <img src={MainLogo} alt="logo" className="main-logo" />
            <div className="music-wrapper">
              <MusicNearTheSea className="MusicNearTheSea" />
            </div>
            <div className="date-wrapper">
              <p className="date-number">2-3</p>
              <p className="date-month">июля</p>
            </div>
          </div>

          <Link to="/buy-tickets" className="test">
            Купить билет
          </Link>
        </main>
      </MainContainer>
    </div>
  );
}
