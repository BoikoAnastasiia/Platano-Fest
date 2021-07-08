import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';
import Logo from './images/LOGO_contacts.svg';
import Social from '../../Сomponents/Social';
import { Link } from 'react-router-dom';
import './Contacts.scss';
import GoogleMapComp from '../../Сomponents/GoogleMap';

export default function Contacts() {
  return (
    <div
      style={{
        backgroundColor: '#1F1F1F',
        backgroundSize: 'cover',
        color: 'white',
        height: '100%',
        weight: '100%',
      }}
    >
      <AppBar />
      <MainContainer>
        <Header text="контакты" color="#fff" />
        <div className="contacts-wrapper">
          <div className="left-contacts-side">
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
                    <a
                      href="https://yandex.ru/maps/?from=api-maps&ll=37.558275%2C44.680886&mode=usermaps&origin=jsapi_2_1_78&um=constructor%3A24146f709d6515921f8cfd04efcb22da773672dd494f34f331d8daa625b35c6d&z=16"
                      className="contacts-btn"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      яндекс карты
                    </a>
                    <a
                      href="https://www.google.ru/maps/dir/%D0%90%D0%B2%D1%82%D0%BE%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB,+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A7%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE,+%D0%9D%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA/%D0%90%D0%B1%D1%80%D0%B0%D1%83-%D0%94%D1%8E%D1%80%D1%81%D0%BE,+%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+353995/@44.7330762,37.6225948,12z/data=!4m13!4m12!1m5!1m1!1s0x40f1f93a85a62931:0x1bd1b27d7feca204!2m2!1d37.7627881!2d44.7215967!1m5!1m1!1s0x40f200487f5e1d9f:0xa93584f9dbf3ea68!2m2!1d37.5999358!2d44.7013725"
                      className="contacts-btn"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      google maps
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <footer className="contacts-footer">
              <div className="footer-left-wrapper">
                <Logo fill="#ffc64f" />
                <Social fill="#fff" hover="#ffc64f" />
                <p className="footer-copyright">&#169; platano fest 2021</p>
              </div>
              <div className="footer-right-wrapper">
                <ul className="contacts-nav-links">
                  <li className="contacts-nav-list">
                    <Link to="/artists" className="contacts-nav-list-item">
                      артисты
                    </Link>
                  </li>
                  <li className="contacts-nav-list">
                    <Link to="/information" className="contacts-nav-list-item">
                      информация
                    </Link>
                  </li>
                  <li className="contacts-nav-list">
                    <Link to="/buy-tickets" className="contacts-nav-list-item">
                      купить билеты
                    </Link>
                  </li>
                  <li className="contacts-nav-list">
                    <Link to="/map" className="contacts-nav-list-item">
                      карта
                    </Link>
                  </li>
                  <li className="contacts-nav-list">
                    <Link to="/contacts" className="contacts-nav-list-item">
                      контакты
                    </Link>
                  </li>
                </ul>
                <a href="https://platanos.ru/#" className="policy">
                  Политика в отношении обработки персональных данных
                </a>
              </div>
            </footer>
          </div>

          <div
            className="map-contacts-wrapper"
            style={{ width: '100%', height: '100%' }}
          >
            <GoogleMapComp />
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
