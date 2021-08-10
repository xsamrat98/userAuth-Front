import React from 'react';
import './App.css';
import Login from './components/login';
import User from './components/user';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Login />
    // </div>
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/user" component={User}/>
    </Router>
  );
}

export default App;
