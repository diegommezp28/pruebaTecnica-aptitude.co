import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from './components/DashBoard';
import SignUp from './components/cuentas/SignUp';
import Login from './components/cuentas/Login';
import Protected from './components/Protected';

function App() {
  let [state, setState] = useState({
    token: localStorage.getItem("token"),
    isAuth: null,
    isLoading: false,
    user: null
  })

  useEffect(() => {
    localStorage.setItem("token", state.token)
  }, [state])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register/" component={() => <SignUp state={[state, setState]} />} />
          <Route exact path="/login/" component={() => <Login state={[state, setState]} />} />
          <Protected exact path="/" state={state} component={() => <DashBoard state={[state, setState]} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
