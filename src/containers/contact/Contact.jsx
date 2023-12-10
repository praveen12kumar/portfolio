import React from 'react';
import { contactInfo } from '../../portfolio';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import "./contact.scss";
const Contact = () => {
  return (
    <div className='content' id='contact'>
      <div className="contact-main">
        <p className='contact-title'>{contactInfo.title}</p>
        <p className='contact-sub'>{contactInfo.subtitle}</p>
        <a className='contact-number' href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
        <div className="email">
          <a className='contact-email' href={"mailto:" + contactInfo.email_address }>
            {contactInfo.email_address}
          </a>
        </div>
        <SocialMedia/>
      </div>
    </div>
  )
}

export default Contact
