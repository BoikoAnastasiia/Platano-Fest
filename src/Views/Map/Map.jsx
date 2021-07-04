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
          <li
            className="map-list-item"
            style={{
              fontSize: '17px',
              '&::before': {
                content: `${number++}`,
                color: 'black',
                fontSize: '15px',
              },
            }}
          >
            Главная сцена Platano Fest
          </li>
          <li className="map-list-item">Фудкорт с кухней латинской Америки</li>
          <li className="map-list-item">Площадка лейбла «Музыка у моря»</li>
          <li className="map-list-item">Лаунж/Чилаут зона для отдыха</li>
          <li className="map-list-item">
            Кемпинг <span>Билеты приобретаются отдельно</span>
          </li>
          <li className="map-list-item">Парковка для гостей фестиваля</li>
        </ul>
      </MainContainer>
    </div>
  );
}
