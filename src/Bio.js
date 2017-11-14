import React from 'react';
import faker from 'faker';

const paragraphs = faker.lorem.paragraphs(20);


export default () => (
  <div>
    <div className="contentHeader">
      <img src={require('./john.jpg')} />
      <h1> John R. Maese, MD </h1>
      <h2> General Practice, Internal Medicine - Geriatrics </h2>
    </div>
    <h1 className="sectionTitle"> Bio </h1>

    <p className="bio">{paragraphs}</p>
  </div>
)