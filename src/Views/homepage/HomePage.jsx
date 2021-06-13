import MainContainer from '../../Сomponents/MainContainer';
import './HomePage.scss';
import ReactSprite from 'react-sprite';

export default function HomePage() {
  const SimpleIcon = () => <ReactSprite href={`icomoon.svg#${'VK'}`} />;

  return (
    <div className="homepage-wraper">
      <MainContainer>
        <nav>
          <div className="nav-wrapper">
            <svg
              viewBox="0 0 100 80"
              width="17"
              height="25"
              className="menu-icon"
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>

            <div className="icons-wrapper"></div>
          </div>
        </nav>
      </MainContainer>
    </div>
  );
}
