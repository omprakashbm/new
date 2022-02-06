import React from "react";

const Footer = () => {
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
            paddingTop: "12px",
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
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <img
                src="./logowhite.png"
                style={{
                  maxWidth: "150px",
                }}
                alt="logo"
              ></img>
            </div>
            <div
              className="col-md-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              © 2021 Mission Oxygen Team
            </div>
            <div
              className="col-md-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  paddingTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "30%",
                }}
              >
                <a
                  href="https://www.facebook.com/missionoxygenteam"
                  target="blank"
                >
                  <li>
                    <img
                      src="./facebook.png"
                      style={{ height: "30px" }}
                      alt="facebook"
                    ></img>
                  </li>
                </a>
                <a
                  href="https://www.instagram.com/missionoxygenteam/"
                  target="blank"
                >
                  <li>
                    <img
                      src="./instagram.png"
                      style={{ height: "30px" }}
                      alt="insta"
                    ></img>
                  </li>
                </a>
                <a href="https://twitter.com/mot_oxygenteam" target="blank">
                  <li>
                    <img
                      src="./twitter.png"
                      style={{ height: "30px" }}
                      alt="twitter"
                    ></img>
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/company/mission-oxygen-team-mot/"
                  target="blank"
                >
                  <li>
                    <img
                      src="./linkedin.png"
                      style={{ height: "30px" }}
                      alt="linkedin"
                    ></img>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
