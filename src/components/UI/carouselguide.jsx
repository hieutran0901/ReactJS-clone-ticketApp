import React, { useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Col, Container, Row } from "reactstrap";
import items from "../../assets/fake-data/dataCarousel";
const CarouselGuide = () => {
  const [count, setCount] = useState(0);
  const [carousel, setCarousel] = useState({});
  const handleIncrease = () => {
    if (count === items.length - 1) {
      return;
    }
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count < 1) {
      return;
    }
    setCount(count - 1);
    // setCount(count - 1);
    // if(count < 0) return
  };
  useEffect(() => {
    if (count < items.length && count >= 0) {
      setCarousel(items[count]);
    }
  }, [count]);

  return (
    <section className="carousel_guide mt-4">
      <Container>
        <h3 className="text-center">Hướng dẫn mua vé máy bay TRỰC TIẾP trên Ví MoMo</h3>
        <Row>
          <Col md="6">
            <div className="wrapper">
              <div className="carousel-group">
                <button onClick={handleDecrease} className={`btn-prev ${count === 0 ? "d-none" : ""}`}>
                  <RiArrowLeftSLine></RiArrowLeftSLine>
                </button>
                <button onClick={handleIncrease} className={`btn-next ${count === items.length-1 ? "d-none" : ""}`}>
                  <RiArrowRightSLine></RiArrowRightSLine>
                </button>
                {items.map((item) => (
                  <img key={item.key} src={item.src} alt="" className={carousel.key === item.key ? "active" : ""} />
                ))}
                {/* <UncontrolledCarousel className="w-25 h-auto" items={items} /> */}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="Accordion">
              {items.map((item) => (
                <div
                  className={`Accordion-item ${item.key === carousel.key ? "active" : ""}`}
                  key={item.key}
                  onClick={() => {
                    setCount(item.key - 1);
                  }}
                >
                  <div className="Accordion-header">
                    <span>{item.key}</span> <div className="header-content">{item.content.header}</div>
                  </div>
                  <div className={`Accordion-body ${item.key === carousel.key ? "show" : ""}`}>
                    <ul>
                      {Array.isArray(item.content.body)
                        ? item.content.body.map((item, index) => <li className="mb-2" key={index}>{item}</li>)
                        : item.content.body}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarouselGuide;
