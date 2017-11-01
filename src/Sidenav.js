import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="sideNav">
    <Link to="bio">
      <p> Bio </p>
    </Link>
    <Link to="education">
      <p> Education </p>
    </Link>
    <Link to="blog">
    <p> Blog </p>
    </Link>
    <Link to="contact">
    <p> Contact </p>
    </Link>
    <Link to="admin">
    <p> Admin </p>
    </Link>
</div>
)

