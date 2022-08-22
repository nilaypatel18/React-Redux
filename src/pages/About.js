import React, { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import ListGroup from "react-bootstrap/ListGroup";

import VividfriendshipImg from "../assets/images/happy-friendship.png";
import UnUser from "../assets/images/anonymous-user.jpg";
import CodeIcon from "../assets/images/code-wanimate.png";
import CSSIcon from "../assets/images/css-wanimate.png";
import LaravelIcon from "../assets/images/laravel-wanimate.png";
import MysqlIcon from "../assets/images/mysql-wanimate.png";
import PHPIcon from "../assets/images/php-wanimate.png";
import PsIcon from "../assets/images/ps-wanimate.png";
import WooIcon from "../assets/images/woo-wanimate.png";
import WordpressIcon from "../assets/images/wordpress-wanimate.png";
import { useDispatch, useSelector } from "react-redux";
import InstagramFeed from "react-ig-feed";

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const mainVideo =
  "https://prod-back.ketomei.com/wp-content/uploads/2018/02/video1.mp4";

function About() {
  const dispatch = useDispatch();
  const teammembers = useSelector((state) => state.HomeReducer.teammember);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);

  useEffect(() => {
    dispatch({ type: "Get_All_TeamMember" });

    if (isSafari() && videoParentRef.current) {
      const player = videoParentRef.current.children[0];

      if (player) {
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", "");
        player.autoplay = true;

        setTimeout(() => {
          const promise = player.play();
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  return (
    <>
      <div className="innerhero-banner">
        <div className="Hero-Banner-slider">
          <div className="banner-slide">
            <div
              className="banner-video"
              ref={videoParentRef}
              dangerouslySetInnerHTML={{
                __html: `
                          <video
                          loop
                          muted
                          autoplay
                          playsinline
                          webkit-playsinline
                          preload="metadata"
                          >
                          <source src="${mainVideo}" type="video/mp4" />
                          </video>`,
              }}
            ></div>
            <div className="banner-content">
              <Container>
                <h1 className="slider-title">About Us</h1>
              </Container>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section p-70">
        <Container>
          <div className="aboutpage-content">
            <p>
              VIVID WEB SOLUTIONS is an IT company based in Surat, Gujarat
              providing IT Solutions like Website Development, Website Design,
              Mobile App Development, Custom Software Development and much more.
            </p>
            <p>
              We have very experienced team to serve you the best. We provide
              cost-effective, quality and on-time solutions to clients.
            </p>
            <p>
              We are in a position to offer a superior level of services and
              support to our clients. It is the only place where you can get
              good quality as well as on-time work under one roof.
            </p>
            <p>
              Our central goal is to provide best IT services and to fulful
              clients requirements on time.
            </p>
            <p>
              We have our loyal clients in USA, UK, Netherland, Vitenam, Israel,
              Germany, Dubai, South Africa, Canada, Kuwait, Denmark and
              Australia since long.
            </p>
          </div>
          <div className="aboutpage-banner">
            <img src={VividfriendshipImg} alt="vivid web solution" />
          </div>
        </Container>
      </div>

      {/*
      <div className="aboutfact-section p-70">
        <Container>      
          <div className="aboutfact-title">
              <h2>Fun facts about the team and why people love us</h2>
            </div> 
          <Row className="aboutfactrow">        
            <div className="aboutfact-banner">
                <img src={AboutFactImg} alt="vivid web solution" />  
              </div>
            <div className="aboutfact-boxcl">
              <Row>
                <div className="aboutfact-colsbox softmaintence">
                  <div className="aboutfact-box">
                      <div className="aboutfact-img">
                        <MaintenanceIcon />
                      </div>
                      <h3>Software Maintenance</h3>
                      <p>Have you already developed an application for your business, but now looking someone experienced to maintain & enhance the application for you?</p>
                  </div>
                </div>
                <div className="aboutfact-colsbox strategiconsult">
                  <div className="aboutfact-box">
                    <div className="aboutfact-img">
                        <MaintenanceIcon />
                      </div>
                    <h3>Strategic IT Consulting</h3>
                    <p>To create strategies that transform business enterprises by aligning IT strategy and priorities to meet business objectives.</p>
                  </div>
                </div>
              </Row>
              <Row className="row2">
                <div className="aboutfact-colsbox optimizweb">
                    <div className="aboutfact-box">
                      <div className="aboutfact-img">
                        <MaintenanceIcon />
                      </div>
                      <h3>Optimizing Website</h3>
                      <p>Looking for optimizing of your high loaded? Try our Product nopAccelerate now.</p>
                    </div>
                </div>
                <div className="aboutfact-colsbox devmaintenweb">
                  <div className="aboutfact-box">
                    <div className="aboutfact-img">
                        <MaintenanceIcon />
                      </div>
                    <h3>Website Development / Maintenance</h3>
                    <p>Looking for setting up an eCommerce Store, Than Contact us now to know how we can help you.</p>
                  </div>
                </div>                
              </Row>
            </div>
            </Row>  
          </Container>      
      </div>
*/}
      <div className="career-banner-section p-70">
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

      <div className="ourteam-section p-70">
        <Container>
          <div className="page-title">Our Team</div>
          <div className="teamlist-div">
            <Slider className="teamlist-slider" {...settings}>
              {teammembers &&
                teammembers.map((tmb, idx) => (
                  <div className="teamlist-slide">
                    <div className="team-empinner">
                      <div className="teamlist-picdiv">
                        <img
                          src={tmb.image ? tmb.image : UnUser}
                          alt="VIVID WEB SOLUTIONS"
                        />
                      </div>
                      <div className="team-namediv">
                        <h3 dangerouslySetInnerHTML={{ __html: tmb.name }}></h3>
                        <span>{tmb.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </Container>
      </div>     
    </>
  );
}

export default About;
