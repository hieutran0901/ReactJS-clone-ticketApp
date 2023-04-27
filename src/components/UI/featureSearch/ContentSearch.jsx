import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TickerContext } from "../../../context/TickerContext";
import { RiSearchLine, RiPlaneFill, RiCloseFill, RiCalendar2Fill, RiUserFill, RiExchangeLine } from "react-icons/ri";
import { Row, Col } from "reactstrap";

const ContentSearch = () => {
  const dataPopper = [
    { province: "Hồ Chí Minh", domesticAirport: "Sân bay Tân Sơn Nhất" },
    { province: "Hà Nội", domesticAirport: "Sân bay Nội Bài" },
    { province: "Đà Nẵng", domesticAirport: "Sân bay Đà Nẵng" },
  ];
  const navigate = useNavigate();
  const { subMitForm } = useContext(TickerContext);
  const [show, setShow] = useState("");
  const [coutPassenger, setCountPassenger] = useState(1);
  const currentDate = new Date();
  const flightDate = new Date(currentDate.getTime() + 86400000).toISOString().split("T", 1)[0];

  const [searchValue, setSearchValue] = useState({
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate,
  });

  const handleOnchangeDate = (e) => {
    setSearchValue({ ...searchValue, flightDate: e.target.value });
  };

  const handleExchange = (e) => {
    e.preventDefault();
    setSearchValue({ ...searchValue, departure: searchValue.destination, destination: searchValue.departure });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    subMitForm(searchValue);
    navigate("/ve-may-bay/tim-chuyen");
  };

  const handleDecrease = () => {
    if (coutPassenger > 1) {
      setCountPassenger((prev) => prev - 1);
    }
  };

  return (
    <div className="form_submit">
      <form className="w-100">
        <Row className="d-flex justify-content-between">
          <Col xl="10" className="d-flex gap-4">
            <Row className="w-100">
              <Col lg="3" md="6" className="form_field">
                <div
                  className="form_group"
                  onClick={() => {
                    setShow("departure");
                  }}
                >
                  <label htmlFor="">
                    <RiPlaneFill></RiPlaneFill> Nơi đi
                  </label>
                  <input
                    type="text"
                    value={searchValue.departure}
                    onChange={(e) => e.target.value}
                    onBlur={() => setShow("")}
                  />
                </div>
                <div className={`popper ${show === "departure" ? "show" : ""} d-flex justify-content-between`}>
                  <ul className="mt-3 w-100">
                    {dataPopper.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchValue({ ...searchValue, departure: item.province });
                        }}
                      >
                        {item.province}
                        <span>{item.domesticAirport}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button onClick={handleExchange}>
                  <RiExchangeLine></RiExchangeLine>
                </button>
              </Col>

              <Col lg="3" md="6" className="form_field">
                <div
                  className="form_group"
                  onClick={() => {
                    setShow("destination");
                  }}
                >
                  <label htmlFor="">
                    <RiPlaneFill style={{ transform: "rotateX(180deg)" }}></RiPlaneFill> Nơi đến
                  </label>
                  <input
                    type="text"
                    value={searchValue.destination}
                    onChange={(e) => e.target.value}
                    onBlur={() => setShow("")}
                  />
                </div>
                <div className={`popper ${show === "destination" ? "show" : ""} d-flex justify-content-between`}>
                  <ul className="mt-3 w-100">
                    {dataPopper.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchValue({ ...searchValue, destination: item.province });
                        }}
                      >
                        {item.province}
                        <span>{item.domesticAirport}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg="3" md="6" className="form_field">
                <div className="form_group" onClick={() => setShow("")}>
                  <label htmlFor="">
                    <RiCalendar2Fill></RiCalendar2Fill> Ngày đi
                  </label>
                  <input type="date" min={flightDate} value={searchValue.flightDate} onChange={handleOnchangeDate} />
                </div>
              </Col>
              <Col lg="3" md="6" className="form_field">
                <div
                  className="form_group"
                  onClick={() => {
                    setShow("passenger");
                  }}
                >
                  <label htmlFor="">
                    <RiUserFill></RiUserFill> Hành Khách
                  </label>
                  <input
                    type="text"
                    value={`${coutPassenger} Người lớn`}
                    onChange={(e) => e.target.value}
                    onBlur={() => {
                      setShow("");
                    }}
                  />
                  <div
                    className={`popper passenger ${
                      show === "passenger" ? "show" : ""
                    } d-block justify-content-between p-3`}
                  >
                    <span style={{ fontSize: "14px", display: "block", marginBottom: "10px" }}>
                      Vui lòng chọn số lượng hành khách chính xác để xem được mức giá tốt nhất.
                    </span>
                    <div className="d-flex justify-content-between">
                      <span style={{ fontSize: "14px" }}>Người lớn {">"} 12 tuổi</span>
                      <div className="count-passenger align-items-center">
                        <span className={`decrease ${coutPassenger === 1 ? "disable" : ""}`} onClick={handleDecrease}>
                          -
                        </span>
                        <span>{coutPassenger}</span>
                        <span className="increase" onClick={() => setCountPassenger((pre) => pre + 1)}>
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl="2">
            <div className="form_group border-0">
              <button
                className="align-items-center d-flex justify-content-center gap-2 button-search"
                onClick={handleSubmit}
              >
                <RiSearchLine></RiSearchLine> Tìm kiếm
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default ContentSearch;
