import { Switch, Route, Redirect } from 'react-router-dom';
import Artists from './Views/Artists/';
import HomePage from './Views/HomePage';
import Map from './Views/Map/';
import Information from './Views/Information/';
import Contacts from './Views/Contacts/';
import BuyTickets from './Views/BuyTickets';
import './App.scss';
import ButtonUp from './Сomponents/ButtonUp';
import { useState, useCallback } from 'react';
import SideBar from './Сomponents/SideBar';

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
  console.log(window.location.pathname);
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
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/artists" component={Artists} />

        <Route path="/information" component={Information} />

        <Route path="/buy-tickets" component={BuyTickets} />

        <Route path="/map" component={Map} />

        <Route path="/contacts" component={Contacts} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
