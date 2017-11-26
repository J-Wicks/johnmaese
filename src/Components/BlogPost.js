import React from 'react';

export default (props) => {
  const { author, title, content, createdAt } = props.post;
  const authorAbbrev = author.split(' ')[0][0] + author.split(' ')[1][0];
  const createdAtDate = new Date(createdAt);
  return(
    <div>
      <div className="meta"> 
        <div className="abbrevCircle">
          <p> {authorAbbrev} </p>
        </div>
        <p> {author} </p>
        <p> {createdAtDate.toDateString()} </p>   
      </div>        
      <p className="blogTitle"> {title} </p>

      <p> {content} </p>
    </div>
  )
}