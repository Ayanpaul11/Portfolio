import React, { useState, useEffect } from "react";
import PCSS from "./Css/Portfolio.module.css";

export default function Portfolio() {
  const [show, set] = useState("GRAPHIC");

  return (
    <div>
      <div className={PCSS.herderDiv}>
        <div className={PCSS.btnDivP}>
          <div
            className={PCSS.GRAPHIC}
            id={show === "GRAPHIC" ? "selected" : "NotSelected"}
            onClick={() => set("GRAPHIC")}
          >
            GRAPHIC
          </div>
          <div className={PCSS.APP} onClick={() => set("APP")}>
            APP
          </div>
          <div className={PCSS.WEB} onClick={() => set("WEB")}>
            WEB
          </div>
        </div>
      </div>
      Portfolio
    </div>
  );
}
