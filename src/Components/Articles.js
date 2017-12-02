import React from 'react';
import articles from '../assets/articles';

export default () => (
  <div>
    {
      articles.map(article => (
        <a href={article.url}className="article">
        <img src={article.headerImg} />
          <p className="title"> {article.title} </p>
        </a>
      ))
    }
  </div>
)