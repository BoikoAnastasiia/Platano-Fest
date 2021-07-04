import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';
import map from './images/map.png';
import './Map.scss';

export default function Map() {
  let number = 0;

  return (
    <div
      style={{
        backgroundColor: '#FEF2D9',
        backgroundImage: `url(${map})`,
        height: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <AppBar />
      <MainContainer>
        <Header text="карта" />
        <ul className="map-list">
          <li className="map-list-item">
            <div className="number-wrapper">
              <p>{++number}</p>
            </div>
            <p> Главная сцена Platano Fest</p>
          </li>
          <li className="map-list-item">
            <div className="number-wrapper">
              <p>{++number}</p>
            </div>
            <p> Фудкорт с кухней латинской Америки</p>
          </li>
          <li className="map-list-item">
            <div className="number-wrapper">
              <p>{++number}</p>
            </div>{' '}
            <p>Площадка лейбла «Музыка у моря»</p>
          </li>
          <li className="map-list-item">
            <div className="number-wrapper">
              <p>{++number}</p>
            </div>
            <p>Лаунж/Чилаут зона для отдыха</p>
          </li>
          <li className="map-list-item">
            <div className="number-wrapper">
              <p>{++number}</p>
            </div>
            <p>
              Кемпинг{' '}
              <span className="addendum">Билеты приобретаются отдельно</span>
            </p>
          </li>
          <li className="map-list-item">
            <div className="number-wrapper">
              <p>{++number}</p>
            </div>
            <p>Парковка для гостей фестиваля</p>
          </li>
        </ul>
      </MainContainer>
    </div>
  );
}
