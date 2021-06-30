import { Switch, Route, Redirect } from 'react-router-dom';
import Artists from './Views/Artists/';
import HomePage from './Views/HomePage';
import Map from './Views/Map/';
import Information from './Views/Information/';
import Contacts from './Views/Contacts/';
import BuyTickets from './Views/BuyTickets';
import './App.scss';

export default function App() {
  return (
    <div>
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
