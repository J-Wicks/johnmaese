import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Bio from './Components/Bio';
import Admin from './Admin';
import Education from './Components/Education';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Awards from './Components/Awards';

import './App.scss';

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
                  <Route path='/education' component={Education} />
                  <Route path='/blog' component={Blog} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/awards' component={Awards} />
                </Switch>              
            </div>
          </div> 
        </Router>
      </div>
    );
  }
}

export default App;
