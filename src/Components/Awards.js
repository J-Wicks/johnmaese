import React from 'react';
import awards from '../assets/awards';

export default () => (
  <div id="awards">
    {
      awards.map(award => (
        <div>
        <img src="https://www.brightstarcare.com/walnut-creeklafayettesan-ramon/files/2017/04/award-ribbon-06.png.ca762b9a6b1ec465e59a3d843025e128.png" />
        <div key={award.name} className="awardInfo">
          <p className="name"> {award.name} </p>
          <p className="org"> {award.org} </p>
          <p> {award.description} </p>
        </div>
        </div>
      ))
    }
  </div>
)