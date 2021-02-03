import { FC } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from 'components/pages/HomePage';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Redirect to="/" />;
    </Switch>
  </Router>
);

export default App;
