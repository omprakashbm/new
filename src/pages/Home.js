import React, { useContext, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { fetchURL } from "../apiComponents/FetchComponent";
import { LanguageContext } from "../App";
import HOxygenConcentrator from "../homeAggrigatePages/HOxygenConcentrator";
import HOxygenCylinder from "../homeAggrigatePages/HOxygenCylider";
import HVentilator from "../homeAggrigatePages/Hventilator";
import HDialyzer from "../homeAggrigatePages/HDialyzer";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ScaleLoader } from "react-spinners";

const useStyles = makeStyles((theme) => ({
  container: {
    marginButton: "20px",
  },
  topContainer: {
    // backgroundImage: `url('MainImagehome.png') `,

    display: "flex",
    justifyContent: "cecnter",
    alignItems: "center",
    // backgroundImage: `url('MainImagehome.png') `,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // position: "realtive",
    height: "300px",
    // [theme.breakpoints.up("md")]: {
    //   height: "400px",
    // },

    [theme.breakpoints.down("sm")]: {
      "&:after": {
        position: "absolute",
        content: "''",
        top: 80,
        left: 0,
        right: 0,
        backgroundImage: `url('mainImagehome.png') `,
        backgroundRepeat: "no-repeat",
        height: "350px",
        backgroundPosition: "center",

        opacity: "0.4",
      },
    },

    [theme.breakpoints.only("md")]: {
      "&:before": {
        position: "absolute",
        content: "''",
        top: 80,
        left: 0,
        right: 0,
        backgroundImage: `url('mainImagehome.png') `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingTop: "10px",
        height: "350px",
        opacity: "0.4",
      },
    },

    [theme.breakpoints.only("sm")]: {
      "&:before": {
        position: "absolute",
        content: "''",
        top: 80,
        left: 0,
        right: 0,
        backgroundImage: `url('mainImagehome.png') `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingTop: "10px",
        height: "350px",
        opacity: "0.4",
      },
    },

    [theme.breakpoints.up("md")]: {
      "&:before": {
        position: "absolute",
        content: "''",
        top: 100,
        left: 0,
        right: 0,
        backgroundImage: `url('mainImagehome.png') `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right 30%",
        height: "400px",
        marginTop: "35px",
      },
    },
  },

  Aggr: {
    margin: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "space-evenly",
  },
  logo: {
    maxWidth: 400,
    height: "auto",
  },
  arrow: {
    "&:hover": { transform: "translateX(.2rem)" },
  },
  button: {
    "&:hover": { color: "white" },
  },
}));
const circleProps = {
  bgcolor: "#0D6199",
  borderColor: "#0D6199",
  m: 2,
  style: {
    width: "7rem",
    height: "7rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    boxShadow: "5px 10px 18px #888888",
    fontSize: "1.5rem",
  },
};
const circleprops2 = {
  style: {
    // backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,

    cursor: "pointer",
    margin: "5px",
    alignItems: "center",
    padding: "5px",
    textAlign: "center",
  },
};

const URL1 = "https://backend.motdev.ran.org.np/about/api/equipment/en/";

const Home = () => {
  let history = useHistory();
  let language = useContext(LanguageContext);
  const [achievementData, setAchievementData] = useState({ results: [] });
  const [allOrganization, setAllOrganization] = useState({ results: [] });
  const [loading, setLoading] = useState();

  const [information, setInformation] = useState({ results: [] });

  useEffect(() => {
    const getData = async () => {
      let { data, loading, dataIndex } = await fetchURL(
        `https://backend.motdev.ran.org.np/about/api/achievement/${language}/`
      );
      setAchievementData(data);
    };

    const getDataA = async () => {
      try {
        let { data, loading } = await fetchURL(URL1);
        setInformation(data);
      } catch (error) {
        console.log("error");
      }
    };

    getData();
    getDataA();
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

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;

  return (
    <>
      {loading && (
        <Typography variant="body2" color="textSecondary" component="p">
          <ScaleLoader color={"#1673B6"} />
        </Typography>
      )}
      {information &&
        information.results.map((data) => {
          if (
            data.equipment_type === "Oxygen Concentrator" ||
            data.equipment_type === "oxygen concentrators"
          ) {
            sum1 = sum1 + data.unit;
          }
          if (
            data.equipment_type === "Ventilators" ||
            data.equipment_type === "Ventilator"
          ) {
            sum2 = sum2 + data.unit;
          }
          if (
            data.equipment_type === "Oxygen Cylinder and Regulator" ||
            data.equipment_type === "Oxygen Cylinders" ||
            data.equipment_type === "Oxygen Plant"
          ) {
            sum3 = sum3 + data.unit;
          }
          if (data.equipment_type === "Dialyzer") {
            sum4 = sum4 + data.unit;
          }
        })}

      {/* {homeData[`title${language}`]} */}
      <div className="container">
        <div className={classes.container}>
          <div className={classes.topContainer}>
            <div style={{ zIndex: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Map, Monitor, Install, Operate, Maintain & Repair <br />
                <Button
                  style={{ marginTop: "10px", zIndex: 1 }}
                  className={classes.button}
                  component={Link}
                  exact
                  to="/request"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowRightAltIcon className={classes.arrow} />}
                >
                  Request Help
                </Button>
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-md-5">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                style={{ marginTop: "3px" }}
              >
                <b> Equipments Aggregate Data</b>
              </Typography>
            </div>
            <div className={classes.Aggr}>
              <div>
                <Link
                  to="/infographics"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <HOxygenConcentrator sum1={sum1} />
                </Link>
                <div style={{ marginTop: "10px" }}>
                  <Link
                    to="/infographics"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <HVentilator sum2={sum2} />
                  </Link>
                </div>
              </div>
              <div>
                <Link
                  to="/infographics"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <HOxygenCylinder sum3={sum3} />
                </Link>

                <div style={{ marginTop: "10px" }}>
                  <Link
                    to="/infographics"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <HDialyzer sum4={sum4} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <Typography gutterBottom variant="h5">
                <b> Our Achievements</b>
              </Typography>
            </div>
            {achievementData && (
              <div>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexWrap="wrap"
                >
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
                          {achievement.title === "Request Solved"
                            ? achievement.snumber
                            : achievement.number}
                          +
                        </Box>
                        <Typography gutterBottom>
                          {achievement.title}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </div>
            )}
          </div>
        </div>
      </div>

      <section
        className="logos"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="row">
            <div className="col-md-5">
              <label
                style={{
                  marginBottom: "10px",
                }}
              >
                <b>Lead Organization:</b>
              </label>
              <ul
                className="sub-logo-wrap"
                style={{
                  display: "flex",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  justifyContent: "space-between",
                }}
              >
                <li style={{ marginLeft: 0, marginRight: "20px" }}>
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
                <li style={{ marginRight: "20px", marginTop: "5%" }}>
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
                  marginBottom: "10px",
                }}
              >
                <b>Partner Organization:</b>
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
                <li style={{ marginRight: "20px", paddingTop: "5%" }}>
                  <img
                    style={{ width: "100%" }}
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
                  marginBottom: "10px",
                }}
              >
                <b>Supporting Organization:</b>
              </label>
              <ul
                className="sub-logo-wrap"
                style={{
                  display: "flex",
                  listStyle: "none",
                  justifyContent: "space-between",
                }}
              >
                <li style={{ marginRight: "20px", marginTop: "5%" }}>
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
                <li style={{ marginRight: "20px", marginTop: "5%" }}>
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
                <li style={{}}>
                  <img
                    style={{ width: "100%", marginTop: "5%", marginRight: 0 }}
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
            padding: "10px",
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
