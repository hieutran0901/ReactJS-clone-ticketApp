import React from "react";
import { Col, Row, Container } from "reactstrap";
import advertisement from "../../assets/images/imgadvertisement.jpg";
import allinone from "../../assets/images/allinone.svg";
import endow from "../../assets/images/uudai.svg";
import security from "../../assets/images/security.svg";
import support from "../../assets/images/support.svg";
import "../../styles/planeticket.scss";

const Advertisement = () => {
  return (
    <section className="mt-4">
      <div className="advertisement">
        <Container>
          <h3 className="text-center">Bạn muốn đi mô? Vé nào MoMo cũng có</h3>
          <Row>
            <Col lg="4" className="p-0 mt-5">
              <div className="advertisement_item mb-3">
                <div className="border_image">
                  <img src={allinone} alt="" className="w-50 h-50" />
                </div>
                <div className="content">
                  <div className="title">Trải nghiệm All-in-one</div>
                  <div className="description">
                    Dễ dàng so sánh giá vé, sử dụng và thanh toán tất cả dịch vụ Du Lịch - Đi Lại, gồm đặt vé máy bay,
                    xe khách, tàu hoả, đặt khách sạn; thuê xe tự lái và khách sạn theo giờ hay các dịch vụ du lịch trải
                    nghiệm trên Ví MoMo.
                  </div>
                </div>
              </div>
              <div className="advertisement_item mb-3">
                <div className="border_image">
                  <img src={endow} alt="" className="w-50 h-50" />
                </div>
                <div className="content">
                  <div className="title">Ngập tràn ưu đãi</div>
                  <div className="description">
                    Đặt vé, đặt phòng trên Ví MoMo luôn có nhiều ưu đãi tuyệt vời với giá cạnh tranh nhất.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="advertisement_item justify-content-center">
                <div className="advertisement_img">
                  <img src={advertisement} alt="" />
                  <button>ĐẶT VÉ NGAY</button>
                </div>
              </div>
            </Col>
            <Col lg="4" className="p-0 mt-5">
              <div className="advertisement_item mb-3">
                <div className="border_image">
                  <img src={security} alt="" className="w-50 h-50" />
                </div>
                <div className="content">
                  <div className="title">Thanh toán siêu bảo mật</div>
                  <div className="description">
                    Ví MoMo đáp ứng các tiêu chuẩn thanh toán an toàn cao nhất với chứng chỉ bảo mật quốc tế PCI DSS và
                    công nghệ bảo mật toàn diện. Đặc biệt, MoMo còn ứng dụng phương thức thanh toán linh hoạt với Ví Trả
                    Sau.
                  </div>
                </div>
              </div>
              <div className="advertisement_item">
                <div className="border_image">
                  <img src={support} alt="" className="w-50 h-50" />
                </div>
                <div className="content">
                  <div className="title">Hỗ trợ khách hàng 24/7</div>
                  <div className="description">
                    Đội ngũ nhân viên hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn trong từng bước của quá trình đặt vé.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Advertisement;
