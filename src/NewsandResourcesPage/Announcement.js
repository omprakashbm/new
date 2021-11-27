import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyle = makeStyles((theme) => ({
  container: {
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",
    padding: "15px",
    margin: "20px",
  },
  head: {
    display: "flex",
  },
  date: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(205,55%,50%)",
    width: "60px",
    height: "60px",
    color: "white",
  },
  arrow: {
    paddingLeft: "5px",
    "&:hover": {
      color: "hsl(205,78%,33%)",
      transform: "translateX(.25rem)",
    },
  },
  schedule: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Announcement = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        style={{
          color: "hsl(205,78%,33%)",
          display: "flex",
          justifyContent: "center",
          margin: "2% 0",
        }}
      >
        Announcement
      </Typography>

      <Grid className={classes.container}>
        <div className={classes.head}>
          <div className={classes.date}>
            <span>23</span>
            <span>Dec</span>
          </div>
          <div
            style={{
              paddingLeft: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>Vacancy for suppilers</b>
          </div>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <p>
            The definite article is the word the. It limits the meaning of a
            noun to one particular thing. For example, your friend might ask,
            “Are you going to the party this weekend?” The definite article
            tells you that your friend is referring to a specific party that
            both of you know about. The definite article can be used with
            singular, plural, or uncountable nouns.
          </p>
        </div>
        <div className={classes.schedule}>
          <div
            className={classes.arrow}
            style={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            Learn More
            <ArrowRightAltIcon style={{ paddingTop: "2px" }} />
          </div>
          <div>
            {/* time duretion */}
            <span>10:00 AM&nbsp;-&nbsp;</span>
            <span>5:00 PM</span>
          </div>
        </div>
      </Grid>

      <Grid className={classes.container}>
        <div className={classes.head}>
          <div className={classes.date}>
            <span>23</span>
            <span>Dec</span>
          </div>
          <div
            style={{
              paddingLeft: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>Vacancy for suppilers</b>
          </div>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <p>
            The definite article is the word the. It limits the meaning of a
            noun to one particular thing. For example, your friend might ask,
            “Are you going to the party this weekend?” The definite article
            tells you that your friend is referring to a specific party that
            both of you know about. The definite article can be used with
            singular, plural, or uncountable nouns.
          </p>
        </div>
        <div className={classes.schedule}>
          <div
            className={classes.arrow}
            style={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            Learn More
            <ArrowRightAltIcon style={{ paddingTop: "2px" }} />
          </div>
          <div>
            {/* time duretion */}
            <span>10:00 AM&nbsp;-&nbsp;</span>
            <span>5:00 PM</span>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Announcement;
