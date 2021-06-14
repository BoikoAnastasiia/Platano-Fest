import MainContainer from '../../Сomponents/MainContainer';
import './HomePage.scss';
import Vk from '../../Icons/Vk';
import Ig from '../../Icons/Ig';
import Tg from '../../Icons/Tg';
import Logo from '../../Icons/Logo';
import MusicNearTheSea from '../../Icons/MusicNeartheSea';

export default function HomePage() {
  return (
    <div className="homepage-wraper">
      <MainContainer>
        <nav>
          <div className="nav-wrapper">
            <svg
              viewBox="0 0 100 80"
              width="17"
              height="25"
              className="icon-social"
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>

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
        </main>
      </MainContainer>
    </div>
  );
}
