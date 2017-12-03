import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Bio from './Components/Bio';
import Admin from './Components/Admin';
import Education from './Components/Education';
import NewBlog from './Components/NewBlog';
import Contact from './Components/Contact';
import Awards from './Components/Awards';
import Articles from './Components/Articles';
import SinglePost from './Components/SinglePost';
import Login from './Components/Login';
import Blog from './Components/Blog';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    axios.get('/login/me')
      .then((foundUser) => {
        this.setState({ user: foundUser.data });
      });
  }

  render() {
    console.log(this.state.user)
    const BlogAdmin = this.state.user.name ? NewBlog : Login;
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
                  <Route path='/admin' component={BlogAdmin} />
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
