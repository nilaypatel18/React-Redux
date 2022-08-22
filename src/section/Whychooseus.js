import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CodeIcon from "../assets/images/code-animate.png";
import CSSIcon from "../assets/images/css-animate.png";
import LaravelIcon from "../assets/images/laravel-animate.png";
import MysqlIcon from "../assets/images/mysql-animate.png";
import PHPIcon from "../assets/images/php-animate.png";
import PsIcon from "../assets/images/ps-animate.png";
import WooIcon from "../assets/images/woo-animate.png";
import WordpressIcon from "../assets/images/wordpress-animate.png";
import ReactIcon from "../assets/images/react-icon.png";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { useSelector } from "react-redux";

function Whychooseus() {
  const HomeData = useSelector((state) => state.HomeReducer.homeData);

  const [isClientCounted, setisClientCounted] = useState(false);
  const [isExpertCounted, setisExpertCounted] = useState(false);
  const [isProjectCounted, setisProjectCounted] = useState(false);
  const [isExperienceCounted, setisExperienceCounted] = useState(false);

  const displayClientback = () => {
    setisClientCounted(true);
  };
  const displayExpertback = () => {
    setisExpertCounted(true);
  };
  const displayProjectback = () => {
    setisProjectCounted(true);
  };
  const displayExperienceback = () => {
    setisExperienceCounted(true);
  };

  const countNum = (type) => {
    var cdata = HomeData.why_choose_us.counter;
    if (cdata) {
      for (let i = 0; i < cdata.length; i++) {
        if (cdata[i].title == type) {
          return cdata[i].number;
        }
      }
    }
  };

  return (
    <section className="whychoose-section">
      <div className="iconanimate-div">
        <div className="iconanimate-leftpart">
          <span className="reacticon-animate">
            <img src={ReactIcon} alt="VIVID WEB SOLUTIONS" />
          </span>
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

      <Container       
        className="whychoose-container"
      >
        <div className="whychoose-content" data-aos="fade-right"   data-aos-duration="900">
          <div className="service-title">
            {HomeData.why_choose_us ? HomeData.why_choose_us.section_title : ""}
          </div>
          <h2>{HomeData.why_choose_us ? HomeData.why_choose_us.title : ""}</h2>
          <p>
            {/*HomeData.why_choose_us ? HomeData.why_choose_us.content : ""*/}
            VIVID web solution is a global IT Solution company based in Surat,
            India. Providing IT Solution like Website Development, Website
            Design , Mobile app Development , Custom Software Development and
            More.
          </p>
          <p>
            It is a customer focused and technology driven company providing
            product engineering and enterprise software / application for their
            IT efforts. Highly qualitative, timely delivered and cost effective
            client solutions are our main focus. Over the years Key Concepts has
            earned ineffaceable reputation by engineering.
          </p>
          <p>
            Business centric solution so we have now spread our roots worldwide.
          </p>
        </div>
      </Container>
      <div className="whychoose-counter" data-aos="fade-left"   data-aos-duration="900">
        <Row>
          <Col className="whychoose-cuntcol">
            <div
              className={`cunt-stroke${
                isClientCounted ? " count_display_strock" : ""
              }`}
            >
              {countNum("Happy Clients")}+
            </div>
            <div className="cuntcol-box">
              <div className="cuntcol-number">
                <VisibilitySensor offset={{ top: 0 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 55, float: "left" }}>
                      {isVisible ? (
                        !isClientCounted ? (
                          <CountUp
                            end={countNum("Happy Clients")}
                            duration={3}
                            onEnd={displayClientback}
                          />
                        ) : (
                          countNum("Happy Clients")
                        )
                      ) : (
                        countNum("Happy Clients")
                      )}
                    </div>
                  )}
                </VisibilitySensor>
              </div>

              <div className="cuntcol-text">
                <span>Happy</span>Clients
              </div>
            </div>
          </Col>
          <Col className="whychoose-cuntcol">
            <div
              className={`cunt-stroke${
                isProjectCounted ? " count_display_strock" : ""
              }`}
            >
              {countNum("Projects")}+
            </div>
            <div className="cuntcol-box">
              <div className="cuntcol-number">
                <VisibilitySensor partialVisibility offset={{ top: 0 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 55, float: "left" }}>
                      {isVisible ? (
                        !isProjectCounted ? (
                          <CountUp
                            end={countNum("Projects")}
                            duration={3}
                            onEnd={displayProjectback}
                          />
                        ) : (
                          countNum("Projects")
                        )
                      ) : (
                        countNum("Projects")
                      )}
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <div className="cuntcol-text">
                <span>Incredible</span>Projects
              </div>
            </div>
          </Col>
          <Col className="whychoose-cuntcol">
            <div
              className={`cunt-stroke${
                isExperienceCounted ? " count_display_strock" : ""
              }`}
            >
              {countNum("YEARS Experiance")}+
            </div>
            <div className="cuntcol-box">
              <div className="cuntcol-number">
                <VisibilitySensor partialVisibility offset={{ top: 0 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 55, float: "left" }}>
                      {isVisible ? (
                        !isExperienceCounted ? (
                          <CountUp
                            end={countNum("YEARS Experiance")}
                            duration={3}
                            onEnd={displayExperienceback}
                          />
                        ) : (
                          countNum("YEARS Experiance")
                        )
                      ) : (
                        countNum("YEARS Experiance")
                      )}
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <div className="cuntcol-text">
                <span>years</span>Experiance
              </div>
            </div>
          </Col>
          <Col className="whychoose-cuntcol">
            <div
              className={`cunt-stroke${
                isExpertCounted ? " count_display_strock" : ""
              }`}
            >
              {countNum("IT Experts")}+
            </div>
            <div className="cuntcol-box">
              <div className="cuntcol-number">
                <VisibilitySensor partialVisibility offset={{ top: 0 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 55, float: "left" }}>
                      {isVisible ? (
                        !isExpertCounted ? (
                          <CountUp
                            end={countNum("IT Experts")}
                            duration={3}
                            onEnd={displayExpertback}
                          />
                        ) : (
                          countNum("IT Experts")
                        )
                      ) : (
                        countNum("IT Experts")
                      )}
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <div className="cuntcol-text">
                <span>IT</span>Experts
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
export default Whychooseus;
