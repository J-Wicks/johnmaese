import React, { Component } from 'react';
import axios from 'axios';

export default class AdminBlogPost extends Component {
  constructor() {
    super();
    this.state = {
      linkedIn: true,
      facebook: true,
      twitter: true,
      blogTitle: '',
      blogContent: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleType(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleClick(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name],
    });
  }

  handleSubmit() {
    axios.post('/api/blog', {
      title: this.state.blogTitle,
      content: this.state.blogContent,
    })
      .then(() => {
        this.setState({
          blogTitle: '',
          blogContent: '',
        });
      });
  }

  render() {
    return (
    <div className="newBlog">
      <h1> Blog Title </h1>
      <input className="blogTitle" onChange={this.handleType} name='blogTitle' type="text" value={this.state.blogTitle} />
      <h1> Content </h1>
      <textarea className="blogContent" name='blogContent' onChange={this.handleType} value={this.state.blogContent}> 
      </textarea>
      <div className="smCheckBoxes">
        <input onChange={this.handleClick} name="linkedIn"  checked={this.state.linkedIn} className="smShare" type="checkbox" />
        <input onChange={this.handleClick} name="twitter" checked={this.state.twitter} className="smShare" type="checkbox" />
        <input onChange={this.handleClick} name="facebook" checked={this.state.facebook} className="smShare" type="checkbox" />
      </div>
      <button onClick={this.handleSubmit}> Post! </button>
    </div>
    )
  }
}
