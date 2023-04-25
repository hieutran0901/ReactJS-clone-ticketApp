import React from "react";
import notfound from "../../assets/images/notFound.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <img src={notfound} alt="" />
      </div>
      <div>
        <span>Không tìm thấy chuyến bay thỏa điều kiện. Vui lòng chọn lại bộ lọc khác phù hợp</span>
      </div>
    </div>
  );
};

export default NotFound;
