import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


import Header from './Header';
import Sidenav from './Sidenav';
import Bio from './Bio';
import Admin from './Admin';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />
          <Router>
          <div className="appBody">

            <Sidenav />
              <div className="content">
                  <Switch>
                    <Route exact path='/' component={Bio} />
                    <Route path='/bio' component={Bio} />
                    <Route path='/admin' component={Admin} />
                  </Switch>              
              </div>
            </div> 
          </Router>
      </div>
    );
  }
}

export default App;
