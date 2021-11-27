import React from "react";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  },
}));

const ChartDializer = ({ DO, DNO }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" color="textPrimary" className={classes.head}>
        Dialyzer
      </Typography>
      <Bar
        data={{
          labels: [
            "Province1",
            "Province2",
            "Province3",
            "Province4",
            "Province5",
            "Province6",
            "Province7",
          ],
          datasets: [
            {
              label: "in-Operation",

              data: DO,
              backgroundColor: ["rgba(54, 162, 235, 0.8)"],
              borderColor: ["rgba(75, 192, 192, 1)"],
              borderWidth: 1,
            },
            {
              label: "Not Working",
              data: DNO,
              backgroundColor: ["rgba(255, 99, 132, 1)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={450}
      />
    </div>
  );
};

export default ChartDializer;
