import React from "react";
import NCss from "./Css/Nav.module.css";

export default function Nav() {
  return (
    <div className={NCss.mDiv}>
      <p className={NCss.pTagHead}>My Portfolio</p>
      <div className="hamburger">
        <div className="bur1"></div>
        <div className="bur2"></div>
        <div className="bur3"></div>
      </div>
    </div>
  );
}
