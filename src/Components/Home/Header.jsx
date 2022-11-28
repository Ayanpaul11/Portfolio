import React from "react";
import Img from "./../../Img/150468600_177322357491491_1345624991844487684_n.jpg";
import HeaderCss from "./Css/Header.module.css";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${Img})`,
      }}
      className={HeaderCss.HeaderMdiv}
    >
      Header
    </div>
  );
}
