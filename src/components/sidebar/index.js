import React from "react";
import { Nav } from "react-bootstrap";
// import { withRouter } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./index.css";

const Sidebar = () => {
  return (
    <>
      <Nav className="sidebar">
        <Nav.Item>
          <Nav.Link
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="sideBarIcon"
          >
            <FaTwitter />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.dribbble.com/"
            target="_blank"
            rel="noreferrer"
            className="sideBarIcon"
          >
            <FaDribbble />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="sideBarIcon"
          >
            <FaInstagram />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="sideBarIcon"
          >
            <FaLinkedinIn />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://mail.google.com/"
            target="_blank"
            rel="noreferrer"
            className="sideBarIcon"
          >
            <HiMail />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
// const Sidebar = withRouter(Side);
export default Sidebar;
