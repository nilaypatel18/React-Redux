import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import HeroBanner from "../assets/images/hero-banner.jpg";
import CareerRectIcon from "../assets/images/career-react.png";
import CareerWordpressIcon from "../assets/images/career-wordpress.png";
import CareerPHPIcon from "../assets/images/career-php.png";
import CareerLaravelIcon from "../assets/images/career-laravel.png";
import CareerShopifyIcon from "../assets/images/career-shopify.png";
import CareerFresherIcon from "../assets/images/fresher.png";
import CareerUIdesignIcon from "../assets/images/ui-design.png";
import CareerInternsIcon from "../assets/images/internal.png";

import { createCarrer } from "../utils/apiList";
import { ToastContainer, toast } from "react-toastify";

import CodeIcon from "../assets/images/code-wanimate.png";
import CSSIcon from "../assets/images/css-wanimate.png";
import LaravelIcon from "../assets/images/laravel-wanimate.png";
import MysqlIcon from "../assets/images/mysql-wanimate.png";
import PHPIcon from "../assets/images/php-wanimate.png";
import PsIcon from "../assets/images/ps-wanimate.png";
import WooIcon from "../assets/images/woo-wanimate.png";
import WordpressIcon from "../assets/images/wordpress-wanimate.png";

function Career() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    user_Exp: "",
    location: "",
    postion_apply_for: "",
    message: "",
    file: [],
  });

  const [validation, setValidation] = useState({
    name: "",
    email: "",
    mobile: "",
    user_Exp: "",
    location: "",
    postion_apply_for: "",
    file: "",
  });

  const [isSubmited, setIsSubmited] = useState(false);
  const [isCarrerModal, setIsCarrerModal] = useState(false);

  const carrerOption = [
    "ReactJS Developer",
    "WordPress Developer",
    "PHP Developer",
    "Laravel Developer",
    "UX/UI Web Designer",
    "Shopify Developer",
    "Freshar",
    "Intern",
  ];

  const handleFileChange = (event) => {
    var file = event.target.files[0];
    var file_name = event.target.files[0].name;
    var type = "";

    if (file.size > 3000000) {
      setValidation({
        ...validation,
        file: (
          <small className="text-danger">
            Maximum file size 3MB. Please reduce file size to upload.
          </small>
        ),
      });
    } else if (
      !file.name.includes(".docx") &&
      !file.name.includes(".dox") &&
      !file.name.includes(".pdf")
    ) {
      setValidation({
        ...validation,
        file: <small className="text-danger">File type is invalid</small>,
      });
    } else {
      setValidation({
        ...validation,
        file: "",
      });

      var file = event.target.files[0];
      /*var fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        var searhData = fileReader.result;
        setProfileImg({ imageData: searhData, imageName: file.name });
      };*/
      setData({
        ...data,
        file: file,
      });
    }
  };

  const handleFileClick = () => {
    document.getElementById("fileselect").click();
    setValidation({
      ...validation,
      file: "",
    });

    setData({
      ...data,
      file: [],
    });
  };

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name == "mobile") {
      const PhoneReg = /^[\d+ ]+$/;
      if (PhoneReg.test(value) || value == "") {
        setData({
          ...data,
          [name]: value,
        });

        if (isSubmited) {
          validate(name, value);
        }
      }
    } else {
      setData({
        ...data,
        [name]: value,
      });

      if (isSubmited) {
        validate(name, value);
      }
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

    if (name == "user_Exp") {
      if (value == "" || value == null) {
        setValidation({
          ...validation,
          user_Exp: (
            <small className="text-danger">
              Please select years of experiance
            </small>
          ),
        });
      } else {
        setValidation({
          ...validation,
          user_Exp: "",
        });
      }
    }

    if (name == "location") {
      if (value == "" || value == null) {
        setValidation({
          ...validation,
          location: (
            <small className="text-danger">Please select your location</small>
          ),
        });
      } else {
        setValidation({
          ...validation,
          location: "",
        });
      }
    }

    if (name == "postion_apply_for") {
      if (value == "" || value == null) {
        setValidation({
          ...validation,
          postion_apply_for: (
            <small className="text-danger">
              Please select a position you are applying for
            </small>
          ),
        });
      } else {
        setValidation({
          ...validation,
          postion_apply_for: "",
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
      user_Exp: "",
      location: "",
      postion_apply_for: "",
      file: "",
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

    if (data.user_Exp == "" || data.user_Exp == null) {
      error = true;
      submit_error.user_Exp = (
        <small className="text-danger">Please select years of experiance</small>
      );
    }

    if (data.location == "" || data.location == null) {
      error = true;
      submit_error.location = (
        <small className="text-danger">Please select your location</small>
      );
    }

    if (data.postion_apply_for == "" || data.postion_apply_for == null) {
      error = true;
      submit_error.postion_apply_for = (
        <small className="text-danger">
          Please select a position you are applying for
        </small>
      );
    }

    if (data.file.length == 0) {
      error = true;
      submit_error.file = (
        <small className="text-danger">Please upload your resume</small>
      );
    }

    setValidation(submit_error);
    setIsSubmited(true);

    if (!error) {
      let fdata = new FormData();
      fdata.append("resume", data.file);
      fdata.append("name", data.name);
      fdata.append("email", data.email);
      fdata.append("mobile", data.mobile);
      fdata.append("user_Exp", data.user_Exp);
      fdata.append("location", data.location);
      fdata.append("postion_apply_for", data.postion_apply_for);
      fdata.append("message", data.message);

      await createCarrer(fdata)
        .then((res) => {
          setIsCarrerModal(false);
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const careerModal = (id) => {
    setData({
      ...data,
      postion_apply_for: carrerOption[id - 1],
      name: "",
      email: "",
      mobile: "",
      user_Exp: "",
      location: "",
      message: "",
      file: [],
    });

    setValidation({
      name: "",
      email: "",
      mobile: "",
      user_Exp: "",
      location: "",
      postion_apply_for: "",
      file: "",
    });

    setIsCarrerModal(true);
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
      <ToastContainer />
      <div className="innerhero-banner">
        <div className="Hero-Banner-slider">
          <div className="banner-slide">
            <img src={HeroBanner} alt="vivid web solution" />
            <div className="banner-content">
              <Container>
                <h1 className="slider-title">Career</h1>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div className="career-section p-70">
        <Container>
          <div className="career-titlediv">
            <h2>We’re Hiring!</h2>
            <h4>Apply and Schedule an Interview</h4>
          </div>
          <Row>
            <Col lg={6}>
              <Button
                className="career-box-link"
                onClick={() => careerModal(1)}
              >
                <div className="career-boxdiv react-career">
                  <div className="career-img">
                    <img src={CareerRectIcon} alt="vivid web solution" />
                  </div>
                  <div className="career-text">
                    <h3>ReactJS Developer</h3>
                    <p>1 Years of Experience</p>
                    <span className="readmore"></span>
                  </div>
                </div>
              </Button>
            </Col>
            <Col lg={6}>
              <Button
                className="career-box-link"
                onClick={() => careerModal(2)}
              >
                <div className="career-boxdiv wordpress-career">
                  <div className="career-img">
                    <img src={CareerWordpressIcon} alt="vivid web solution" />
                  </div>
                  <div className="career-text">
                    <h3>WordPress Developer</h3>
                    <p>3+ Months to 2 Years of Experience</p>
                    <span className="readmore"></span>
                  </div>
                </div>
              </Button>
            </Col>

            <Col lg={6}>
              <Button
                className="career-box-link"
                onClick={() => careerModal(3)}
              >
                <div className="career-boxdiv php-career">
                  <div className="career-img">
                    <img src={CareerPHPIcon} alt="vivid web solution" />
                  </div>
                  <div className="career-text">
                    <h3>PHP Developer</h3>
                    <p>3+ Months to 2 Years of Experience</p>
                    <span className="readmore"></span>
                  </div>
                </div>
              </Button>
            </Col>

            <Col lg={6}>
              <Button
                className="career-box-link"
                onClick={() => careerModal(4)}
              >
                <div className="career-boxdiv laravel-career">
                  <div className="career-img">
                    <img src={CareerLaravelIcon} alt="vivid web solution" />
                  </div>
                  <div className="career-text">
                    <h3>Laravel Developer</h3>
                    <p>3+ Months to 2 Years of Experience</p>
                    <span className="readmore"></span>
                  </div>
                </div>
              </Button>
            </Col>

            <Col lg={6}>
              <Button
                className="career-box-link"
                onClick={() => careerModal(5)}
              >
                <div className="career-boxdiv uxui-career">
                  <div className="career-img">
                    <img src={CareerUIdesignIcon} alt="vivid web solution" />
                  </div>
                  <div className="career-text">
                    <h3>UX/UI Web Designer</h3>
                    <p>3+ Months to 2 Years of Experience</p>
                    <span className="readmore"></span>
                  </div>
                </div>
              </Button>
            </Col>

            <Col lg={6}>
              <Button
                className="career-box-link"
                onClick={() => careerModal(6)}
              >
                <div className="career-boxdiv Shopify-career">
                  <div className="career-img">
                    <img src={CareerShopifyIcon} alt="vivid web solution" />
                  </div>
                  <div className="career-text">
                    <h3>Shopify Developer</h3>
                    <p>3+ Months to 2 Years of Experience</p>
                    <span className="readmore"></span>
                  </div>
                </div>
              </Button>
            </Col>

            <Col lg={6}>
              <Button
                className="career-box-link"
                onClick={() => careerModal(7)}
              >
                <div className="career-boxdiv freshers-career">
                  <div className="career-img">
                    <img src={CareerFresherIcon} alt="vivid web solution" />
                  </div>
                  <div className="career-text">
                    <h3>Freshers</h3>
                    <p>start your career in IT</p>
                    <span className="readmore"></span>
                  </div>
                </div>
              </Button>
            </Col>

            <Col lg={6}>
              <Button
                className="career-box-link"
                onClick={() => careerModal(8)}
              >
                <div className="career-boxdiv interns-career">
                  <div className="career-img">
                    <img src={CareerInternsIcon} alt="vivid web solution" />
                  </div>
                  <div className="career-text">
                    <h3>Interns</h3>
                    <p>Get trained to get employed with you</p>
                    <span className="readmore"></span>
                  </div>
                </div>
              </Button>
            </Col>
          </Row>

          <Modal
            className="career-formpopup"
            show={isCarrerModal}
            onHide={() => setIsCarrerModal(false)}
            backdrop="static"
            centered
          >
            <Modal.Header className="text-center" closeButton>
              <Modal.Title>Apply and Schedule an Interview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingName"
                      label="Name"
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
                  <Col md={6}>
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
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingMobnumb"
                      label="Mobile Number"
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
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingYearExp"
                      label="Years of EXP"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        value={data.user_Exp}
                        placeholder="Enter Year of Experience"
                        name="user_Exp"
                        onChange={(e) => onChange(e)}
                      />
                      {validation.user_Exp}
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingLocation"
                      label="Location"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        value={data.location}
                        placeholder="Enter Your Location"
                        name="location"
                        onChange={(e) => onChange(e)}
                      />
                      {validation.location}
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingPositionApply"
                      label="Position Applying for"
                      className="mb-3"
                    >
                      <Form.Select
                        aria-label="Position Applying for"
                        type="text"
                        name="postion_apply_for"
                        value={data.postion_apply_for}
                        onChange={(e) => onChange(e)}
                      >
                        <option value="">Select Position</option>
                        {carrerOption.map((co, idx) => (
                          <option key={idx} value={co}>
                            {co}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md={12}>
                    <FloatingLabel
                      controlId="floatingMessage"
                      label="Message"
                      className="mb-3"
                    >
                      <Form.Control
                        as="textarea"
                        type="text"
                        rows={5}
                        style={{ resize: "none" }}
                        value={data.message}
                        placeholder="Message"
                        name="message"
                        onChange={(e) => onChange(e)}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="uploadresume-label">
                        <strong>Upload Resume </strong>
                        <small>
                          Only doc, docx and pdf file format allow. Max file
                          upload limit: (3MB)
                        </small>
                      </Form.Label>
                      <input
                        style={{ display: "none" }}
                        id="fileselect"
                        type="file"
                        className="form-control"
                        name="resume"
                        onChange={(e) => handleFileChange(e)}
                      />
                      <Button
                        className="btn-defult Career_Uploadbutton"
                        onClick={handleFileClick}
                      >
                        Upload Resume
                      </Button>
                      <h5 style={{ display: "inline-block", fontSize: 18 }}>
                        {data.file.name}
                      </h5>
                      <p>{validation.file}</p>
                    </Form.Group>
                  </Col>
                  <Col md={12} className="text-center">
                    <Button className="btn-defult" onClick={submit}>
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </Modal>
        </Container>
      </div>

      <div className="career-banner-section career-bannerpage p-70">
        <div className="iconanimate-div">
          <div className="iconanimate-leftpart">
            <span className="codeicon-animate">
              <img src={CodeIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="cssicon-animate">
              <img src={CSSIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="laravelicon-animate">
              <img src={LaravelIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="mysqlicon-animate up-down">
              <img src={MysqlIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="phpicon-animate">
              <img src={PHPIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="psicon-animate">
              <img src={PsIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="wooicon-animate">
              <img src={WooIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="wordpressicon-animate">
              <img src={WordpressIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
          </div>
          <div className="iconanimate-rightpart">
            <span className="codeicon-animate">
              <img src={CodeIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="cssicon-animate">
              <img src={CSSIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="laravelicon-animate">
              <img src={LaravelIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="mysqlicon-animate up-down">
              <img src={MysqlIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="phpicon-animate">
              <img src={PHPIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="psicon-animate">
              <img src={PsIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="wooicon-animate">
              <img src={WooIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
            <span className="wordpressicon-animate">
              <img src={WordpressIcon} alt="VIVID WEB SOLUTIONS" />
            </span>
          </div>
        </div>
        <Container>
          <div className="career-banner-content">
            <h2>Your Dream Jobs Are Waiting</h2>
            <p>
              Vivid web solutuion can provide many career opportunities to many
              individuals in a fun working environment.
            </p>

            <h3>EMPLOYEE BENEFITS</h3>
            <ListGroup as="ul">
              <ListGroup.Item as="li">Friendly Work Enviornment</ListGroup.Item>
              <ListGroup.Item as="li">Paid Leaves</ListGroup.Item>
              <ListGroup.Item as="li">Monthly 2 Saturday Leave</ListGroup.Item>
              <ListGroup.Item as="li">Office Picnic</ListGroup.Item>
              <ListGroup.Item as="li">Festival Celebration</ListGroup.Item>
              <ListGroup.Item as="li">Remote Work</ListGroup.Item>
            </ListGroup>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Career;
