import { Switch, Route, Redirect } from 'react-router-dom';
import Artists from './Views/Artists/';
import HomePage from './Views/HomePage';
import Map from './Views/Map/';
import Information from './Views/Information/';
import Contacts from './Views/Contacts/';
import BuyTickets from './Views/BuyTickets';
import './App.scss';
import ButtonUp from './Сomponents/ButtonUp';

export default function App() {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#FEF2D9',
        height: '100vh',
        width: '100vw',
        // position: 'relative',
      }}
    >
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
