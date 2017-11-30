import React from 'react';
import TextField from 'material-ui/TextField';

export default (props) => (
  <div>
    <TextField
      onChange={props.handleUsername}
      hintText="Admin E-Mail"
      floatingLabelText="E-Mail"
      value={props.username}

    /><br />
    <TextField
      disableAutoFocus={true}
      onChange={props.handlePassword}
      hintText="Password"
      floatingLabelText="Password"
      type="password"
      value={props.password}
    />
    <button> Continue </button>
  </div>
)