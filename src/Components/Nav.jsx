import React from "react";
import NCss from "./Css/Nav.module.css";

export default function Nav() {
  return (
    <div className={NCss.mDiv}>
      <p className={NCss.pTagHead}>My Portfolio</p>
      <div className={NCss.hamburger}>
        <div className={NCss.bur1}></div>
        <div className={NCss.bur2}></div>
        <div className={NCss.bur3}></div>
      </div>
    </div>
  );
}
