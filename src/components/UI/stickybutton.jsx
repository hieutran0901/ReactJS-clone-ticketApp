import React, { useState } from "react";
import '../../styles/stickybutton.scss'

const StickyButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 200) {
          setVisible(true);
        } else if (scrolled <= 200) {
            setVisible(false);
        }
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
 
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };
  const divStyle = {
    visibility: visible ? "visible" : "hidden",
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div style={divStyle} className="buttonStyle">
      <button onClick={scrollToTop}>ĐẶT VÉ NGAY</button>
    </div>
  );
};

export default StickyButton;
