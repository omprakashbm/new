import React, { useContext } from "react";
import { LanguageContext } from "./App";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const Footer = () => {
  const language = useContext(LanguageContext);
  const preventDefault = (event) => event.preventDefault();
  return (
    <section
      className="footer"
      style={{
        backgroundColor: "#0D6199",
      }}
    >
      <div className="container">
        <footer
          style={{
            paddingTop: "30px",
          }}
        >
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="col-md-4"
              style={{
                alignItem: "center",
              }}
            >
              <img
                src="./logowhite.png"
                style={{
                  maxWidth: "200px",
                }}
              ></img>
            </div>
            <div
              className="col-md-4"
              style={{
                alignItem: "right",
              }}
            >
              <label
                style={{
                  color: "cornsilk",
                }}
              >
                © 2021 Mission Oxygen Team
              </label>
            </div>
            <div
              className="col-md-4"
              style={{
                alignItem: "right",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  paddingTop: "20px",
                  display: "flex",
                  alignContent: "right",
                }}
              >
                <li>
                  <img src="./facebook.png" style={{ maxWidth: "30%" }}></img>
                </li>
                <li>
                  <img src="./instagram.png" style={{ maxWidth: "30%" }}></img>
                </li>
                <li>
                  <img src="./twitter.png" style={{ maxWidth: "30%" }}></img>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
