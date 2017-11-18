import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';



export default () => (
  <div className="sideNav">
        <Link to="/bio">
          <button className="hvr-sweep-to-right nav-icon-1"> Bio </button>
        </Link>
        <Link to="/education">
          <button className="hvr-sweep-to-right nav-icon-2"> Education </button>
        </Link>
        <Link to="/blog">
          <button className="hvr-sweep-to-right nav-icon-3"> Blog </button>
        </Link>
        <Link to="/contact"> 
          <button className="hvr-sweep-to-right nav-icon-4"> Contact </button>
        </Link>
        <Link to="/articles">
          <button className="hvr-sweep-to-right nav-icon-5"> Articles </button>
        </Link>
        <Link to="/awards">
          <button className="hvr-sweep-to-right nav-icon-6"> Awards </button>
        </Link>
        <Link to="/admin">
          <button className="hvr-sweep-to-right nav-icon-7"> Admin </button>
        </Link>
  </div>
)

