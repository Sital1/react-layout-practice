import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import "./profile.css";
import nafa from "../../assets/userprofile.png";
import banner from "../../assets/neville-banner.jpg";

import { AiOutlineUser, AiOutlinePhone } from "react-icons/ai";

import { GoLocation } from "react-icons/go";
import { dummyData } from "../../dummyData";
import { Button } from "react-bootstrap";
import ProfileEdit from "./ProfileEdit";

const Profile = () => {
  return (
    <Container fluid className="profile-container">
      <Row>
        <Col lg="2" className="sidebar gx-0 d-none d-lg-block">
          Sidebar
        </Col>
        <Col lg="10" className="profile-edit">
          <ProfileEdit />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
