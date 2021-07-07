import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';
import './Artists.scss';
import majicool from './images/majicool.jpg';
import manu from './images/manu.jpg';
import belki from './images/belki.jpg';
import plushmoon from './images/plushmoon.jpg';

import onelove from './images/onelove.jpg';
import shishka from './images/shishka.jpg';
import ukachalo from './images/ukachalo.jpg';
import asomnia from './images/asomnia.jpg';
import misha from './images/misha.jpg';
import Social from '../../Сomponents/Social';

export default function Artists() {
  return (
    <div
      style={{ backgroundColor: '#ffc64f', height: '100vh', weight: '100vw' }}
    >
      <AppBar />
      <MainContainer>
        <Header text="хэдлайнеры" />
        <ul className="big-cards-wrapper">
          <li>
            <div className="card-wrapper">
              <img
                src={majicool}
                alt="majicool"
                width="260"
                className="artist-photo"
              />
              <h3 className="artistName">меджикул</h3>
            </div>
          </li>
          <li>
            <div className="card-wrapper">
              <img src={manu} alt="manu" width="260" className="artist-photo" />
              <h3 className="artistName">коля маню</h3>
            </div>
          </li>
          <li>
            <div className="card-wrapper">
              <img
                src={belki}
                alt="belki"
                width="260"
                className="artist-photo"
              />
              <h3 className="artistName">белки на акации</h3>
            </div>
          </li>
          <li>
            <div className="card-wrapper">
              <img
                src={plushmoon}
                alt="plushmoon"
                width="260"
                className="artist-photo"
              />
              <h3 className="artistName">plush moon</h3>
            </div>
          </li>
        </ul>

        <h2 className="artists-header">Артисты</h2>

        <ul className="small-cards-wrapper">
          <li>
            <div className="card-wrapper">
              <img
                src={onelove}
                alt="onelove"
                width="150"
                className="artist-photo-secondary"
              />
              <h3 className="artistName">One love</h3>
            </div>
          </li>
          <li>
            <div className="card-wrapper">
              <img
                src={shishka}
                alt="shishka"
                width="150"
                className="artist-photo-secondary"
              />
              <h3 className="artistName">Шиshка</h3>
            </div>
          </li>
          <li>
            <div className="card-wrapper">
              <img
                src={ukachalo}
                alt="ukachalo"
                width="150"
                className="artist-photo-secondary"
              />
              <h3 className="artistName">укачало</h3>
            </div>
          </li>
          <li>
            <div className="card-wrapper">
              <img
                src={asomnia}
                alt="asomnia"
                width="150"
                className="artist-photo-secondary"
              />
              <h3 className="artistName">асомния</h3>
            </div>
          </li>
          <li>
            <div className="card-wrapper">
              <img
                src={misha}
                alt="misha"
                width="150"
                className="artist-photo-secondary"
              />
              <h3 className="artistName">миша мищенко</h3>
            </div>
          </li>
          <li className="artists-info-wrapper">
            <h4 className="list-artist-description">
              Список приглашенных артистов постоянно обновляется
            </h4>
            <p>Подписывайся на нас в соцсетях, чтобы не попустить обновления</p>
            <Social fill="#000" hover="white" />
          </li>
        </ul>
      </MainContainer>
    </div>
  );
}
