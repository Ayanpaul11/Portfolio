import React from "react";
import FCss from "./Css/Footer.module.css";
import Contact from "./../Data/Contact.json";

// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function Footer() {
  return (
    <div className={FCss.FmDiv}>
      <div className={FCss.TopDiv}>
        <div className={FCss.LeftDiv}>
          <p className={FCss.ContactMe}>Contact Me</p>
          <>
            {Contact ? (
              <>
                {Contact.map((value, key) => {
                  return (
                    <div key={key}>
                      <p>
                        <PersonIcon /> {value.name}
                      </p>
                      <p>
                        <PhoneInTalkIcon /> {value.phoneNumber}
                      </p>
                      <p>email: {value.email}</p>
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </>
          <div className={FCss.SocialDiv}>
            <LinkedInIcon fontSize="large" id={FCss.LinkedInIcon} />
            <TwitterIcon fontSize="large" id={FCss.TwitterIcon} />
            <GitHubIcon fontSize="large" />
          </div>
        </div>
        <div className={FCss.RightDiv}>Map</div>
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
