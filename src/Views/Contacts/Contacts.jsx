import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';
import Logo from './images/LOGO_contacts.svg';
import Social from '../../Сomponents/Social';
import { Link } from 'react-router-dom';
import './Contacts.scss';

export default function Contacts() {
  return (
    <div
      style={{
        backgroundColor: '#1F1F1F',
        height: '100vh',
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <AppBar />
      <MainContainer>
        <Header text="контакты" color="#fff" />
        <div className="contacts-wrapper">
          <div className="left-contacts-wrapper">
            <ul>
              <li>
                <h2 className="contacts-mini-header">Общие вопросы</h2>
                <a href="tel:+79180573001" className="contacts-link">
                  +7 918 057-30-01
                </a>
                <a
                  href="mailto:info@platano-fest.ru"
                  className="contacts-link mail"
                >
                  info@platano-fest.ru
                </a>
              </li>
              <li>
                <h2 className="contacts-mini-header">Партнёрам</h2>
                <a href="tel:+79182103662" className="contacts-link">
                  +7 918 210-36-62
                </a>
                <a
                  href="mailto:artist@platano-fest.ru mail"
                  className="contacts-link mail"
                >
                  artist@platano-fest.ru
                </a>
              </li>
              <li>
                <h2 className="contacts-mini-header">Проложить маршрут</h2>
                <div className="contacts-btn-wrapper">
                  <a href="" className="contacts-btn">
                    яндекс карты
                  </a>{' '}
                  <a href="" className="contacts-btn">
                    google maps
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <footer>
            <div className="footer-left-wrapper">
              <Logo fill="#ffc64f" />
              <Social fill="#fff" hover="#ffc64f" />
              <p className="footer-copyright">&#169; platano fest 2021</p>
            </div>
            <div className="footer-right-wrapper">
              <ul className="nav-links">
                <li className="router-list">
                  <Link to="/artists" className="NavLink">
                    артисты
                  </Link>
                </li>
                <li className="router-list">
                  <Link to="/information" className="NavLink">
                    информация
                  </Link>
                </li>
                <li className="router-list">
                  <Link to="/buy-tickets" className="NavLink">
                    купить билеты
                  </Link>
                </li>
                <li className="router-list">
                  <Link to="/map" className="NavLink">
                    карта
                  </Link>
                </li>
                <li className="router-list">
                  <Link to="/contacts" className="NavLink">
                    контакты
                  </Link>
                </li>
              </ul>
              <a href="">Политика в отношении обработки персональных данных</a>
            </div>
          </footer>
          <div className="map-contacts-wrapper"></div>
        </div>
      </MainContainer>
    </div>
  );
}
