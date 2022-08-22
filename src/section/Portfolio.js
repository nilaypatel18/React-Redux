import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

import PortWordpressIcon from "../assets/images/port-wordpress-icon.png";
import PortWixIcon from "../assets/images/wix.png";
import PortPHPIcon from "../assets/images/career-php.png";
import PortcodeignterIcon from "../assets/images/codeignter.png";
import PortlarvelIcon from "../assets/images/career-laravel.png";
import PortshopifyIcon from "../assets/images/career-shopify.png";
import PortreactIcon from "../assets/images/career-react.png";
import PortsquarespaceIcon from "../assets/images/squarespace.png";
import PortmagentoIcon from "../assets/images/magento.png";

import { useDispatch, useSelector } from "react-redux";

function Portfolio() {
  const portfolio = useSelector((state) => state.HomeReducer.portfolio);
  const dispatch = useDispatch();

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
        par_page: 7,
        page: 1,
        slug: "",
      },
    });
  }, []);

  return (
    <section className="portfolio-section">
      <Container>
        <div
          className="page-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          Our PORTFOLIO
        </div>
      </Container>
      <div
        className="portfolio-imagesec"
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        <div className="grid">
          <div className="grid-sizer"></div>
          {portfolio &&
            portfolio.data.map((pof, key) => (
              <div
                className={`grid-item${key == 4 ? " grid-item-width2" : ""}`}
                key={key}
              >
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
                  <div className="portfolio-overlay">
                    <h3>{pof.name}</h3>
                    <span>
                      {pof.framework.length > 0 && pof.framework.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/*
      <a href="/portfolio">
        <button>View More</button>
      </a>
      */}
    </section>
  );
}
export default Portfolio;
