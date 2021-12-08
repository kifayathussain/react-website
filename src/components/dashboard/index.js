import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Content from "../content";
// import { withRouter } from "react-router";
import Sidebar from "../sidebar/index";
import "./index.css";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={11} id="page-content-wrapper">
            <Content />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;
