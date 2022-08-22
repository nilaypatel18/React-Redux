import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import HeroBanner from "../assets/images/hero-banner.jpg";
import FphoneIcon from "../assets/images/f-phone.png";
import FpinIcon from "../assets/images/f-pin.png";
import FenvelopIcon from "../assets/images/f-envelope.png";
import MapIcon from "../assets/images/map.png";
import ListGroup from "react-bootstrap/ListGroup";
import { createContact } from "../utils/apiList";
import { ToastContainer, toast } from "react-toastify";

function Career() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [validation, setValidation] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [isSubmited, setIsSubmited] = useState(false);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name == "mobile") {
      const PhoneReg = /^[\d+]+$/;
      if (PhoneReg.test(value) || value == "") {
        setData({
          ...data,
          [name]: value,
        });
      }
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }

    if (isSubmited) {
      validate(name, value);
    }
  };

  const validate = (name, value) => {
    if (name == "email") {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (value == "" || value == null) {
        setValidation({
          ...validation,
          email: (
            <small className="text-danger">
              Please enter your email address
            </small>
          ),
        });
      } else if (re.test(value) == false) {
        setValidation({
          ...validation,
          email: (
            <small className="text-danger">
              Please enter a valid email address
            </small>
          ),
        });
      } else {
        setValidation({
          ...validation,
          email: "",
        });
      }
    }

    if (name == "name") {
      if (value == "" || value == null) {
        setValidation({
          ...validation,
          name: <small className="text-danger">Please enter your name</small>,
        });
      } else {
        setValidation({
          ...validation,
          name: "",
        });
      }
    }

    if (name == "mobile") {
      const phoneReg =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (value == "" || value == null) {
        setValidation({
          ...validation,
          mobile: (
            <small className="text-danger">
              Please enter your phone number
            </small>
          ),
        });
      } else if (phoneReg.test(value) == false) {
        setValidation({
          ...validation,
          mobile: (
            <small className="text-danger">
              Please enter a valid phone number
            </small>
          ),
        });
      } else {
        setValidation({
          ...validation,
          mobile: "",
        });
      }
    }
  };

  const submit = async () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneReg =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    var submit_error = {
      name: "",
      email: "",
      mobile: "",
    };

    var error = false;

    if (data.email == "" || data.email == null) {
      error = true;
      submit_error.email = (
        <small className="text-danger">Please enter your email address</small>
      );
    } else if (re.test(data.email) == false) {
      error = true;
      submit_error.email = (
        <small className="text-danger">
          Please enter a valid email address
        </small>
      );
    }

    if (data.name == "" || data.name == null) {
      error = true;
      submit_error.name = (
        <small className="text-danger">Please enter your name</small>
      );
    }

    if (data.mobile == "" || data.mobile == null) {
      error = true;
      submit_error.mobile = (
        <small className="text-danger">Please enter your phone number</small>
      );
    } else if (phoneReg.test(data.mobile) == false) {
      error = true;
      submit_error.mobile = (
        <small className="text-danger">Please enter a valid phone number</small>
      );
    }

    setValidation(submit_error);
    setIsSubmited(true);

    if (!error) {
      console.log(data);
      let fdata = new FormData();
      fdata.append("name", data.name);
      fdata.append("email", data.email);
      fdata.append("mobile", data.mobile);
      fdata.append("message", data.message);

      await createContact(fdata)
        .then((res) => {
          toast.success(
            "Thank you for submit your form. Our Team will contact you soon.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          setData({
            name: "",
            email: "",
            mobile: "",
            message: "",
          })
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="innerhero-banner">
        <div className="Hero-Banner-slider">
          <div className="banner-slide">
            <img src={HeroBanner} alt="vivid web solution" />
            <div className="banner-content">
              <Container>
                <h1 className="slider-title">Contact</h1>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div className="p-70 contact-info-sec contactus_container">
        <Container>
          <ListGroup as="ul" className="comp-info">
            <ListGroup.Item as="li" className="comp-info-li">
              <div className="comp-info-box">
                <span>
                  <img src={FphoneIcon} alt="VIVID WEB SOLUTIONS" />
                </span>
                <div className="comp-info-text">
                  <strong>Call us</strong>
                  +91 8469696384 <br /> +91 9913328048
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="comp-info-li">
              <div className="comp-info-box">
                <span>
                  <img src={FpinIcon} alt="VIVID WEB SOLUTIONS" />
                </span>
                <div className="comp-info-text">
                  <strong>Office location</strong>
                  Shiven square business hub, pal, Surat
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="comp-info-li">
              <div className="comp-info-box">
                <span>
                  <img src={FenvelopIcon} alt="VIVID WEB SOLUTIONS" />
                </span>
                <div className="comp-info-text">
                  <strong>Write to us</strong>
                  info@vividwebsolutions.in
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>

          <div className="contact-form">
            <h2>
              <small>LET'S TALK</small>Quick Contact
            </h2>
            <Form>
              <Row>
                <Col md={12}>
                  <FloatingLabel
                    controlId="floatingName"
                    label="Your Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={data.name}
                      onChange={(e) => onChange(e)}
                    />
                    {validation.name}
                  </FloatingLabel>
                </Col>
                <Col lg={6}>
                  <FloatingLabel
                    controlId="floatingPhone"
                    label="Phone"
                    className="mb-3"
                  >
                    <Form.Control
                      type="mobile"
                      value={data.mobile}
                      placeholder="Enter Mobile"
                      name="mobile"
                      onChange={(e) => onChange(e)}
                    />
                    {validation.mobile}
                  </FloatingLabel>
                </Col>
                <Col lg={6}>
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Email"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      value={data.email}
                      placeholder="Enter Email"
                      name="email"
                      onChange={(e) => onChange(e)}
                    />
                    {validation.email}
                  </FloatingLabel>
                </Col>
                <Col md={12}>
                  <FloatingLabel controlId="floatingMassage" label="Massage">
                    <Form.Control
                      as="textarea"
                      type="text"
                      rows={5}
                      style={{ resize: "none" }}
                      value={data.message}
                      placeholder="Enter Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={12}>
                  <br />
                  <Button className="btn-defult" onClick={submit}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </div>
      <div className="contactmap-sec">
        <img src={MapIcon} alt="VIVID WEB SOLUTIONS" />
      </div>
    </>
  );
}

export default Career;
