import React from 'react';

import Login from './pages/login/index'
import LoginForm from './pages/loginForm/index'
import RegisterForm from './pages/registerForm';
import appBody from './pages/appBody';
import PedirCancion from './pages/pedirCancion';
import CancionPedida from './pages/cancionPedida'
import listaCanciones from './pages/listaCanciones';
import Top from './pages/top';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './styles.css';

function App() {
  return (
    <div className="App login-body">
      <Router>
        <Switch>
          <Route path="/topCanciones" component={Top}/>
          <Route path="/listaCanciones" component={listaCanciones}/>
          <Route path="/cancionPedida" component={CancionPedida}/>
          <Route path="/pedirCancion" component={PedirCancion} />
          <Route path="/appBody" component={appBody} />
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/registerForm" component={RegisterForm}/>
          <Route path="/" component={Login} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
