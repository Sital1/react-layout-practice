import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Input from "../../components/input/Input";

import "./profileedit.css";

const ProfileEdit = () => {
  const [userProfileData, setUserProfileData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    maiden_name: "",
    grad_year: "",
    birth_date: "",
    phone_no: "",
    address_line_1: "",
    city: "",
    state: "Louisiana",
    current_work: "",
    has_contrubitions: "",
    achievements: "",
    bio: "",
    profile_picture: null,
  });

  return (

      <Row className="d-flex justify-content-center">
        <Col
         md="10"
          className="jumbotron"
        >
          <Row>
            <Col md="12" className="text-center">
              <h2 className="">Edit Profile</h2>
            </Col>
            <hr/>
          </Row>
          {/* First name, Middle Name, LastName */}
          <Row className="d-flex justify-content-around mb-4">
            <Col md="3" className="">
              <Input
                textLabelClass="text-label"
                name="first_name"
                value={userProfileData.first_name}
                label="First Name:"
              />
            </Col>

            <Col md="3" className="">
              <Input
                textLabelClass="text-label"
                name="middle_name"
                value={userProfileData.middle_name}
                label="Middle Name"
              />
            </Col>
            <Col md="3" className="">
              <Input
                textLabelClass="text-label"
                name="last_name"
                value={userProfileData.last_name}
                label="Last Name"
              />
            </Col>
          </Row>

          {/* End of Row */}

          {/* Date of birth, Phone number, Maiden name */}
          <Row className="d-flex justify-content-around mb-4">
            <Col md="3" className="">
              <Input
                textLabelClass="text-label"
                type="date"
                name="birth_date"
                value={userProfileData.birth_date}
                label="Date of Birth:"
              />
            </Col>

            <Col md="3" className="">
              <Input
                type="tel"
                textLabelClass="text-label"
                name="phone_no"
                value={userProfileData.phone_no}
                label="Phone Number:"
              />
            </Col>

            <Col md="3" className="">
              <Input
                textLabelClass="text-label"
                name="maiden_name"
                value={userProfileData.maiden_name}
                label="Maiden Name:"
              />
            </Col>
          </Row>

          {/* End of Row */}

          {/* Address-line city, state, zip code*/}
          <Row className="d-flex justify-content-around mb-4">
            <Col md="3" className="">
              <Input
                textLabelClass="text-label"
                type="text"
                name="address_line_1"
                value={userProfileData.address_line_1}
                label="Address Line 1:"
              />
            </Col>

            <Col md="7" className="d-flex justify-content-between mb-4">
            <Col md="5" className="">
              <Input
                textLabelClass="text-label"
                name="city"
                value={userProfileData.city}
                label="City:"
              />
            </Col>

            <Col md="3" className="flex-md-column-reverse text-label">
              <label className="mb-2">State: </label>
              <select
                type="s"
                className="form-control"
                name="state"
                value={userProfileData.state}
                // defaultValue="LA"
              >
                <option value="LA">Louisiana</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                {/* <option selected value="LA">
                  Louisiana
                </option> */}
                <option value="KY">Kentucky</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </Col>

            <Col md="3" className="">
              <Input
                textLabelClass="text-label"
                name="zip_code"
                label="Zip Code:"
              />
            </Col>
            </Col>
          </Row>
          {/* End of Row */}

          {/* Current Work, Grad Year, Profile Picture */}
          <Row className="d-flex justify-content-around mb-4">
            <Col md="3" className="">
              <Input
                textLabelClass="text-label"
                name="grad_year"
                value={userProfileData.grad_year}
                label="Graduation Year:"
              />
            </Col>
            <Col md="3" className="">
              <Input
                textLabelClass="text-label"
                name="current_work"
                value={userProfileData.current_work}
                label="Current Work:"
              />
            </Col>
            <Col md="3" className="">
              <Input
                type="file"
                textLabelClass="text-label"
                name="profile_picture"
                label="Profile Picture:"
              />
            </Col>
          </Row>
          {/* End of Row */}

          {/* Bio */}
          <Row className="d-flex justify-content-around mb-4">
            <Col sm="12" md="11" className="">
              <Input
                type="textarea"
                as="textarea"
                textLabelClass="text-label"
                name="bio"
                rows={3}
                // value={userProfileData.bio}
                label="Bio:"
              />
            </Col>
          </Row>

          {/* Bio */}
          <Row className="d-flex justify-content-center mb-4">
            <Col sm="12" md="11" className="">
              <Input
                type="textarea"
                as="textarea"
                textLabelClass="text-label"
                name="bio"
                rows={3}
                // value={userProfileData.bio}
                label="Achievements:"
              />
            </Col>
          </Row>
        </Col>
      </Row>
  );
};

export default ProfileEdit;
