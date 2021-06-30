import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';
import './Artists.scss';
import majicool from './images/majicool.jpg';
import manu from './images/manu.jpg';
import belki from './images/belki.jpg';
import plushmoon from './images/plushmoon.jpg';

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
      </MainContainer>
    </div>
  );
}
