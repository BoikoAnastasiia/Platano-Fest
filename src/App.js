import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import ButtonUp from './Сomponents/ButtonUp';
import { useState, useCallback } from 'react';
import SideBar from './Сomponents/SideBar';
import { Suspense, lazy } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "home-page" */),
);
const Artists = lazy(() =>
  import('./Views/Artists/' /* webpackChunkName: "artists" */),
);
const Map = lazy(() => import('./Views/Map/' /* webpackChunkName: "map" */));
const Information = lazy(() =>
  import('./Views/Information/' /* webpackChunkName: "information" */),
);
const Contacts = lazy(() =>
  import('./Views/Contacts/' /* webpackChunkName: "contacts" */),
);
const BuyTickets = lazy(() =>
  import('./Views/BuyTickets/' /* webpackChunkName: "buyTickets" */),
);

export default function App() {
  const handleBackdropClick = event => {
    if (showSidebar && event.target.id !== 'sidebarWrapper') {
      setShowSideBar(false);
    }

    return;
  };

  const [showSidebar, setShowSideBar] = useState(false);
  const toggleModal = useCallback(() => {
    setShowSideBar(prevShowSideBar => !prevShowSideBar);
  }, []);
  const home = window.location.pathname === '/';

  return (
    <div onClick={handleBackdropClick}>
      {!showSidebar && !home && (
        <svg
          onClick={toggleModal}
          viewBox="0 0 100 80"
          width="17"
          height="25"
          className="icon-social menu-btn mobile-toggler"
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      )}

      {showSidebar && <SideBar onClose={toggleModal} />}

      <ButtonUp />
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#FFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        }
      >
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/artists" component={Artists} />

          <Route path="/information" component={Information} />

          <Route path="/buy-tickets" component={BuyTickets} />

          <Route path="/map" component={Map} />

          <Route path="/contacts" component={Contacts} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}
