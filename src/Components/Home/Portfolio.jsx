import React from "react";
import PCSS from "./Css/Portfolio.module.css";

export default function Portfolio() {
  return (
    <div>
      <div className={PCSS.herderDiv}>
        <div className={PCSS.btnDivP}>
          <div className={PCSS.GRAPHIC}>GRAPHIC</div>
          <div className={PCSS.APP}>APP</div>
          <div className={PCSS.WEB}>WEB</div>
        </div>
      </div>
      Portfolio
    </div>
  );
}
