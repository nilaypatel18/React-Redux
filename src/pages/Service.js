import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import HeroBannerImg from "../assets/images/hero-banner.jpg";
import WebDebImg from "../assets/images/web-dev.png";
import WebwordpressImg from "../assets/images/wordpress-1.jpg";
import WebECommerceImg from "../assets/images/E-Commerce.png";

import CLaravelIcon from "../assets/images/career-laravel.png";
import CprestashopIcon from "../assets/images/prestashop.png";
import CyiiIcon from "../assets/images/yii.png";
import CsquarespaceIcon from "../assets/images/squarespace.png";
import CcodeignterIcon from "../assets/images/codeignter.png";

import CfigmaIcon from "../assets/images/figma.png";
import CpsIcon from "../assets/images/ps.png";
import CinvisionIcon from "../assets/images/invision.png";
import CsketchIcon from "../assets/images/sketch.png";
import CxdIcon from "../assets/images/xd.png";
import CzeplineIcon from "../assets/images/zepline.png";
import CwixIcon from "../assets/images/wix.png";

import CwooIcon from "../assets/images/woo.png";
import CbuddypressIcon from "../assets/images/buddypress.png";
import CvisualcomposerIcon from "../assets/images/visual-composer.png";
import CelementorIcon from "../assets/images/elementor.png";
import CyoastseoIcon from "../assets/images/yoast_seo.png";
import CwpmlIcon from "../assets/images/wpml.png";
import CopencartIcon from "../assets/images/opencart.png";
import CshopifyIcon from "../assets/images/shopify-icon.png";
import CbigcommerceIcon from "../assets/images/bigcommerce.png";
import CCMSIcon from "../assets/images/CMS.png";
import CwordpressIcon from "../assets/images/career-wordpress.png";
import CPHPIcon from "../assets/images/career-php.png";
import CAPIIcon from "../assets/images/API.jpeg";
import CmainIcon from "../assets/images/main2.jpg";
import { useLocation } from "react-router-dom";

