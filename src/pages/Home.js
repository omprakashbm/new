import React, { useContext, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { fetchURL } from "../apiComponents/FetchComponent";
import { LanguageContext } from "../App";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 400,
    height: "auto",
  },
}));
const circleProps = {
  bgcolor: "#0D6199",
  borderColor: "#0D6199",
  m: 2,
  style: {
    width: "6rem",
    height: "6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    boxShadow: "5px 10px 18px #888888",
    fontSize: "2rem",
  },
};
const circleprops2 = {
  style: {
    //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
    display: "flex",
    flexGrow: 1,
    color: "#0D6199",
    flexDirection: "column",
    cursor: "pointer",
    //   justifyContent:'space-between',
    alignItems: "center",
    padding: "5px",
    textAlign: "center",
    fontSize: "10px",
  },
};

const Home = () => {
  let history = useHistory();
  let language = useContext(LanguageContext);
  const [achievementData, setAchievementData] = useState({ results: [] });
  const [allOrganization, setAllOrganization] = useState({ results: [] });

  useEffect(() => {
    const getData = async () => {
      let { data, loading, dataIndex } = await fetchURL(
        `https://backend.motdev.ran.org.np/about/api/achievement/${language}/`
      );
      setAchievementData(data);
    };
    getData();
  }, [language]);

  useEffect(() => {
    const getDataOr = async () => {
      let { data } = await fetchURL(
        `https://backend.motdev.ran.org.np/about/api/get_organization/${language}/`
      );
      setAllOrganization(data);
    };
    getDataOr();
  }, [language]);

  const classes = useStyles();

  let homeData = {
    titleen: "eng title",
    titlenp: "np title",
  };

  function handleClick(click) {
    if (click === "Members") {
      history.push("/about/members");
    } else if (click === "Hospital Mapped") {
      history.push("/hospital");
    } else if (click === "Oxygen Concentrator Tested") {
      history.push("/oc");
    } else if (click === "Request Solved") history.push("/RS");
  }

  return (
    <>
      {/* {homeData[`title${language}`]} */}
      <div className="container">
        <div className="row">
          <div
            className="col-md-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              Map, Monitor, Install, Operate, Maintain & Repair
              <Button
                component={Link}
                exact
                to="/request"
                variant="contained"
                size="large"
                color="primary"
                endIcon={<ArrowRightAltIcon />}
              >
                Request Help
              </Button>
            </Typography>
          </div>
          <div className="col-md-8">
            <img
              src="./MainImage.png"
              style={{
                display: "block",
                width: "70%",
                height: "300px",
                marginLeft: "80px",
              }}
            ></img>
          </div>
        </div>
      </div>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        padding="15px"
      >
        <Typography gutterBottom variant="h4" component="h2" color="primary">
          Our Achievements
        </Typography>
      </Box>
      {achievementData && (
        <div className="container">
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {achievementData.results.map((achievement, index) => {
              return (
                <Box
                  display="flex"
                  {...circleprops2}
                  key={achievement.id}
                  href={() => {}}
                  onClick={() => handleClick(achievement.title)}
                >
                  {/* <Link
                  key={achievement.id}
                  to={{
                    pathname: `/about/members`,
                    // pathname: `/img/${achievement.id}`,
                  }}
                  style={{ textDecoration: "none" }}
                > */}
                  <Box borderRadius="50%" {...circleProps}>
                    {achievement.number}+
                  </Box>
                  <Typography gutterBottom>{achievement.title}</Typography>
                  {/* </Link> */}
                </Box>
              );
            })}
          </Box>
        </div>
      )}
      <section
        className="logos"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <label
                style={{
                  color: "#0D6199",
                }}
              >
                Lead Organization
              </label>
              <ul
                className="sub-logo-wrap"
                style={{
                  display: "flex",
                  listStyle: "none",
                  padding: "0px",
                  margin: "0px",
                  justifyContent: "space-between",
                }}
              >
                <li style={{ marginRight: "20px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={"/ranlogo.png"}
                    onClick={() =>
                      window.open(
                        "https://" +
                          allOrganization?.results[15]?.contact_website,
                        "_blank"
                      )
                    }
                    alt="RAN logo"
                    className={classes.logo}
                  />
                </li>
                <li style={{ marginRight: "20px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={"/BSNlogo.jpg"}
                    alt="BSN logo"
                    onClick={() =>
                      window.open(
                        "https://" +
                          allOrganization?.results[14]?.contact_website,
                        "_blank"
                      )
                    }
                    className={classes.logo}
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <label
                style={{
                  color: "#0D6199",
                }}
              >
                Partner Organization
              </label>
              <ul
                className="sub-logo-wrap"
                style={{
                  display: "flex",
                  listStyle: "none",
                  padding: "0px",
                  margin: "0px",
                  justifyContent: "space-evenly",
                }}
              >
                <li style={{ marginRight: "20px" }}>
                  <img
                    style={{ width: "100px" }}
                    src={"/NHRClogo.png"}
                    onClick={() =>
                      window.open(
                        "https://" +
                          allOrganization?.results[2]?.contact_website,
                        "_blank"
                      )
                    }
                    alt="NHRC logo"
                    className={classes.logo}
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <label
                style={{
                  color: "#0D6199",
                }}
              >
                Supporting Organization
              </label>
              <ul
                className="sub-logo-wrap"
                style={{
                  display: "flex",
                  listStyle: "none",
                  justifyContent: "space-between",
                }}
              >
                <li style={{ marginRight: "20px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={"/TAFlogo.jpg"}
                    onClick={() =>
                      window.open(
                        "https://" +
                          allOrganization?.results[1]?.contact_website,
                        "_blank"
                      )
                    }
                    alt="TAF logo"
                    className={classes.logo}
                  />
                </li>
                <li style={{ marginRight: "20px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={"/datafordev.png"}
                    onClick={() =>
                      window.open("http://www.d4dnepal.org/", "_blank")
                    }
                    alt="TAF logo"
                    className={classes.logo}
                  />
                </li>
                <li style={{ marginRight: "20px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={"/ukaid2.png"}
                    onClick={() =>
                      window.open("https://www.ukaiddirect.org/", "_blank")
                    }
                    alt="TAF logo"
                    className={classes.logo}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          color="black"
          align="center"
          style={{
            padding:'10px',
            fontSize: "16px",
          }}
        >
          Join initiative of{" "}
          <spam style={{ color: "blue" }}>
            Robotics Association of Nepal[RAN]
          </spam>{" "}
          &{" "}
          <spam style={{ color: "blue" }}>
            Biotechnology Society of Nepal [BSN]
          </spam>{" "}
          in partnership with{" "}
          <spam style={{ color: "blue" }}>
            Nepal Health Research Council[NHRC]
          </spam>{" "}
          supported by{" "}
          <spam style={{ color: "blue" }}>The Asia Foundation [TAF]</spam>.
        </Typography>
      </div>
    </>
  );
};

export default Home;
