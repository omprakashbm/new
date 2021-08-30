import React, { useContext, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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
    width: "10rem",
    height: "10rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    boxShadow: "5px 10px 18px #888888",
    fontSize: "3rem",
  },
};
const homeProps = {
  style: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('MainImage.png')`,
    //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "auto",
    width: "20rem",
    height: "35rem",
    display: "flex",
    flexGrow: 1,
    color: "#0D6199",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "2rem",

    textAlign: "center",
    fontSize: "3rem",
  },
};
const testProps = {
  style: {
    color: "white",
    width: "100%",
    height: "40rem",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    textAlign: "center",
    fontSize: "3rem",
  },
};
const circleprops2 = {
  style: {
    //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
    display: "flex",
    flexGrow: 1,
    color: "#0D6199",
    flexDirection: "column",
    //   justifyContent:'space-between',
    alignItems: "center",
    padding: "1rem",

    textAlign: "center",
    fontSize: "3rem",
  },
};

const Home = () => {
  let language = useContext(LanguageContext);
  const [achievementData, setAchievementData] = useState({ results: [] });
  const [allOrganization, setAllOrganization] = useState({ results: [] });

  useEffect(() => {
    const getData = async () => {
      let { data, loading, dataIndex } = await fetchURL(
        `http://backend.motdev.ran.org.np/about/api/achievement/${language}/`
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

  console.log("allOrganization", allOrganization?.results);
  return (
    <>
      {/* {homeData[`title${language}`]} */}
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box borderRadius="0%" {...homeProps}>
          <Box borderRadius="0%" {...testProps}>
            <Typography gutterBottom variant="h5" component="h2">
              Map, Monitor, Install, Operate, Maintain & Repair
            </Typography>
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
          </Box>
        </Box>
        {/* <Box borderRadius="0%" {...testProps} >
                
              
            </Box> */}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        padding="1rem"
      >
        <Typography gutterBottom variant="h4" component="h2" color="primary">
          Our Achievements
        </Typography>
      </Box>
      {achievementData && (
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {achievementData.results.map((achievement, index) => {
            return (
              <Box display="flex" {...circleprops2} key={achievement.id}>
                <Box borderRadius="50%" {...circleProps}>
                  {achievement.number}+
                </Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {achievement.title}
                </Typography>
              </Box>
            );
          })}
          {/* <Box display="flex" {...circleprops2}>
                <Box borderRadius="50%" {...circleProps}>110+</Box>
                <Typography gutterBottom variant="h5" component="h2">
                    Hospitals Mapped
                </Typography>
            </Box>
            <Box display="flex" {...circleprops2}>
                <Box borderRadius="50%" {...circleProps}>433+</Box>
                <Typography gutterBottom variant="h5" component="h2">
                    Oxygen Concentrator Tested
                </Typography>
            </Box>
            <Box display="flex" {...circleprops2}>
                <Box borderRadius="50%" {...circleProps}>255+</Box>
                <Typography gutterBottom variant="h5" component="h2">
                    MOT Members
                </Typography>
            </Box>
            <Box display="flex" {...circleprops2}>
                <Box borderRadius="50%" {...circleProps}>7+</Box>
                <Typography gutterBottom variant="h5" component="h2">
                    Request Solved
                </Typography>
            </Box> */}
        </Box>
      )}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        padding="1rem"
        bgcolor="#0D6199"
        color="white"
      >
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          color="white"
          align="center"
        >
          Join initiative of Robotics Association of Nepal[RAN] & Biotechnology
          Society of Nepal [BSN] in partnership with Nepal Health Research
          Council[NHRC] supported by The Asia Foundation [TAF].
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Box display="flex" {...circleprops2}>
          <Typography gutterBottom variant="h5" component="h2">
            Lead Organizations
          </Typography>
          <img
            src={"/BSNlogo.jpg"}
            alt="BSN logo"
            onClick={() =>
              window.open(
                "https://" + allOrganization?.results[14]?.contact_website,
                "_blank"
              )
            }
            className={classes.logo}
          />
          <img
            src={"/ranlogo.png"}
            onClick={() =>
              window.open(
                "https://" + allOrganization?.results[15]?.contact_website,
                "_blank"
              )
            }
            alt="RAN logo"
            className={classes.logo}
          />
        </Box>
        <Box display="flex" {...circleprops2}>
          <Typography gutterBottom variant="h5" component="h2">
            Partner Organization
          </Typography>
          <img
            src={"/NHRClogo.png"}
            onClick={() =>
              window.open(
                "https://" + allOrganization?.results[2]?.contact_website,
                "_blank"
              )
            }
            alt="NHRC logo"
            className={classes.logo}
          />
        </Box>
        <Box display="flex" {...circleprops2}>
          <Typography gutterBottom variant="h5" component="h2">
            Supporting Organization
          </Typography>
          <img
            src={"/TAFlogo.jpg"}
            onClick={() =>
              window.open(
                "https://" + allOrganization?.results[1]?.contact_website,
                "_blank"
              )
            }
            alt="TAF logo"
            className={classes.logo}
          />
        </Box>
      </Box>
    </>
  );
};

export default Home;
