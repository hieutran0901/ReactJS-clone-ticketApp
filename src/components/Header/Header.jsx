import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/header.scss";
import logo from "../../assets/images/momo-file-211110094939.svg";
import { RiArrowDownSLine, RiMenuFill, RiCloseFill } from "react-icons/ri";
import { PagesContext } from "../../context/PagesContext";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
const Header = () => {
  const navigate = useNavigate();
  const [loadingHide, setLoadingHide] = useState(false);
  const theFlight = ["Hà Nội - Hồ Chí Minh", "Hồ Chí Minh - Hà Nội", "Hà Nội - Đà Nẵng"];
  const destination = ["Hồ Chí Minh", "Hà Nội", "Đà Nẵng"];
  const [theFlightChange, setTheFlightChange] = useState(undefined);
  const { onClickChangeTitle } = useContext(PagesContext);
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState("");

  const onClickVietnamAirlines = () => {
    navigate("/ve-may-bay/vietnam-airlines");
  };
  const onClickVietjetAir = () => {
    navigate("/ve-may-bay/vietjet-air");
  };
  const onClickBambooAirways = () => {
    navigate("/ve-may-bay/bamboo-airways");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingHide(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!onClickChangeTitle) return;
    onClickChangeTitle(
      theFlightChange ? `Vé máy bay đi ${theFlightChange && theFlightChange.replace(/-/, "đến")}` : ""
    );
  }, [theFlightChange]);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <div className={`page-loading ${loadingHide ? "hide" : ""}`}></div>
      <header className="header">
        <Container className="d-flex align-items-center justify-content-between">
          <Link
            to="/ve-may-bay"
            className="header__logo d-flex align-items-center gap-2"
            onClick={() => {
              setTheFlightChange(undefined);
            }}
          >
            <div className="header__image">
              <img src={logo} alt="" />
            </div>
            <div className="header__title">
              <span>Mua vé</span> <br /> <span>máy bay</span>
            </div>
          </Link>
          <div className="navigation">
            <ul className="d-flex">
              <li className="item-menu item-menu1">
                Chặng bay <RiArrowDownSLine className="arrow"></RiArrowDownSLine>{" "}
                <ul className="sub-menu sub-menu1">
                  {theFlight.map((item, index) => (
                    <li key={index} onClick={() => setTheFlightChange(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="item-menu item-menu2">
                Điểm đến <RiArrowDownSLine className="arrow"></RiArrowDownSLine>
                <ul className="sub-menu sub-menu2">
                  {destination.map((item, index) => (
                    <li key={index} onClick={() => setTheFlightChange(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="item-menu item-menu3">
                Hãng bay <RiArrowDownSLine className="arrow"></RiArrowDownSLine>
                <ul className="sub-menu sub-menu3">
                  <li onClick={onClickVietnamAirlines}>Vietnam Airlines</li>
                  <li onClick={onClickVietjetAir}>Vietjet Air</li>
                  <li onClick={onClickBambooAirways}>Bamboo Airways</li>
                </ul>
              </li>
              <li className="item-menu item-menu4">
                Cẩm nang du lịch <RiArrowDownSLine className="arrow"></RiArrowDownSLine>
                <ul className="sub-menu sub-menu4">
                  <li>Kinh Nghiệm</li>
                  <li>Trải Nghiệm</li>
                  <li>Lưu Trú</li>
                </ul>
              </li>
              <li>Khuyến mãi</li>
            </ul>
          </div>
          <div className="toggle-menu">
            <div className={`navigation-mobile ${showMenu ? "show" : ""}`}>
              <div>
                <Accordion flush open={open} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader targetId="1">Chặng bay</AccordionHeader>
                    <AccordionBody accordionId="1">
                      <Row>
                        <Col xs="6" className="px-0">
                          <Table hover className="mb-0">
                            <tbody>
                              <tr>
                                <td>Hà Nội - Hồ Chí Minh</td>
                              </tr>

                              <tr>
                                <td>Hà Nội - Đà Nẵng</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col xs="6">
                          <Table hover className="mb-0">
                            <tbody>
                              <tr>
                                <td>Hồ Chí Minh - Hà Nội</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="2">Điểm đến</AccordionHeader>
                    <AccordionBody accordionId="2">
                      <Row>
                        <Col xs="6" className="px-0">
                          <Table hover className="mb-0">
                            <tbody>
                              <tr>
                                <td>Hồ Chí Minh</td>
                              </tr>
                              <tr>
                                <td>Đà Nẵng</td>
                              </tr>
                              <tr>
                                <td>Đà Lạt</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col xs="6">
                          <Table hover className="mb-0">
                            <tbody>
                              <tr>
                                <td>Hồ Chí Minh - Hà Nội</td>
                              </tr>
                              <tr>
                                <td>Hà Nội - Phú Quốc</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="3">Hãng bay</AccordionHeader>
                    <AccordionBody accordionId="3">
                      <Row>
                        <Col xs="6" className="px-0">
                          <Table hover className="mb-0">
                            <tbody>
                              <tr>
                                <td>Vietnam Airlines</td>
                              </tr>
                              <tr>
                                <td>Bamboo Airways</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col xs="6">
                          <Table hover className="mb-0">
                            <tbody>
                              <tr>
                                <td>VietJet Air</td>
                              </tr>
                              <tr>
                                <td>Pacific Airlines</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="4">Cẩm nang du lịch</AccordionHeader>
                    <AccordionBody accordionId="4">
                      <Row>
                        <Col xs="6" className="px-0">
                          <Table hover className="mb-0">
                            <tbody>
                              <tr>
                                <td>Kinh nghiệm du lịch</td>
                              </tr>
                              <tr>
                                <td>Lưu Trú</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col xs="6">
                          <Table hover className="mb-0">
                            <tbody>
                              <tr>
                                <td>Trải nghiệm</td>
                              </tr>
                              <tr>
                                <td>Đi lại</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="">Khuyến mãi</AccordionHeader>
                  </AccordionItem>
                </Accordion>

                <footer className="px-3 py-4 footer" style={{color:'black'}}>
                  <h6>HỖ TRỢ KHÁCH HÀNG</h6>
                  <p style={{ fontWeight: "normal" }}>
                    Hotline: 1900 5454 41 <br />
                    Email: hotro@momo.vn
                  </p>
                  <h6>HỢP TÁC DOANH NGHIỆP</h6>
                  <p style={{ fontWeight: "normal" }}>
                    Hotline: 1900 636 652 <br />
                    Email: merchant.care@momo.vn
                  </p>
                </footer>
              </div>
            </div>
            {showMenu ? (
              <RiCloseFill onClick={() => setShowMenu(!showMenu)}></RiCloseFill>
            ) : (
              <RiMenuFill onClick={() => setShowMenu(!showMenu)}></RiMenuFill>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
