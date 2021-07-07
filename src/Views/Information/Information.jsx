import AppBar from '../../Сomponents/AppBar';
import girl from './images/girl.png';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';
import './Informations.scss';

export default function Information() {
  return (
    <div
      style={{
        backgroundColor: '#ffc64f',
        backgroundImage: `url(${girl})`,
        height: '100vh',
        weight: '100vw',
        backgroundSize: 'cover',
      }}
    >
      <AppBar />

      <MainContainer>
        <Header text="информация" />
        <div className="countries-wrapper">
          <h2 className="info-countries">
            Мексика, Коломбия, Эквадор, Доминикана
          </h2>
          <p className="info-description">
            Всё, что вы знаете об этих странах, теперь можно будет попробовать и
            увидеть!
          </p>
          <h3 className="info-intro">
            Мастер-классы, квесты, барабанные шоу от ведущих аниматоров из
            латинской Америки!
          </h3>

          <p className="info-description">
            И, конечно же, вас ждёт множество сюрпризов и кулинарных открытий на
            нашем фуд-корте!
          </p>
        </div>
      </MainContainer>
    </div>
  );
}
