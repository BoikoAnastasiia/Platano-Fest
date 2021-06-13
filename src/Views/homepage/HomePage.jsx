import MainContainer from '../../Сomponents/MainContainer';
import './HomePage.scss';
import Vk from '../../Icons/Vk';

export default function HomePage() {
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

            <div className="icons-wrapper">
              <Vk />
            </div>
          </div>
        </nav>
      </MainContainer>
    </div>
  );
}
