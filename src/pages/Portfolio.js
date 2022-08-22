import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

import HeroBanner from "../assets/images/hero-banner.jpg";
import Tinytails from "../assets/images/tinytails.jpg";
import { useDispatch, useSelector } from "react-redux";

import PortWordpressIcon from "../assets/images/port-wordpress-icon.png";
import PortWixIcon from "../assets/images/wix.png";
import PortPHPIcon from "../assets/images/career-php.png";
import PortcodeignterIcon from "../assets/images/codeignter.png";
import PortlarvelIcon from "../assets/images/career-laravel.png";
import PortshopifyIcon from "../assets/images/career-shopify.png";
import PortreactIcon from "../assets/images/career-react.png";
import PortsquarespaceIcon from "../assets/images/squarespace.png";
import PortmagentoIcon from "../assets/images/magento.png"; 

function Portfolio() {
  const dispatch = useDispatch();
  const Framework = useSelector((state) => state.HomeReducer);
  const [frameWork, setframeWork] = useState([]);
  const [lastpage, setLastpage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFramwork, setCurrentframwork] = useState(0);

  const catIcon = {
    Wordpress: PortWordpressIcon,
    Laravel: PortlarvelIcon,
    Magento: PortmagentoIcon,
    React: PortreactIcon,
    Shopify: PortshopifyIcon,
    Codeigniter: PortcodeignterIcon,
    Wix: PortWixIcon,
    Squrespace: PortsquarespaceIcon,
    Php: PortPHPIcon,
    CakePhp: PortPHPIcon,
  };

  useEffect(() => {
    dispatch({
      type: "Get_Portfolio_Details",
      payload: {
        par_page: 9,
        page: 1,
        slug: "",
      },
    });
  }, []);

  useEffect(() => {
    if (Framework.frameworks == null) {
      dispatch({ type: "Get_All_Framework" });
    } else {
      var framwoks = [];
      for (let i = 0; i <= Object.keys(Framework.frameworks).length; i++) {
        var details = null;
        if (i == 0) {
          details = {
            slug: "",
            label: "All",
          };
        } else {
          details = {
            slug: Object.keys(Framework.frameworks)[i - 1],
            label:
              Framework.frameworks[Object.keys(Framework.frameworks)[i - 1]],
          };
        }

        framwoks.push(details);
      }

      setframeWork(framwoks);
    }
  }, [Framework]);

  useEffect(() => {
    if (Framework.portfolio) {
      var records = Framework.portfolio.total_records;
      var page = "";
      if (records % 9 == 0) {
        page = records / 9;
      } else {
        page = (records - (records % 9)) / 9 + 1;
      }
      setLastpage(page);
    }
  }, [Framework.portfolio]);

  const topnavChange = (id) => {
    dispatch({
      type: "Get_Portfolio_Details",
      payload: {
        par_page: 9,
        page: 1,
        slug: frameWork[id].slug,
      },
    });
    setCurrentPage(1);
    setCurrentframwork(id);
  };

  const loadpage = (page) => {
    setCurrentPage(page);
    var par_page_account = page * 9;
    dispatch({
      type: "Get_Portfolio_Details",
      payload: {
        par_page: par_page_account,
        page: 1,
        slug: frameWork[currentFramwork].slug,
      },
    });
  };

  return (
    <>
      <div className="innerhero-banner">
        <div className="Hero-Banner-slider">
          <div className="banner-slide">
            <img src={HeroBanner} alt="vivid web solution" />
            <div className="banner-content">
              <div className="container">
                <h1 className="slider-title">Portfolio</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfoliopage-section p-70">
        <Container>
          <div class="portfolio-controls text-center">
            {frameWork
              ? frameWork.map((fmk, idx) =>
                  currentFramwork == idx ? (
                    <button
                      type="button"
                      className={`portfolio-btn ${
                        currentFramwork == idx ? "active" : ""
                      }`}
                    >
                      {fmk.label}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={`portfolio-btn ${
                        currentFramwork == idx ? "active" : ""
                      }`}
                      onClick={() => topnavChange(idx)}
                    >
                      {fmk.label}
                    </button>
                  )
                )
              : ""}
          </div>
          <div
            className="portfolio-pageimagesec"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <Row>
              {Framework.portfolio
                ? Framework.portfolio.data.map((pof, key) => (
                    <Col md={4} className="portfolio-col" key={key}>
                      
                        <div className="portfolio-box">
                          <img
                            src={pof.image ? pof.image : ""}
                            alt="VIVID WEB SOLUTIONS"
                          />
                          <div className="portfolio-icon">
                            <img
                              src={
                                pof.main_framework
                                  ? catIcon[
                                      pof.main_framework[
                                        Object.keys(pof.main_framework)[0]
                                      ]
                                    ]
                                  : ""
                              }
                              alt="VIVID WEB SOLUTIONS"
                            />
                          </div>
                        </div>                      
                      <div className="portfolio-titlebox">
                        <h3>
                          {pof.name}
                        </h3>
                        <span>
                          {pof.framework.length > 0 && pof.framework.join(", ")}
                        </span>
                      </div>
                    </Col>
                  ))
                : ""}
            </Row>
          </div>
          <div className="text-center portfolio-loadbtn">
            {lastpage > currentPage && (
            <Button className="btn-defult" onClick={() => loadpage(parseInt(currentPage) + 1)}>Load More</Button>
          )}
        </div>
        </Container>
        
      </div>
    </>
  );
}

export default Portfolio;
