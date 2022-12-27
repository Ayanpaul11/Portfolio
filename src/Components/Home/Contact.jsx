import React from "react";
import Map from "./../../assets/Mapsicle Map.png";
import CCss from "./Css/Contact.module.css";

export default function Contact() {
  return (
    <div className={CCss.mDiv}>
      <div className={CCss.mConDiv}>
        <div>
          <p className={CCss.ContactMe}>Contact Me</p>
        </div>
        <img src={Map} alt="" className={CCss.MapImg} />
      </div>
    </div>
  );
}
