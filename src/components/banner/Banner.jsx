import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <Container fluid>
      <div className="d-flex bannerWrapper align-items-center justify-content-center">
        <div className="page-caption">
          <h1>Neville Alumni Association</h1>
          <div className="page-info text-center">
            <p>Connect With Alumni and Friends</p>
          </div>
        </div>
      </div>

      <Container className="interaction-area">
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;
