import React from "react";
import FCss from "./Css/Footer.module.css";
import Contact from "./../Data/Contact.json";
import Map from "./Map/Map";

// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

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
                      <div className={FCss.contactMapDivChild}>
                        <PersonIcon
                          fontSize="large"
                          className={FCss.contactIcon}
                        />
                        <p className={FCss.contactDivPTag}>{value.name}</p>
                      </div>
                      <div className={FCss.contactMapDivChild}>
                        <PhoneInTalkIcon
                          fontSize="large"
                          className={FCss.contactIcon}
                        />
                        <p className={FCss.contactDivPTag}>
                          {value.phoneNumber}
                        </p>
                      </div>
                      <div className={FCss.contactMapDivChild}>
                        <MailOutlineIcon
                          fontSize="large"
                          className={FCss.contactIcon}
                        />
                        <p className={FCss.contactDivPTag}> {value.email}</p>
                      </div>
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
        <div className={FCss.RightDiv}>
          <Map />
        </div>
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