function Service() {
  const { state } = useLocation();
  const php_section = useRef(null);
  const uiux_section = useRef(null);
  const wordpress_section = useRef(null);
  const ecomm_section = useRef(null);
  const cms_section = useRef(null);
  const api_section = useRef(null);
  const mainsup_section = useRef(null);

  useEffect(() => {
    if (state) {
      if (state.id == "php_section") {
        php_section.current.scrollIntoView();
      } else if (state.id == "uiux_section") {
        uiux_section.current.scrollIntoView();
      } else if (state.id == "wordpress_section") {
        wordpress_section.current.scrollIntoView();
      } else if (state.id == "ecomm_section") {
        ecomm_section.current.scrollIntoView();
      } else if (state.id == "cms_section") {
        cms_section.current.scrollIntoView();
      } else if (state.id == "api_section") {
        api_section.current.scrollIntoView();
      } else if (state.id == "mainsup_section") {
        mainsup_section.current.scrollIntoView();
      }
    }
  }, [state]);

  return (
    <>
      <div className="innerhero-banner">
        <div className="Hero-Banner-slider">
          <div className="banner-slide">
            <img src={HeroBannerImg} alt="vivid web solution" />
            <div className="banner-content">
              <Container>
                <h1 className="slider-title">Services</h1>
              </Container>
            </div>
          </div>
        </div>
      </div>

      <div className="service-secwrapper">
        <div className="services-section p-70" ref={php_section}>
          <Container>
            <div className="services-content">
              <img
                src={WebDebImg}
                alt="vivid web solution"
                className="languages-img"
              />
              <h2>PHP/MYSQL DEVELOPMENT</h2>
              <p>
                Website Development has always remained a real time challenge in
                the world of internet. But Vivid Web Solutions team , faces this
                challenge with ultimate prudency and provides the most effective
                solutions to clients. Since, we are a trusted Website
                Development company in Surat, we have been frequently sought for
                Website Designing & Developing services.
              </p>
              <p>
                Our professionals employ brainstorming ideas so as to make
                website from single Webpage Design to large scale customized
                website development live as well as a completely distinct piece
                of imagination. With the specialization in Website Development,
                KeyConcepts give maximum attention to develop Website using
                latest the most effective Development tools like PHP, JAVA,
                AJAX, HTML, Jquery, HTML, MVC, Silverlight and Database tools
                like SQL Server, MySQl, Access, SQLLite , MongoBD so that in the
                internet world you can provide 100% facilitated solutions.
              </p>
              <p>
                our PHP development team have effectively completed PHP web
                programming projects like ecommerce websites, business websites,
                CRM, CMS, social media websites community website and more.
              </p>
              <p>
                Please contact us to know how PHP web development service can
                affect your business and if you want to hire PHP web developers
                for your next project.
              </p>
              {/*
                <ul>
                  <li>provide you high quality customized web development service</li>
                  <li>Based on client’s requirements and their goals</li>
                  <li>Make the right use of modern web technologies and techniques</li>
                  <li>Produces innovative and superior websites</li>
                  <li>Giving visitors – a rich web experience</li>
                </ul>
                */}
              <div className="frameworks-div">
                <h4>Frameworks</h4>
                <ListGroup as="ul">
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Laravel"
                  >
                    <div className="laravel-farme">
                      <img src={CLaravelIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Prestashop"
                  >
                    <div className="prestashop-farme">
                      <img src={CprestashopIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="tooltip" data-tip="YII">
                    <div className="yii-farme">
                      <img src={CyiiIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Square Space"
                  >
                    <div className="squarespace-farme">
                      <img src={CsquarespaceIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Codeignter"
                  >
                    <div className="codeignter-farme">
                      <img src={CcodeignterIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Container>
        </div>

        <div className="services-section p-70" ref={uiux_section}>
          <Container>
            <div className="services-content">
              <img
                src={WebDebImg}
                alt="vivid web solution"
                className="languages-img"
              />
              <h2>UI/UX DESIGN</h2>
              <p>
                Our designing team is working really hard to give most creative
                web design concepts to the clients and fulfil their expectations
                like
              </p>
              <ListGroup as="ul" className="services-listul">
                <ListGroup.Item as="li">Web Page Design</ListGroup.Item>
                <ListGroup.Item as="li">Template Design</ListGroup.Item>
                <ListGroup.Item as="li">Figma to HTML Design</ListGroup.Item>
                <ListGroup.Item as="li">Layout Design</ListGroup.Item>
                <ListGroup.Item as="li">Portfolio Web Design</ListGroup.Item>
                <ListGroup.Item as="li">Interface Design</ListGroup.Item>
                <ListGroup.Item as="li">
                  HTML, JQuery, AJAX and JavaScript
                </ListGroup.Item>
              </ListGroup>
              <div className="frameworks-div">
                <h4>Frameworks</h4>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" className="tooltip" data-tip="Figma">
                    <div className="figma-farme">
                      <img src={CfigmaIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Photoshop"
                  >
                    <div className="ps-farme">
                      <img src={CpsIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="InVision"
                  >
                    <div className="invision-farme">
                      <img src={CinvisionIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="tooltip" data-tip="Sketch">
                    <div className="sketch-farme">
                      <img src={CsketchIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="tooltip" data-tip="XD">
                    <div className="xd-farme">
                      <img src={CxdIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="tooltip" data-tip="Zeplin">
                    <div className="zepline-farme">
                      <img src={CzeplineIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="tooltip" data-tip="WIX">
                    <div className="wix-farme">
                      <img src={CwixIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Container>
        </div>

        <div className="services-section p-70" ref={wordpress_section}>
          <Container>
            <div className="services-content">
              <img
                src={WebwordpressImg}
                alt="vivid web solution"
                className="languages-img"
              />
              <h2>WORDPRESS DEVELOPMENT</h2>
              <p>
                We have dedicated team which has expertise in WORDPRESS. We
                Prove our strength by deliver big range on custom plugin and
                theme.We can
              </p>
              <ListGroup as="ul" className="services-listul">
                <ListGroup.Item as="li">Migration Service</ListGroup.Item>
                <ListGroup.Item as="li">API Integration</ListGroup.Item>
                <ListGroup.Item as="li">Multilingual</ListGroup.Item>
                <ListGroup.Item as="li">Customize Plugin</ListGroup.Item>
                <ListGroup.Item as="li">Elementor Builder</ListGroup.Item>
                <ListGroup.Item as="li">Setup Premium Theme</ListGroup.Item>
                <ListGroup.Item as="li">
                  Customize Existing Theme
                </ListGroup.Item>
              </ListGroup>
              <div className="frameworks-div">
                <h4>Frameworks</h4>
                <ListGroup as="ul">
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="WooCommerce"
                  >
                    <div className="woo-farme">
                      <img src={CwooIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="BuddyPress"
                  >
                    <div className="buddypress-farme">
                      <img src={CbuddypressIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Visual Composer"
                  >
                    <div className="visual-farme">
                      <img src={CvisualcomposerIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Elementor"
                  >
                    <div className="elementor-farme">
                      <img src={CelementorIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="tooltip" data-tip="Yoast">
                    <div className="yoast-farme">
                      <img src={CyoastseoIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="tooltip" data-tip="WPML">
                    <div className="wpml-farme">
                      <img src={CwpmlIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Container>
        </div>

        <div className="services-section p-70" ref={ecomm_section}>
          <Container>
            <div className="services-content">
              <img
                src={WebECommerceImg}
                alt="vivid web solution"
                className="languages-img"
              />
              <h2>E-commerce Development</h2>
              <p>
                We provide E-Commerce solution that helps a lot to increase
                business worldwide. No one can stop us from grawing in business
                if we have proper, well developed website. We can build
                ecommerce platform using
              </p>

              <div className="frameworks-div">
                <h4>Frameworks</h4>
                <ListGroup as="ul">
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="WooCommerce"
                  >
                    <div className="woo-farme">
                      <img src={CwooIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="OpenCart"
                  >
                    <div className="opencart-farme">
                      <img src={CopencartIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Shopify"
                  >
                    <div className="shopify-farme">
                      <img src={CshopifyIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="BigCommerce"
                  >
                    <div className="bigcommerce-farme">
                      <img src={CbigcommerceIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Container>
        </div>

        <div className="services-section p-70" ref={cms_section}>
          <Container>
            <div className="services-content">
              <img
                src={CCMSIcon}
                alt="vivid web solution"
                className="languages-img"
              />
              <h2>CMS & MVC Website Development</h2>
              <p>
                CMS Content management system is a computer program that allows
                publishing, editing and modifying content as well as maintenance
                from a central interface.
              </p>
              <p>
                We have team which is good in different CMS & MVC frameworks
                like
              </p>

              <div className="frameworks-div">
                <h4>Frameworks</h4>
                <ListGroup as="ul">
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Wordpress"
                  >
                    <div className="wordpress-farme">
                      <img src={CwordpressIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Codeignter"
                  >
                    <div className="codeignter-farme">
                      <img src={CcodeignterIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="tooltip" data-tip="PHP">
                    <div className="php-farme">
                      <img src={CPHPIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="tooltip"
                    data-tip="Laravel"
                  >
                    <div className="laravel-farme">
                      <img src={CLaravelIcon} alt="vivid web solution" />
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Container>
        </div>

        <div className="services-section p-70" ref={api_section}>
          <Container>
            <div className="services-content">
              <img
                src={CAPIIcon}
                alt="vivid web solution"
                className="languages-img"
              />
              <h2>API Development</h2>
              <p>
                We have dedicated team which has expertise in web API Soap and
                rest. For better understanding we prepare API user guide, train
                our clients for all scenario. Complete API development and full
                support is our strength.
              </p>
            </div>
          </Container>
        </div>

        <div className="services-section p-70" ref={mainsup_section}>
          <Container>
            <div className="services-content">
              <img
                src={CmainIcon}
                alt="vivid web solution"
                className="languages-img"
              />
              <h2>Maintenance and Support</h2>
              <p>
                VIVID web solutions provide elegant and powerful web solution
                with excellent Quality. We also offering maintenance support to
                maintain the quality. Within or after the development and
                delivery, Complete support is our guarantee. All clients are
                given equal importance and full follow up.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Service;
