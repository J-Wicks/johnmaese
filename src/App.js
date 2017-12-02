import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Bio from './Components/Bio';
import Admin from './Components/Admin';
import Education from './Components/Education';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Awards from './Components/Awards';
import Articles from './Components/Articles';
import SinglePost from './Components/SinglePost';

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
                  <Route exact path='/blogs/:id' component={SinglePost} />
                  <Route path='/bio' component={Bio} />
                  <Route path='/admin' component={Admin} />
                  <Route path='/education' component={Education} />
                  <Route exact path='/blog' component={Blog} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/awards' component={Awards} />
                  <Route path='/articles' component={Articles} />
                </Switch>              
            </div>
          </div> 
        </Router>
      </div>
    );
  }
}

export default App;
