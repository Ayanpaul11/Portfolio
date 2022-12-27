import React from "react";
import HCss from "./Css/Header.module.css";
import ImgReact from "./../../assets/7.png";

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

      <img src={ImgReact} alt="Img_React" className={HCss.ImgReact} />
    </div>
  );
}
