import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';
import map from './images/map.png';

export default function Map() {
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
        <ol>
          <li className="map-list-item"></li>
        </ol>
      </MainContainer>
    </div>
  );
}
