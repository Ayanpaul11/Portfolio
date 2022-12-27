import React from "react";
import CCss from "./Css/Contact.module.css";

export default function Contact() {
  return (
    <div className={CCss.mDiv}>
      <p className={CCss.GreyText}>VARSITY</p>

      <div className={CCss.mConDiv}>
        <div>
          <p className={CCss.ContactMe}>Contact Me</p>
        </div>
        <div>map</div>
      </div>
    </div>
  );
}
