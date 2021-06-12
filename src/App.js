import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
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
