import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import WebProgrammingIcon from "../assets/svg/WebProgramming-icon";
import WebdesigningIcon from "../assets/svg/Webdesigning-icon";
import EcommerceIcon from "../assets/svg/Ecommerce-icon";
import CMSIcon from "../assets/svg/Cms-icon";
import WordpressIcon from "../assets/svg/Wordpress-icon";
import AppIcon from "../assets/svg/App-icon";
import ApiIcon from "../assets/svg/Api-icon";
import MaintenanceIcon from "../assets/svg/Maintenance-icon";

import { useSelector } from "react-redux";

function Service() {
  const HomeData = useSelector((state) => state.HomeReducer.homeData);

  const serviceIcon = [
    WebProgrammingIcon,
    WebdesigningIcon,
    EcommerceIcon,
    CMSIcon,
    WordpressIcon,
    AppIcon,
    ApiIcon,
    MaintenanceIcon,
  ];

  return (
    <section
      className="service-section"
      data-aos="fade-right"
      data-aos-duration="900"
    >
      <div className="service-bgsec">
        <Container>
          <Row>
            <Col>
              <div className="page-title">SERVICES</div>
            </Col>
          </Row>
          <Row>
            {HomeData.services
              ? HomeData.services.reverse().map((service, idx) => (
                  <Col className="service-col" md={4} key={idx}>
                    <Link to="#">
                      <div
                        className="service-boxdiv"
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="600"
                        data-aos-delay={(idx + 1) * 110}
                      >
                        <div className="inner">
                          <div className="service-svg">
                            {serviceIcon.map((Si, key) => (
                              <>{idx == key ? <Si /> : ""}</>
                            ))}
                          </div>
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>
                          <span className="readmore"></span>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))
              : ""}
          </Row>
        </Container>
      </div>
    </section>
  );
}
export default Service;
