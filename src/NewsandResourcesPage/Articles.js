import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const useStyle = makeStyles((theme) => ({
  main: {
    padding: "20px",
  },

  container: {
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",

    padding: "15px",
    marginBottom: "20px",
  },
  image: {
    height: "200px",
    width: "250px",
  },
  datelogo: {
    paddingTop: "18px",
    height: "20px",
    width: "20px",
  },

  button: {
    textTransform: "lowercase",
  },
  datebutton: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  videoTitle: {
    color: "hsl(205,78%,33%)",
  },
}));

const News = () => {
  const classes = useStyle();
  const [artile, setArticle] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);
  return (
    <div className="container">
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
            Articles
          </Typography>

          <p
            style={{
              marginTop: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            MOT members are actively engaged in different activities,This page
            shows the different MOT realted Aticles and standard operating
            proposals.
          </p>
        </div>
        <div className={classes.cards}>
          <Grid className={classes.container}>
            <div className={classes.videoTitle}>
              <Typography variant="h6">
                How to repair a Oxygen Plant.
              </Typography>
            </div>
            <Typography variant="p" color="textSecondary">
              Oxygen concentrators are necessary for many patients. For this
              reason, it is crucial that your system is in 100-percent working
              order at all times. Whether you purchase a new or used
              concentrator, the unit should be cleaned and maintained to prevent
              co
            </Typography>

            <div className={classes.datebutton}>
              <p style={{ fontSize: ".85rem" }}> 1 day ago</p>
              <Button
                startIcon={
                  <img
                    src="https://img.icons8.com/small/32/000000/download.png"
                    alt="logo"
                    style={{ height: "16px", margin: 0 }}
                  />
                }
                variant="text"
                color="primary"
                className={classes.button}
              >
                Download pdf.
              </Button>
            </div>
          </Grid>

          <Grid className={classes.container}>
            <div className={classes.videoTitle}>
              <Typography variant="h6">How to repair a Oxygen Plant</Typography>
            </div>
            <Typography variant="p" color="textSecondary">
              Oxygen concentrators are necessary for many patients. For this
              reason, it is crucial that your system is in 100-percent working
              order at all times. Whether you purchase a new or used
              concentrator, the unit should be cleaned and maintained to prevent
              costly repairs. However, over time, your concentrator will likely
              require a professional evaluation and repair work. It is essential
              to know how to manage your system correctly so that you can keep
              using it for years to come.
            </Typography>
            <div className={classes.datebutton}>
              <p style={{ fontSize: ".85rem" }}> 1 day ago</p>
              <Button
                startIcon={
                  <img
                    src="https://img.icons8.com/small/32/000000/download.png"
                    alt="logo"
                    style={{ height: "16px", color: "hsl(205,78%,35%)" }}
                  />
                }
                variant="text"
                color="primary"
                className={classes.button}
              >
                Download pdf.
              </Button>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default News;
