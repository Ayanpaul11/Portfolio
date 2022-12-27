import React from "react";
import FCSS from "./Css/Footer.module.css";

export default function Footer() {
  return (
    <div className={FCSS.mDiv}>
      <div className={FCSS.line}></div>
      <p className={FCSS.lastLine}>Made with 💖 by Ayan Paul</p>
    </div>
  );
}
