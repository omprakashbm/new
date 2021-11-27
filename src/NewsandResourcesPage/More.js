import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";

const useStyle = makeStyles((thema) => ({
  maincontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "552px",
  },
  main: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  mainButton: {
    "&:hover": {
      color: "white",
    },
  },
  button: {
    "&:hover": {
      transform: "TranslateX(.25rem)",
    },
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const More = () => {
  const classes = useStyle();
  return (
    <div className={classes.maincontainer}>
      <div className={classes.main}>
        <Typography variant="h5" color="promary" style={{ padding: "10px" }}>
          Thank You !
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ padding: "10px" }}
        >
          Thank you for being curous and supportive toward MOT project. We will
          continually update our activities. Please follow us in social medias
          and consider to join Us.
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ padding: "10px" }}
        >
          "Together We Can"
        </Typography>
        <img
          src="https://img.icons8.com/ios/512/000000/happy--v1.png"
          alt="smile"
          style={{ height: "150px", width: "150px", margin: "20px" }}
        />

        <Button
          component={Link}
          className={classes.mainButton}
          exact
          to={"/apply"}
          endIcon={<ArrowRightAlt className={classes.button} />}
          variant="contained"
          color="primary"
          style={{ margin: "30px" }}
        >
          Join Us
        </Button>
      </div>
      <div className={classes.icons}>
        <a href="https://www.facebook.com/nepal.ran" target="_blank">
          <img
            src="/facebook.png"
            alt="facebook"
            style={{
              height: "50px",
              marginBottom: "30px",
              marginRight: "10px",
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/roboticsassociationofnepal/"
          target="_blank"
        >
          <img
            src={"/instagram.png"}
            alt="insta"
            style={{ height: "50px", marginBottom: "30px" }}
          />
        </a>

        <a href="https://twitter.com/Nepal_RAN" target="_blank">
          <img
            src={"/twitter.png"}
            alt="twitter"
            style={{
              height: "50px",
              marginBottom: "30px",
              marginLeft: "10px",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default More;
