import React, { useEffect } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";

import KaraAthor from "../assets/images/kara.png";

import { useDispatch, useSelector } from "react-redux";

export default function Testimonial() {
  const testimonials = useSelector((state) => state.HomeReducer.testimonials);
  const dispatch = useDispatch();

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch({ type: "Get_All_Testimonials" });
  }, []);

  return (
    <section className="testimonial-section">
      <Container>
        <div
          className="service-title text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          What our client says
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Slider className="testimonial-slider" {...settings}>
            {testimonials &&
              testimonials.map((tml, key) => (
                <div className="testimonial-slide">
                  <div className="testimonial-box">
                    <div className="testimonial-image">
                      <img src={tml.image} alt="VIVID WEB SOLUTIONS" />
                    </div>
                    <div className="testimonial-text">
                      <p dangerouslySetInnerHTML={{ __html: tml.content }}></p>
                      <div className="testimonial-author">
                        <h3>{tml.name}</h3>
                        <p>{""}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}
