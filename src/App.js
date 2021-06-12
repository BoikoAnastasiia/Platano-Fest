import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar';
import Artists from './Views/Artists';
import HomePage from './Views/homepage';
import Map from './Views/Map';
import Information from './Views/Information';
import Contacts from './Views/Contacts';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>

        <AppBar />

        <Route path="/artists">
          <Artists />
        </Route>

        <Route path="/information">
          <Information />
        </Route>

        <Route path="/map">
          <Map />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
}
