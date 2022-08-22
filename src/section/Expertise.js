import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import { useSelector } from "react-redux";

function Expertise() {
  const HomeData = useSelector((state) => state.HomeReducer.homeData);

  return (
    <section className="expertise-section p-70">
      <Container>
        <div
          className="page-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          Our Expertise
        </div>

        <div className="expertise-list">
          <ListGroup as="ul">
            {HomeData.experties
              ? HomeData.experties.map((exp, idx) => (
                  <ListGroup.Item
                    key={idx}
                    as="li"
                    className={exp.class}
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    data-aos-delay={(idx + 1) * 150}
                  >
                    <div className="expertise-box">
                      <img src={exp.image_path} alt="VIVID WEB SOLUTION" />
                    </div>
                  </ListGroup.Item>
                ))
              : ""}
          </ListGroup>
        </div>
      </Container>
    </section>
  );
}
export default Expertise;
