import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from './components/DashBoard';
import SignUp from './components/cuentas/SignUp';
import Login from './components/cuentas/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DashBoard}/>
          <Route exact path="/register/" component={SignUp} />
          <Route exact path="/login/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
