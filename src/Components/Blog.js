import React, {Component} from 'react';
import axios from 'axios';

import BlogPost from './BlogPost';

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }

  componentDidMount () {
    axios.get('/api/blog')
    .then(blogPosts => {
      this.setState({posts: blogPosts.data})
    });
  }

  render () {
    return (
      <div>
        {
            this.state.posts.map(post => (
              <BlogPost post={post} />
            )
            )
        }
    </div>
    )
  }
}
