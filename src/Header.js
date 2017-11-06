import React from 'react';
import IconButton from 'material-ui/IconButton';

export default () => (
  <header className="App-header">
    <div className="headerLogo">
      <h1 className="App-title">John R. Maese, MD</h1>
      <h2 className="App-subtitle">General Practice, Internal Medicine - Geriatrics</h2>
    </div>
    <div className="socialIcons">
      <a href="#">
        <img className='socialIcon'src={require('./facebook.jpeg')} />
      </a>
      <a href="#">
        <img className='socialIcon' src={require('./twitter.jpg')} />
      </a>
    </div>
  </header>
)

