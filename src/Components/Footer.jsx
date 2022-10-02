import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FCss from "./Css/Footer.module.css";

export default function Footer() {
  return (
    <div className={FCss.FmDiv}>
      <div className={FCss.TopDiv}>
        <div>
          <p className={FCss.ContactMe}>Contact Me</p>
        </div>
        <div>Map</div>
      </div>
      <div className={FCss.BottomDiv}>
        <div className={FCss.Line}></div>
        <p className={FCss.lastLine}>
          Made with <span id={FCss.heart}>❤️</span> by Ayan Paul
        </p>
      </div>
    </div>
  );
}
