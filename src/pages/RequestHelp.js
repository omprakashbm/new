import React, { useContext } from "react";
import { LanguageContext } from "../App";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyle = makeStyles((theme) => ({
  main: {
    height: "600px",
    position: "realtive",
    [theme.breakpoints.down("sm")]: {
      "&:before": {
        position: "absolute",
        content: "''",
        top: 0,
        left: 0,
        right: 0,
        backgroundImage: `url('Requestbackground.svg') `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "0.5",
        height: "600px",
      },
    },
    [theme.breakpoints.only("md")]: {
      "&:before": {
        position: "absolute",
        content: "''",
        top: 0,
        left: 0,
        right: 0,
        backgroundImage: `url('Requestbackground.svg') `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "0.7",
        height: "600px",
      },
    },
    [theme.breakpoints.up("lg")]: {
      "&:before": {
        position: "absolute",
        content: "''",
        top: 5,
        left: 0,
        right: 0,

        backgroundImage: `url('Requestbackground.png') `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top 80px right",
        Width: "600px",
        height: "600px",
        opacity: "0.8",
      },
    },
  },
  head: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 30px ",
    position: "relative",
  },
  book: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "hsl(205, 78%, 33%)",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
  },
  buttoncontainer: {
    marginTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    "&:hover": { color: "white" },
  },
  fillform: {
    "&:hover": {
      transform: "translateX(.15rem)",
    },
  },
}));

const RequestHelp = () => {
  const language = useContext(LanguageContext);

  let homeData = {
    titleen: "eng title",
    titlenp: "np title",
  };

  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        {/* {homeData[`title${language}`]} */}

        <div>
          <div className={classes.head}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "hsl(205, 78%, 33%)", fontSize: "2.25rem" }}
            >
              Request For Support
            </Typography>
            <Typography variant="body2" style={{ color: "hsl(205, 78%, 33%)" }}>
              MOT provides the support for the Bio tech. Please find the form
              link below to request for our support.
            </Typography>
          </div>
          <div className={classes.book}>
            <Typography variant="body2" component="p">
              <MenuBookIcon style={{ fontSize: "3rem" }} />
            </Typography>
            <Typography variant="body2" component="p">
              Please click the Link below to access Request form.
            </Typography>
          </div>
          {/* <div className={classes.buttoncontainer}>
            <Button
              className={classes.Button}
              component={Link}
              exact
              to="/requestform"
              variant="contained"
              size="large"
              color="primary"
              endIcon={<ArrowRightAltIcon className={classes.fillform} />}
            >
              fill Form
            </Button>
          </div> */}
          <div className={classes.buttoncontainer}>
            <Button
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSecZWbjjuNMHKGsC4R3QdQRkCFoqxUAE6emyWLfNY6WTjOBwA/viewform"
              }
              className={classes.Button}
              variant="contained"
              size="large"
              color="primary"
              endIcon={<ArrowRightAltIcon className={classes.fillform} />}
            >
              fill Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHelp;
