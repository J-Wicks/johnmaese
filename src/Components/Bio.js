import React from 'react';
import faker from 'faker';

const paragraphs = faker.lorem.paragraphs(20);

// The bio on this page is cited from https://www.max.md/biographies.html
export default () => (
  <div>
    <div className="contentHeader">
      <img src={require('../john.jpg')} />
      <h1> John R. Maese, MD </h1>
      <h2> General Practice, Internal Medicine - Geriatrics </h2>
    </div>
    <h1 className="sectionTitle"> Bio </h1>

    <p className="bio">Dr. Maese is in a Geriatric private practice in Staten Island. His career spans patient care, performance improvement and Health Information Technology. He serves as a consultant to the health insurance industry, and to private practices in the application of computer technology and performance improvement strategies. <br /> <br />
      Dr. Maese is recognized for his efforts in technology and medicine. Currently, a Fellow at the Healthcare Information and Management Systems Society, Dr. Maese has served as Chairperson of the Ambulatory Electronic Medical Record Task Force Committee, and been recognized with the HIMSS Founders Leadership Award in 2010. He serves on the American College of Physicians (ACP) National HIT and Volunteer Committees, and is Chairperson of the New York Chapter ACP HIT Committee.<br /> <br />
      He is recognized for his efforts in quality healthcare and community service. As a Fellow of the American College of Emergency Physicians and past Governor of the American College of Physicians (ACP), he received the ACP New York Chapter Laureate Award in 2010 and several Evergreen Awards. He was recognized as a “Doctor of Vision” by the Staten Island Advance in 2006, and for “Service to the Community” by The Academy of Medicine in Richmond in 2007. He serves as Chairperson of the New York State Patient Safety Enhancement Project Committee as well as on the Executive Committee of the New York Quality Alliance. He is past president of the Richmond County Medical Society and was instrumental in the development and implementation of the Ambulatory Performance Improvement Program at Staten Island University Hospital<br /> <br />
      He received his medical degree from SUNY-Downstate where he continues as an Assistant Clinical Professor of Medicine. He is board certified in a number of clinical specialties including Internal Medicine, Geriatrics, and Emergency Medicine. He is also certified by the American Board of Quality Assurance and Utilization Review Physicians.
    </p>
  </div>
)