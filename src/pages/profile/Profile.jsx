import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import "./profile.css";
import nafa from "../../assets/userprofile.png";
import banner from "../../assets/neville-banner.jpg";

import { AiOutlineUser } from 'react-icons/ai'

import { GoLocation } from "react-icons/go";
import { dummyData } from "../../dummyData";
import { Button } from "react-bootstrap";

const Profile = () => {
  return (
    <Container fluid className="gx-0">
      <Row>
        <Col lg="2" className="sidebar d-none d-lg-block">
          Sidebar
        </Col>

        {/* Profile Page */}

        <Col lg="10" className="main mt-3">
          {/* Background */}
          <section className="px-0 d-flex align-items-end banner">
            <div className="profile-info ms-2 mb-2">
              <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center ">
                  <div className="profilePictureWrapper">
                    <img
                      src={nafa}
                      className="profile-picture"
                      alt="profile picture"
                    />
                  </div>
                  <div className="userShowTopTitle d-flex flex-column ms-3 justify-content-center">
                    <span className="userShowUsername">
                      {dummyData.first_name ? dummyData.first_name : ""}{" "}
                      {dummyData.middle_name}
                      {dummyData.last_name}
                    </span>
                    <span className="class-of">
                      <Badge pill bg="primary">
                        Class of {dummyData.grad_year}
                      </Badge>
                    </span>
                    {/* <span>
                      {dummyData.city}, {dummyData.state}
                      <GoLocation />
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Rest content */}

          <Container>
            <Row className="mt-5">
              <Col md={{ span: 2, offset: 1 }}>
                <Row>
                  <Col md="12" className="shadow-sm p-2">
                    <span className="membership-status"><Badge>Life Time member</Badge></span>
                    <hr/>
                    <AiOutlineUser /> <span>Student</span>
                  </Col>


                  <Col md="12" className="shadow-sm">
                    A
                  </Col>
                </Row>
              </Col>

              <Col md={{ span: 8 }} className="">
                <Container>
                  <Row>

                    {/* Update Button */}
                    <Col md="12 mb-2 p-3 shadow-sm d-flex justify-content-end">
                      <div>
                       <Button variant="success">Edit Profile</Button>
                      </div>
                    </Col>


                    <Col md="12 shadow-sm">A</Col>
                    <Col md="12 shadow-sm">A</Col>
                    <Col md="12 shadow-sm">A</Col>
                  </Row>
                </Container>
              </Col>

              {/* --- About Info --- */}
              {/* <Col md="6" className="about shadow-sm p-3">
                <div className="content-title">About</div>
                <hr />
                <Row className="about-info d-flex">
                  <Col sm="6" className="d-flex flex-column">
                    <span>First Name:</span>
                    <span>Middle Name:</span>
                    <span>Last Name:</span>
                    <span>Maiden Name:</span>
                    <span>Username:</span>
                    <span>Current Work:</span>
                    <span>Birthdate:</span>
                  </Col>
                  <Col sm="6" className="d-flex flex-column">
                    <span className="about-detail">{dummyData.first_name}</span>
                    <span className="about-detail">
                      {dummyData.middle_name}
                    </span>
                    <span className="about-detail">{dummyData.last_name}</span>
                    <span className="about-detail">
                      {dummyData.maiden_name}
                    </span>
                    <span className="about-detail">{dummyData.first_name}</span>
                    <span className="about-detail">
                      {dummyData.current_work}
                    </span>
                    <span className="about-detail">{dummyData.birth_date}</span>
                  </Col>
                </Row>
              </Col> */}

              {/* --- Contact Details ---  */}
              {/* <Col md="6" className="about shadow-sm p-3">
                <div className="content-title">Contact</div>
                <hr />
                <Row className="about-info d-flex">
                  <Col sm="6" className="d-flex flex-column">
                    <span>Phone Number:</span>
                    <span>Email:</span>
                    <span>Address:</span>
                    <span>Maiden Name:</span>
                    <span>Username:</span>
                    <span>Current Work:</span>
                  </Col>
                  <Col sm="6" className="d-flex flex-column">
                    <span className="about-detail">{dummyData.first_name}</span>
                    <span className="about-detail">
                      {dummyData.middle_name}
                    </span>
                    <span className="about-detail">{dummyData.last_name}</span>
                    <span className="about-detail">
                      {dummyData.maiden_name}
                    </span>
                    <span className="about-detail">{dummyData.first_name}</span>
                    <span className="about-detail">
                      {dummyData.current_work}
                    </span>
                  </Col>
                </Row>
              </Col> */}
              {/* <Col md="6" className="about shadow-sm p-3">
                <div className="content-title">About</div>
                <hr />
                <Row className="about-info d-flex">
                  <Col sm="6" className="d-flex flex-column">
                    <span>First Name:</span>
                    <span>Middle Name:</span>
                    <span>Last Name:</span>
                    <span>Maiden Name:</span>
                    <span>Username:</span>
                    <span>Current Work:</span>
                  </Col>
                  <Col sm="6" className="d-flex flex-column">
                    <span className="about-detail">{dummyData.first_name}</span>
                    <span className="about-detail">
                      {dummyData.middle_name}
                    </span>
                    <span className="about-detail">{dummyData.last_name}</span>
                    <span className="about-detail">
                      {dummyData.maiden_name}
                    </span>
                    <span className="about-detail">{dummyData.first_name}</span>
                    <span className="about-detail">
                      {dummyData.current_work}
                    </span>
                  </Col>
                </Row>
              </Col> */}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
