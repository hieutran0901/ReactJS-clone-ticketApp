import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardText, Col, Row } from "reactstrap";
import { TickerContext } from "../../../context/TickerContext";
import dataSale from "../../../assets/fake-data/dataSale";
import "../../../styles/planeticket.scss";

const ContentSale = () => {
  const navigate = useNavigate();
  const { filter, setFilter } = useContext(TickerContext);

  const handleClickCard = (id) => {
    switch (id) {
      case "1":
        setFilter({ ...filter, departure: "Hồ Chí Minh", destination: "Hà Nội" });
        break;
      case "2":
        setFilter({ ...filter, departure: "Hồ Chí Minh", destination: "Đà Nẵng" });
        break;
      case "3":
        setFilter({ ...filter, departure: "Hồ Chí Minh", destination: "Phú Quốc" });
        break;
      case "4":
        setFilter({ ...filter, departure: "Hồ Chí Minh", destination: "Đà Lạt" });
        break;
      default:
        setFilter(filter);
    }
    navigate("/ve-may-bay/tim-chuyen");
  };
  return (
    <div>
      <div className="wrapper">
        <Row>
          {dataSale.map((item, index) => (
            <Col lg="3" md="6" key={index}>
              <Card onClick={() => handleClickCard(item.id)}>
                <div className="card-image">
                  <img alt="Sample" src={item.img} className="w-100" />
                  <span>{item.text}</span>
                </div>
                <CardBody>
                  <CardText>Giá chỉ từ: 965.000 đ</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ContentSale;
