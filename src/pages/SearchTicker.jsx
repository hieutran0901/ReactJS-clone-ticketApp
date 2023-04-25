import React, { useContext, useEffect, useState } from "react";
import { TickerContext } from "../context/TickerContext";
import { Col, Container, Row, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiCheckFill, RiArrowDropRightFill, RiInformationFill } from "react-icons/ri";
import "../styles/searchticket.scss";
import "../styles/planeticket.scss";
import Search from "../components/UI/search";
import NotFound from "../components/UI/notfound";
import VietjetAir from "../assets/images/VietjetAir.jpg";
import VietnamAirlines from "../assets/images/VietnamAirlines.jpg";
import BambooAirways from "../assets/images/BambooAirways.jpg";
import ModalDetail from "../components/UI/modaldetail";
import listButtonTime from "../assets/fake-data/listButtonTime";
import listCheckBoxAirlines from "../assets/fake-data/listCheckBoxAirlines";
import { Alert, FormControl, InputLabel, MenuItem, Select, Snackbar } from "@mui/material";
const SearchTicker = () => {
  const { filter, setFilter } = useContext(TickerContext);
  const { listTickerSearch, tickerLoading, ticketlist } = useContext(TickerContext);
  const [dataCheckBoxAirlines, setDataCheckBoxAirlines] = useState([
    "Vietnam Airlines",
    "Vietjet Air",
    "Bamboo Airways",
  ]);
  const [dataButtonTime, setDataButtonTime] = useState({ from: 0, to: 24 });
  const [showModal, setShowModal] = useState(false);
  const [dataDetailModal, setDataDeatailModal] = useState({});
  const [toggleSearch, setToggleSearch] = useState(false);
  const [limit, setLimit] = useState(3);
  const [valueSort, setValueSort] = useState(true);
  const [openToast, setOpenToast] = useState(false);
  const [priceRange, setPriceRange] = useState(3000);

  useEffect(() => {
    setFilter({ ...filter, airline: dataCheckBoxAirlines });
  }, [dataCheckBoxAirlines]);

  useEffect(() => {
    setFilter({ ...filter, flightTime: dataButtonTime });
  }, [dataButtonTime]);

  useEffect(() => {
    setFilter({ ...filter, limit });
  }, [limit]);

  useEffect(() => {
    setFilter({ ...filter, sort: valueSort });
  }, [valueSort]);

  const handleSeeMore = () => {
    if (limit >= ticketlist.length) {
      setLimit(ticketlist.length);
    } else {
      setLimit((prev) => prev + 3);
    }
  };

  const handleChangeOption = (e) => {
    setValueSort(e.target.value);
  };

  const handleCheckBox = (name) => {
    setDataCheckBoxAirlines((prev) => {
      const isChecked = dataCheckBoxAirlines.includes(name);
      if (isChecked) {
        return dataCheckBoxAirlines.filter((item) => item !== name);
      } else {
        return [...prev, name];
      }
    });
  };
  const handleSubmit = () => {
    setFilter({ ...filter, price: priceRange });
  };
  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange(value);
  };

  return (
    <>
      <ModalDetail showModal={showModal} setShowModal={setShowModal} dataDetailModal={dataDetailModal} />
      <header>
        <div className="information w-100 d-flex align-items-center">
          <Container>
            <Row>
              <div className="title">Chuyến bay một chiều</div>
            </Row>
            <Row className="align-items-center">
              <Col xs="7">
                <div className="the-flight">
                  <Link to="/ve-may-bay">
                    <RiArrowLeftSLine></RiArrowLeftSLine>
                  </Link>
                  {filter.departure || "Hồ Chí Minh"} - {filter.destination || "Hà Nội"}{" "}
                  <span style={{ fontWeight: "normal", fontSize: "1rem" }}>
                    | {filter.flightDate && filter.flightDate.replace(/\//, "-")}
                  </span>
                </div>
              </Col>
              <Col xs="5">
                <div className="btn_toggle d-flex justify-content-end">
                  <button onClick={() => setToggleSearch(!toggleSearch)}>Đổi tìm kiếm</button>
                </div>
              </Col>
            </Row>
            <Row className={`mt-2 ${toggleSearch ? "" : "d-none"}`}>
              <Search hideNavMenuSearch={true}></Search>
            </Row>
          </Container>
        </div>
      </header>

      <section className="pt-5" style={{ backgroundColor: "#f5f5f5" }}>
        <Container>
          <Row>
            <Col md="3" style={{ minWidth: "250px" }}>
              <div className="list-filter">
                <div className="label mb-3">Khoảng giá</div>
                <div className="price-range">
                  Từ <span>500.000đ</span> đến{" "}
                  <span>{`${priceRange.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}.000đ`}</span>
                </div>
                <input
                  type="range"
                  className="w-75 slider"
                  min="500"
                  max="3000"
                  value={priceRange}
                  onChange={handlePriceChange}
                  onMouseUp={handleSubmit}
                />
                <hr />
                <div className="label mb-3">Thời gian khởi hành</div>
                <div className="time-start">
                  <div className="btn-group mb-2">
                    {listButtonTime.map((item) => (
                      <button
                        className={
                          item.value.from === dataButtonTime.from && item.value.to === dataButtonTime.to ? "active" : ""
                        }
                        key={item.id}
                        onClick={() => setDataButtonTime(item.value)}
                      >
                        <span className="d-block">{item.type}</span>
                        {item.content}
                      </button>
                    ))}
                  </div>
                </div>
                <hr />
                <div className="label mb-3">Hãng hàng không</div>
                <div className="name_airlines">
                  {listCheckBoxAirlines.map((item) => (
                    <div className="form-group" key={item.name}>
                      <input
                        className="airlines-checkbox"
                        type="checkbox"
                        onChange={() => handleCheckBox(item.name)}
                        checked={dataCheckBoxAirlines.includes(item.name)}
                      />
                      <img src={item.img} alt="" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col md="8">
              <div className="list-ticket-search">
                <div className={`Loading ${tickerLoading ? "loadingShow" : ""}`}>
                  <Spinner color="primary">Loading...</Spinner>
                </div>
                <span className="header-search">
                  Tìm được {listTickerSearch.length} chuyến bay đi {filter.destination} | {filter.flightDate}
                </span>
                <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                  <InputLabel id="demo-select-small-label">Sắp xếp</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={valueSort}
                    label="Sắp xếp"
                    onChange={handleChangeOption}
                  >
                    <MenuItem value={true}>Giá giảm dần</MenuItem>
                    <MenuItem value={false}>Giá tăng dần</MenuItem>
                  </Select>
                </FormControl>
                <span style={{ color: "green", fontSize: "0.9rem", display: "block" }}>
                  <RiCheckFill></RiCheckFill> Giá bao gồm thuế phí
                </span>
                {listTickerSearch.length !== 0 ? (
                  listTickerSearch.map((item) => (
                    <div key={item.id} className="list-result-search w-100 mb-3">
                      <div className="name-airline">
                        {item.image === "VietjetAir" ? <img src={VietjetAir} alt="" /> : <></>}
                        {item.image === "VietnamAirlines" ? <img src={VietnamAirlines} alt="" /> : <></>}
                        {item.image === "BambooAirways" ? <img src={BambooAirways} alt="" /> : <></>}
                        <span>{item.airline}</span>
                      </div>
                      <div className="w-100 h-100">
                        <div className="group-infomation d-flex h-100 justify-content-center">
                          <div className="d-flex w-100">
                            <div>
                              <div style={{ fontWeight: "700", fontSize: "1em" }}>{item.flightTime}</div>
                              <div style={{ fontSize: "0.85em", whiteSpace: "nowrap" }}>{item.departure}</div>
                            </div>
                            <div className="arrow w-75">
                              <hr />
                              <RiArrowDropRightFill></RiArrowDropRightFill>
                              <span
                                style={{ fontSize: "13px", marginTop: "-10px", display: "block", textAlign: "center" }}
                              >
                                Bay thẳng
                              </span>
                            </div>
                            <div>
                              <div style={{ fontWeight: "700", fontSize: "1em" }}>{item.landTime}</div>
                              <div style={{ fontSize: "0.85em", whiteSpace: "nowrap" }}>{item.destination}</div>
                            </div>
                          </div>
                          <div>
                            <div
                              style={{
                                fontWeight: "700",
                                color: "#d82f8b",
                                fontSize: "1.2em",
                                marginBottom: "10px",
                                textAlign: "end",
                              }}
                            >{`${item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}.000đ`}</div>
                            <div>
                              <button className="bookTicket" onClick={() => setOpenToast(!openToast)}>
                                Chọn vé đi
                              </button>
                              <Snackbar
                                open={openToast}
                                autoHideDuration={3000}
                                onClose={() => setOpenToast(!openToast)}
                              >
                                <Alert
                                  onClose={() => setOpenToast(!openToast)}
                                  severity="success"
                                  sx={{ width: "100%" }}
                                >
                                  Success!
                                </Alert>
                              </Snackbar>
                            </div>
                          </div>
                          <div className="detail">
                            <button
                              onClick={() => {
                                setShowModal(!showModal);
                                setDataDeatailModal(item);
                              }}
                            >
                              <RiInformationFill></RiInformationFill> Chi tiết
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <NotFound />
                )}
                <button onClick={handleSeeMore} className="see-more">
                  Xem thêm...
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchTicker;
