import * as React from 'react';
import { Switch } from 'react-router-dom';
//
import { HOME } from '../../config/routes';
import { PublicRoute } from '../routes';
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import './App.css';
import TopNavBar from '../TopNavBar';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <div className="App">
      <TopNavBar />
      <Switch>
        <PublicRoute
          exact
          path={HOME}
          component={HomePage}
          isAuthenticated={isAuthenticated}
        />
        <PublicRoute path="*" component={NotFound} isAuthenticated={isAuthenticated} />
      </Switch>
    </div>
  );
}

export default App;
