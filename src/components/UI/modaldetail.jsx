import React from "react";
import { Modal, ModalHeader, ModalBody, Row, Col, ModalFooter } from "reactstrap";
import { RiPlaneFill, RiMapPin2Fill, RiCloseFill } from "react-icons/ri";
import VietjetAir from "../../assets/images/VietjetAir.jpg";
import VietnamAirlines from "../../assets/images/VietnamAirlines.jpg";
import BambooAirways from "../../assets/images/BambooAirways.jpg";
import "../../styles/modaldetail.scss";

const ModalDetail = (props) => {
  const { showModal, setShowModal, dataDetailModal } = props;

  return (
    <div>
      <Modal isOpen={showModal}>
        <ModalHeader>
          <span>Chi tiết chuyến bay</span>{" "}
          <button onClick={() => setShowModal(!showModal)}>
            <RiCloseFill></RiCloseFill>
          </button>
        </ModalHeader>
        <ModalBody>
          <Row className="d-flex align-items-center">
            <Col md="6" className="d-flex group-infomation gap-3">
              <div className="time">
                <span>{dataDetailModal.flightTime}</span>
                <span>{dataDetailModal.landTime}</span>
              </div>
              <div className="chart">
                <span style={{ transform: "rotateX(180deg)" }}>
                  <RiPlaneFill></RiPlaneFill>
                </span>
                <span>
                  <RiMapPin2Fill></RiMapPin2Fill>
                </span>
              </div>
              <div className="province">
                <span>{dataDetailModal.departure}</span>
                <span style={{ color: "gray" }}>2h 10m</span>
                <span>{dataDetailModal.destination}</span>
              </div>
            </Col>
            <Col md="6">
              <div className="name-airline">
                {dataDetailModal.image === "VietjetAir" ? <img src={VietjetAir} alt="" /> : <></>}
                {dataDetailModal.image === "VietnamAirlines" ? <img src={VietnamAirlines} alt="" /> : <></>}
                {dataDetailModal.image === "BambooAirways" ? <img src={BambooAirways} alt="" /> : <></>}
                {dataDetailModal.airline}
              </div>
              <Row className="content">
                <Col xs="5" md="12">
                  <ul className="mb-0">
                    <li>Eco</li>
                    <li style={{ whiteSpace: "nowrap" }}>
                      Số hiệu:{" "}
                      <span>
                        <b>{dataDetailModal.number}</b>
                      </span>
                    </li>
                  </ul>
                </Col>
                <Col xs="7" md="12">
                  <ul className="mb-0">
                    <li>
                      Hành lý xách tay: <b>07 Kg và 01 túi xách nhỏ không quá 02 Kg</b>
                    </li>
                    <li>
                      Hành lý ký gửi: <b>Thu phí</b>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <span>
            <span style={{ color: "#d82f8b", fontWeight: "700" }}>{`${
              dataDetailModal.price && dataDetailModal.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
            }.000đ`}</span>
            /khách
          </span>
          <button>Chọn vé đi</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalDetail;
