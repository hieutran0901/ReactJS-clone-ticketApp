import React, { useContext, useState } from "react";
import Iframe from "react-iframe";
import { Row, Col, Container } from "reactstrap";
import imghero from "../../assets/images/imghero.jpg";
import { RiCheckFill, RiCloseFill } from "react-icons/ri";
import { PagesContext } from "../../context/PagesContext";
import "../../styles/planeticket.scss";

const Hero = () => {
  const { title } = useContext(PagesContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="mt-5">
      <Container>
        <Row className="hero">
          <Col md="6">
            <div className="hero_content">
              <h1>{title || "Đặt mua vé máy bay giá rẻ nội địa và quốc tế thuận tiện, nhanh chóng"}</h1>
              <p>
                Đặt mua vé máy bay giá rẻ online và thanh toán tiện lợi trên MoMo, tiết kiệm thời gian, dễ dàng book vé
                nội địa lẫn quốc tế các hãng Vietnam Airlines, Vietjet Air, Bamboo Airways và thanh toán trực tuyến với
                mức giá rẻ nhất cùng vô vàn khuyến mãi hấp dẫn.
              </p>
              <div>
                <span>
                  <RiCheckFill></RiCheckFill>
                </span>{" "}
                Giá vé cạnh tranh, <b>ưu đãi mỗi ngày</b>
              </div>
              <div>
                <span>
                  <RiCheckFill></RiCheckFill>
                </span>{" "}
                <b>Dễ dàng mua thêm các dịch vụ</b> đi kèm trong chuyến bay
              </div>
              <div>
                <span>
                  <RiCheckFill></RiCheckFill>
                </span>{" "}
                Mở Ví, <b>quản lý cả chuyến đi</b>
              </div>
              <div>
                <span>
                  <RiCheckFill></RiCheckFill>
                </span>{" "}
                Chăm sóc khách hàng bên bạn 24/7
              </div>
              <div>
                <span>
                  <RiCheckFill></RiCheckFill>
                </span>{" "}
                Phương thức thanh toán <b>linh hoạt, bảo mật</b> cao với Ví Trả Sau
              </div>
              <button onClick={() => window.scrollTo(0, 0)}>ĐẶT VÉ NGAY</button>
            </div>
          </Col>
          <Col md="6" className="d-flex align-items-center">
            <div className="hero_image">
              <img src={imghero} alt="" className="w-100" />
              <div
                className="circle"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <span className="arrow">▲</span>
              </div>
              <div className={showModal ? "ModalShow" : "ModalHide"}>
                <span onClick={() => setShowModal(false)}>
                  <RiCloseFill></RiCloseFill>
                </span>
                <div className="video w-100 h-100 d-flex justify-content-center align-items-center">
                  {showModal ? (
                    <Iframe
                      url="https://www.youtube.com/embed/nGbpiYDca4M"
                      width="560px"
                      height="315px"
                      id=""
                      className=""
                      display="block"
                      position="relative"
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
