import React from "react";
import SCss from "./Css/Services.module.css";

export default function Services() {
  return (
    <div className={SCss.mDiv}>
      <p className={SCss.GreyText}>VARSITY</p>
      <div className={SCss.mCont}>
        <div className={SCss.Box}>
          <p className={SCss.titleService}>My Services</p>
        </div>
      </div>
    </div>
  );
}
