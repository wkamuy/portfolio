import { FC } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// import HomePage from 'components/pages/HomePage';
import TestPage from 'components/pages/TestPage';
import WorksPage from 'components/pages/WorksPage';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/portfolio">
        {/* <HomePage /> */}
        <TestPage />
      </Route>
      <Route exact path="/portfolio/works">
        <WorksPage />
      </Route>
      <Redirect to="/portfolio/" />;
    </Switch>
  </Router>
);

export default App;
