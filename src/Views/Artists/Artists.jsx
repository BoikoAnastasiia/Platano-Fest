import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';
import './Artists.scss';
import majicool from './images/majicool.jpg';

export default function Artists() {
  return (
    <div style={{ backgroundColor: '#ffc64f', height: '100vw' }}>
      <AppBar />
      <MainContainer>
        <Header text="хэдлайнеры" />
        <ul className="big-cards-wrapper">
          <li>
            <div className="card-wrapper">
              <img
                src={majicool}
                alt="majicool"
                width="292"
                className="artist-photo"
              />
              <h3 className="artistName">меджикул</h3>
            </div>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </MainContainer>
    </div>
  );
}
