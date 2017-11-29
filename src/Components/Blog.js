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
      const sortedBlogPosts = blogPosts.data.sort((blogA,blogB) => {
        return new Date(blogB.createdAt) - new Date(blogA.createdAt);
      })
      this.setState({posts: sortedBlogPosts})
    });
  }

  render () {
    return (
      <div>
        {
            this.state.posts.map(post => (
              <BlogPost post={post} key={post.id}/>
            )
            )
        }
    </div>
    )
  }
}
