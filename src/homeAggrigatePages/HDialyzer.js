import React from "react";
import { makeStyles } from "@material-ui/core";

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
    alignItems: "flex-end",
    paddingTop: "10px",
    paddingRight: "10px",
  },
}));
const HDializer = ({ sum4 }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <img
        src={"/dialyzer.png"}
        alt="logo"
        style={{ padding: 5, height: "40px" }}
      />
      <div className={classes.content}>
        <h5 style={{ marginBottom: 0 }}>{sum4}</h5>
        <p style={{ marginTop: 0 }}>Dialyzer</p>
      </div>
    </div>
  );
};

export default HDializer;
