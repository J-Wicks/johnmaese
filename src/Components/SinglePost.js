import React, { Component } from 'react';
import axios from 'axios';

export default class SingleArticle extends Component {
  constructor() {
    super()
    this.state ={
      article: {
      }
    }
  }

  componentDidMount () {
    axios.get(`/api/blog/`)
      .then( (foundBlog) => {
        console.log(foundBlog);
      }) 
  }

  render () {
    return(
      <div>
        here is the single post page
      </div>
    )
  }
}