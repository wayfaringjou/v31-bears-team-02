import * as React from 'react';
import { Switch } from 'react-router-dom';
//
import { HOME } from '../../config/routes';
import { PublicRoute } from '../routes';
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import './App.css';
import TopNavBar from '../TopNavBar';

import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logout } from './authSlice';

import credentials from '../../services/credentials';
import ls from '../../services/localStorage';

const token = {
  ...ls('artguessr'),
  ...credentials({ username: 'demo', password: 'demo' })
}

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const authStatus = useSelector((state) => state.authorization.isAuthenticated);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (token.getItem()) {
      dispatch(loginSuccess())
    } else {
      dispatch(logout())
    }
  }, [reload]);

  return (
    <div className="App">
      <TopNavBar />
      <button type="button" onClick={async (e) => {
        e.preventDefault();
        const jwToken = await token.getToken();
        token.setItem(jwToken.authToken);
        setReload(!reload);
      }}>Login</button>
      <button type="button" onClick={(e) => {
        token.removeItem();
        setReload(!reload);
      }}>Logout</button>
      <p>Is authenticated: {`${authStatus}`}</p>
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
