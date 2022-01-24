import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "hsl(205, 78%, 35%)",
    color: "white",
    cursor: "pointer",

    display: "flex",
    justifyContent: "space-between",
    boxShadow: " 0 5px 20px rgba(0, 0, 0, 0.4)",

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
const HMore = ({ sum5 }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <img
        src={"/oxygen (2).png"}
        alt="logo"
        style={{ padding: 5, height: "40px" }}
      />
      <div className={classes.content}>
        <h5 style={{ marginBottom: 0 }}>{sum5}</h5>
        <p style={{ marginTop: 0 }}>Other</p>
      </div>
    </div>
  );
};

export default HMore;

//this component is calles from infographics component
