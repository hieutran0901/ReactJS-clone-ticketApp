import React, { useState } from "react";
import { Nav, NavItem, NavLink, Container } from "reactstrap";
import iconplane from "../../assets/images/iconplane.svg";
import iconsale from "../../assets/images/iconsale.svg";
import iconhot from "../../assets/images/iconhot.svg";
import "../../styles/planeticket.scss";
import ContentSearch from "./featureSearch/ContentSearch";
import ContentSale from "./featureSearch/ContentSale";
import ContentHot from "./featureSearch/ContentHot";

const Search = (props) => {
  const navData = [
    { type: "search", image: iconplane, title: "Tìm chuyến bay" },
    { type: "sale", image: iconsale, title: "Chặng bay giá rẻ" },
    { type: "hot", image: iconhot, title: "Điểm đến nổi bật" },
  ];
  const { hideNavMenuSearch } = props;

  const [nav, setNav] = useState("search");

  return (
    <div className="search">
      <Container className="d-flex" style={{ flexDirection: "column" }}>
        <Nav tabs className={`border-2 ${hideNavMenuSearch ? "hideTab" : ""}`}>
          {navData.map((item) => (
            <NavItem key={item.type} onClick={() => setNav(item.type)} className={nav === item.type ? "active" : ""}>
              <NavLink>
                <img src={item.image} alt="" className={nav === item.type ? "" : "icon"} /> {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <div className="tab-content px-4 py-3">
          <div className={`tabpane ${nav === "search" ? "show" : ""}`}>
            <ContentSearch />
          </div>
          <div className={`tabpane sale ${nav === "sale" ? "show" : ""}`}>
            <ContentSale />
          </div>
          <div className={`tabpane hot ${nav === "hot" ? "show" : ""}`}>
            <ContentHot />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
