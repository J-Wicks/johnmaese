import React, { Component } from 'react';

export default class AdminBlogPost extends Component {
  constructor() {
    super();
    this.state = {
      linkedIn: true,
      facebook: true,
      twitter: true,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name],
    });

  }

  render() {
    return (
    <div className="newBlog">
      <h1> Blog Title </h1>
      <input className="blogTitle" type="text" />
      <h1> Content </h1>
      <textarea className="blogContent">
      </textarea>
      <input onChange={this.handleClick} name="linkedIn"  checked={this.state.linkedIn} className="smShare" type="checkbox" />
      <input onChange={this.handleClick} name="twitter" checked={this.state.twitter} className="smShare" type="checkbox" />
      <input onChange={this.handleClick} name="facebook" checked={this.state.facebook} className="smShare" type="checkbox" />
    </div>
    )
  }
}
