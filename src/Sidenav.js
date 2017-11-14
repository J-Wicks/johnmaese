import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';



export default () => (
  <div className="sideNav">
        <Link to="/bio">
          <button className="hvr-sweep-to-right"> Bio </button>
        </Link>
        <Link to="/education">
          <button className="hvr-sweep-to-right"> Education </button>
        </Link>
        <Link to="/blog">
          <button className="hvr-sweep-to-right"> Blog </button>
        </Link>
        <Link to="/contact"> 
          <button className="hvr-sweep-to-right"> Contact </button>
        </Link>
        <Link to="/admin">
          <button className="hvr-sweep-to-right"> Admin </button>
        </Link>
        <Link to="/articles">
          <button className="hvr-sweep-to-right"> Articles </button>
        </Link>
        <Link to="/awards">
          <button className="hvr-sweep-to-right"> Awards </button>
        </Link>
  </div>
)

