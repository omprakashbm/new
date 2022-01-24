import React from "react";
import { makeStyles } from "@material-ui/core";
import { CSVLink } from "react-csv";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow: " 0 5px 20px rgba(0, 0, 0, 0.4)",
    backgroundColor: "hsl(205, 78%, 35%)",
    color: "white",
    cursor: "pointer",

    height: "70px",
    width: "200px",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "15px",
    alignItems: "flex-end",
    paddingRight: "10px",
  },
}));

const HOxygenConcentrator = ({ sum1, oxygen }) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <img
        src={"/concentrator.png"}
        alt="logo"
        style={{ padding: 5, height: "40px" }}
      />

      <div className={classes.content}>
        <h5 style={{ marginBottom: 0 }}>{sum1}</h5>
        <p style={{ marginTop: 0 }}>Oxygen Concentrator</p>
      </div>
    </div>
  );
};

export default HOxygenConcentrator;
