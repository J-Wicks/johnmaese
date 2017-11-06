import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const style = {display: 'inline-block',
margin: '16px 32px 16px 0',
width: '300px',
overflow: 'hidden',}

export default () => (
  <div className="sideNav">
    <Paper style={style} >
      <Menu>
        <Link to="/bio">
          <MenuItem primaryText="Bio" />
        </Link>
        <Link to="/education">
          <MenuItem primaryText="Education" />
        </Link>
        <Link to="/blog">
          <MenuItem primaryText="Blog" />
        </Link>
        <Link to="/contact"> 
          <MenuItem primaryText="Contact" />
        </Link>
        <Link to="/admin">
          <MenuItem primaryText="Admin" />
        </Link>
      </Menu>
    </Paper>
  </div>
)

