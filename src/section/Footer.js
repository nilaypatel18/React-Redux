import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import Logowhite from "../assets/images/logo-white.png";
import PhoneIcon from "../assets/images/f-phone.png";
import LocationIcon from "../assets/images/f-pin.png";
import EnvelopeIcon from "../assets/images/f-envelope.png";
import FacebookIcon from '../assets/svg/Facebook-icon';
import LinkdinIcon from "../assets/svg/Linkdin-icon";
import InstagramIcon from '../assets/svg/Instagram-icon';


const Footer = () => {
  return (
      <footer id="footer" className="site-footer">
        {/*
        <div className="iconanimate-div">
                <div className="iconanimate-leftpart">
                    <span className="codeicon-animate"><img src={require('../images/code-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="cssicon-animate"><img src={require('../images/css-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="laravelicon-animate"><img src={require('../images/laravel-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="mysqlicon-animate up-down"><img src={require('../images/mysql-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="phpicon-animate"><img src={require('../images/php-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="psicon-animate"><img src={require('../images/ps-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="wooicon-animate"><img src={require('../images/woo-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="wordpressicon-animate"><img src={require('../images/wordpress-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                </div>
                <div className="iconanimate-rightpart">
                    <span className="codeicon-animate"><img src={require('../images/code-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="cssicon-animate"><img src={require('../images/css-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="laravelicon-animate"><img src={require('../images/laravel-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="mysqlicon-animate up-down"><img src={require('../images/mysql-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="phpicon-animate"><img src={require('../images/php-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="psicon-animate"><img src={require('../images/ps-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="wooicon-animate"><img src={require('../images/woo-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    <span className="wordpressicon-animate"><img src={require('../images/wordpress-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                </div>
            </div>
          */}
          <Container>  
            <div className="footer-logo text-center">        
                <Link to="/home" className="foot-logo-a">
                  <img src={Logowhite} alt="VIVID WEB SOLUTIONS" />
                </Link>           
            </div>
            <ListGroup className="comp-info">
                <ListGroup.Item className="comp-info-li">
                  <div className="comp-info-box">
                        <span><img src={PhoneIcon} alt="VIVID WEB SOLUTIONS" /></span> 
                        <div className="comp-info-text">
                            <strong>Call us</strong>
                            +91 8469696384 &nbsp; / &nbsp; +91 9913328048
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className="comp-info-li">
                  <div className="comp-info-box">
                      <span><img src={LocationIcon} alt="VIVID WEB SOLUTIONS" /></span> 
                        <div className="comp-info-text">
                            <strong>Office location</strong>
                            Shiven square business hub, pal, Surat
                        </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="comp-info-li">
                  <div className="comp-info-box">
                        <span><img src={EnvelopeIcon} alt="VIVID WEB SOLUTIONS" /></span> 
                        <div className="comp-info-text">
                            <strong>Write to us</strong>
                            info@vividwebsolutions.in
                        </div>
                  </div>
                </ListGroup.Item>
            </ListGroup>                             
          </Container>

        <div className="copyright-text">
            <p>&copy; 2021 All rights reserved Vivid Web Solutions</p>
            <ListGroup className="footer-social-ul">
              <ListGroup.Item action href="#">
                <FacebookIcon />
              </ListGroup.Item>
              <ListGroup.Item action href="#">
                <LinkdinIcon />
              </ListGroup.Item>
              <ListGroup.Item action href="#">
                <InstagramIcon />
              </ListGroup.Item>
            </ListGroup>                            
        </div>
    </footer> 
  );
};

export default Footer;
