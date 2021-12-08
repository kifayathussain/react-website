import React from "react";
import "./index.css";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => (
  <div className="footer">
    <div className="text">
      <a href="/">
        <p className="">© Copyright 2021 - Powered By digital items</p>
      </a>
    </div>
    <div className="icons">
      <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
        <FaTwitter />
        <span>TWEETS</span>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <FaFacebookF />
        <span>POST</span>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <HiMail />
        <span>SHARE</span>
      </a>
    </div>
  </div>
);

export default Footer;
