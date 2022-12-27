import React from "react";
import HCss from "./Css/Header.module.css";

export default function Header() {
  return (
    <div className={HCss.mDiv}>
      <p className={HCss.PTagHeader}>
        Hi,
        <br />
        I'm
        <span> Ayan </span>
        <br />
        Paul Web Developer
      </p>
    </div>
  );
}
