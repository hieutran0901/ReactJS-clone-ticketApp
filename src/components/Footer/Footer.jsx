import React from "react";
import { Col, Container, Row } from "reactstrap";
import SgnUp from '../../assets/images/LogoSignUp.jpg'

const Footer = () => {
  return (
    <footer className="mt-5 footer">
      <Container>
        <div>
          <Row>
            <Col lg="2" xs="6">
              <div className="title">Chặng bay</div>
              <div className="content">
                <ul>
                  <li>Hà Nội - Hồ Chí Minh</li>
                  <li>Hồ Chí Minh - Hà Nội</li>
                  <li>Hà Nội - Đà Nẵng</li>
                  <li>TP.HCM - Đà Nẵng</li>
                </ul>
              </div>
            </Col>
            <Col lg="2" xs="6">
              <div className="title">Điểm đến</div>
              <div className="content">
                <ul>
                  <li>Hồ Chí Minh</li>
                  <li>Hà Nội</li>
                  <li>Đà Nẵng</li>
                </ul>
              </div>
            </Col>
            <Col lg="2" xs="6">
              <div className="title">Hãng bay</div>
              <div className="content">
                <ul>
                  <li>Vietnam Airlines</li>
                  <li>Vietjet Air</li>
                  <li>Bamboo Airways</li>
                </ul>
              </div>
            </Col>
            <Col lg="2" xs="6">
              <div className="title">Cẩm nang du lịch</div>
              <div className="content">
                <ul>
                  <li>Kinh nghiệm du lịch</li>
                  <li>Trải nghiệm</li>
                  <li>Lưu trú</li>
                  <li>Đi lại</li>
                  <li>Món ngon</li>
                </ul>
              </div>
            </Col>
            <Col lg="4" xs="12">
              <div className="title">CHĂM SÓC KHÁCH HÀNG</div>
              <div className="content">
                <ul>
                  <li>
                    Địa chỉ: Tầng M, Tòa nhà Victory Tower, Số 12 Tân Trào, Phường Tân Phú, Quận 7, Thành phố Hồ Chí
                    Minh
                  </li>
                  <li>
                    Hotline: <b style={{ color: "#fff" }}>1900 5454 41</b> <i>(1000 đ/phút)</i>
                  </li>
                  <li>
                    Email: <b style={{ color: "#fff" }}>hotro@momo.vn</b>
                  </li>
                  <li>
                    Tổng đài gọi ra: <b style={{ color: "#fff" }}>028.7306.5555 - 028.9999.5555</b>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md="6">
              <div className="title">Công Ty Cổ Phần Dịch Vụ Di Động Trực Tuyến (viết tắt M_Service)</div>
              <div className="content">
                <ul>
                  <li>
                    Lầu 6, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn Thái, khu phố 1, Phường Tân Phú, Quận 7, Thành phố Hồ Chí
                    Minh
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6">
              <div className="content d-flex justify-content-center">
                <ul>
                  <li>Chứng nhận bởi</li>
                  <li><img src={SgnUp} alt="" /></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
