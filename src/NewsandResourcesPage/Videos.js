import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  main: {
    padding: "20px",
  },
  cards: {
    display: "flex",
    justifyContent: "space-evenly",
    cursor: "pointer",
  },

  container: {
    boxShadow: " 0 15px 20px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",
    },
    padding: "15px",
    width: "250px",
    margin: "20px",
  },
  image: {
    height: "150px",
    width: "220px",
  },
  datelogo: {
    paddingTop: "18px",
    height: "40px",
    width: "20px",
  },
  datecontainer: {
    display: "flex",
  },
  videoTitle: {
    marginTop: 0,
    color: "hsl(205,78%,33%)",
  },
}));

const News = () => {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <div>
        <Typography
          variant="h5"
          style={{
            color: "hsl(205,78%,33%)",
            display: "flex",
            justifyContent: "center",
            margin: "2% 0",
          }}
        >
          Videos
        </Typography>

        <p
          style={{
            marginTop: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          MOT members are actively engaged in different activities, This page
          shows the different videos.
        </p>
      </div>
      <div className={classes.cards}>
        <Grid className={classes.container}>
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
            alt="img"
            className={classes.image}
          />
          <div className={classes.datecontainer}>
            <img
              src="https://img.icons8.com/small/32/000000/timeline-week.png"
              alt="date"
              className={classes.datelogo}
            />
            <p style={{ paddingTop: "16px", paddingLeft: "5px" }}>1 jan 2021</p>
          </div>
          <div className={classes.videoTitle}>
            <b style={{ fontWeight: "20rem" }}>Oxygen plant installation</b>
          </div>
        </Grid>

        <Grid className={classes.container}>
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
            alt="img"
            className={classes.image}
          />
          <div className={classes.datecontainer}>
            <img
              src="https://img.icons8.com/small/32/000000/timeline-week.png"
              alt="date"
              className={classes.datelogo}
            />
            <p style={{ paddingTop: "16px", paddingLeft: "5px" }}>1 jan 2021</p>
          </div>
          <div className={classes.videoTitle}>
            <b style={{ fontWeight: "20rem" }}>Oxygen plant installation</b>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default News;
