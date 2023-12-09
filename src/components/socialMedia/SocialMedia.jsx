import React from 'react'
import "./socialmedia.scss";
import {socialMediaLinks} from "../../portfolio";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const SocialMedia = () => {
    if(!socialMediaLinks.display){
        return null;
    }
  return (
    <div className='social-media-div'>
    <div className='social-media-btn'>
      {socialMediaLinks.github ? (
        <a href={socialMediaLinks.github}
        className='icon-button github'
        target='_blank'
        rel="noopener noreferrer"
        > <FaGithub className='github'/> </a>
      ): null}
    </div>
    <div className="social-media-btn">
        {
            socialMediaLinks.gmail ? (
                <a href={socialMediaLinks.gmail}
                    className='icon-button gmail'
                >
                    {<SiGmail/>}
                </a>
            ):null
        }
    </div>
    <div className="social-media-btn">
        {
            socialMediaLinks.linkedin ? (
                <a href={socialMediaLinks.linkedin}
                    className='icon-button linkedin'
                >
                    {<FaLinkedin/>}
                </a>
            ):null
        }
    </div>

    <div className="social-media-btn">
        {
            socialMediaLinks.facebook ? (
                <a href={socialMediaLinks.facebook}
                    className='icon-button facebook'
                >
                    {<FaFacebook/>}
                </a>
            ):null
        }
    </div>

    <div className="social-media-btn">
        {
            socialMediaLinks.twitter ? (
                <a href={socialMediaLinks.twitter}
                    className='icon-button twitter'
                >
                    {<FaTwitter/>}
                </a>
            ):null
        }
    </div>

    <div className="social-media-btn">
        {
            socialMediaLinks.instagram ? (
                <a href={socialMediaLinks.instagram}
                    className='icon-button instagram'
                >
                    {<FaInstagram/>}
                </a>
            ):null
        }
    </div>
    </div>
  )
}

export default SocialMedia
