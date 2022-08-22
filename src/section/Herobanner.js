import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

import FacebookImg from "../assets/images/facebook.png";
import whatsappImg from "../assets/images/whatsapp.png";
import InstagramImg from "../assets/images/instagram.png";

import { useSelector } from "react-redux";

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

function HeroBanner() {
  const HomeData = useSelector((state) => state.HomeReducer.homeData);

  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);

  useEffect(() => {
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
    <section className="Hero-banner-section">
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
                        <source src="${
                          HomeData.video ? HomeData.video.url : ""
                        }" type="video/mp4" />
                        </video>`,
            }}
          ></div>
          <div className="banner-content">
            <h1 className="slider-title">
              {HomeData.video ? HomeData.video.title : ""}
            </h1>
            <p>
              {HomeData.video &&
                HomeData.video.sub_title.map((st, key) => <span key={key}>{st}</span>)}
            </p>
          </div>
        </div>
      </div>

      <div className="followme-socialdiv">
        <p>FOLLOW ME</p>
        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <Link to="#">
              <img src={FacebookImg} alt="Facebook" />
            </Link>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link to="#">
              <img src={whatsappImg} alt="Whatsapp" />
            </Link>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link to="#">
              <img src={InstagramImg} alt="Instagram" />
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="scroll-herodiv">
        Scroll
        <div className="loading_line">
          <div className="loading_line_inner loading_line_inner--1"></div>
          <div className="loading_line_inner loading_line_inner--2"></div>
        </div>
      </div>

      <div className="scroll-downs">
        <div className="mouse-icon">
          <div className="scroller-line"></div>
        </div>
      </div>
    </section>
  );
}
export default HeroBanner;
