import React from 'react';


export default (props) => (
  <div>
    <input
      type="text"
      name="userEmail"
      onChange={props.handleType}
      value={props.username}
      key="email"
    /><br />
    <input
      type="text"
      name="password"
      onChange={props.handleType}
      value={props.password}
      key="password"
    />
    <button> Continue </button>
  </div>
)