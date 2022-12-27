import React, { useState, useEffect } from "react";
import PCSS from "./Css/Portfolio.module.css";
import Graphic from "./../../Data/Graphic.json";

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
          <div
            className={PCSS.APP}
            id={show === "APP" ? "selected" : "NotSelected"}
            onClick={() => set("APP")}
          >
            APP
          </div>
          <div
            className={PCSS.WEB}
            id={show === "WEB" ? "selected" : "NotSelected"}
            onClick={() => set("WEB")}
          >
            WEB
          </div>
        </div>
      </div>
      {Graphic ? (
        <>
          {Graphic.map((value, key) => {
            return (
              <div key={key}>
                <img src={value.img} alt="" className={PCSS.mapImgTag} />
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
