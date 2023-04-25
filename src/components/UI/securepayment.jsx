import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { RiCheckFill } from "react-icons/ri";
import listButton from "../../assets/fake-data/dataSecurePayment";

const SecurePayment = () => {
 
  const [securePaymentStatus, setSecurePaymentStatus] = useState(listButton[0]);

  return (
    <section className="secure_payment mt-4">
      <Container>
        <h3 className="text-center">Thanh toán an toàn - Bảo mật tuyệt đối</h3>
        <Row className="text-center my-5">
          <Col lg="12">
            {listButton.map((button) => (
              <button
                key={button.id}
                onClick={() => setSecurePaymentStatus(button)}
                className={securePaymentStatus.id === button.id ? "active" : ""}
              >
                {button.title}
              </button>
            ))}
          </Col>
        </Row>
        <div className="wrapper">
          <Row className="w-100 wrapper_content">
            <Col md="6" className="d-flex align-items-center">
              <ul>
                {securePaymentStatus.content.map((item, index) => (
                  <li key={index}><span><RiCheckFill></RiCheckFill></span> <div>{item}</div></li>
                ))}
              </ul>
            </Col>
            <Col md="6" className="d-flex justify-content-center">
              <img src={securePaymentStatus.img} alt="" className="w-75 h-auto" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default SecurePayment;
