import React from "react";
import { makeStyles } from "@material-ui/core";
import { CSVLink } from "react-csv";
import tippy from "react-tippy";
import "tippy.js/dist/tippy.css";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ededed",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: " 0 5px 20px rgba(0, 0, 0, 0.4)",
    "&:hover": {
      boxShadow: " 0 5px 20px rgba(0, 0, 0, 0.4)",
      backgroundColor: "hsl(205, 78%, 35%)",
      color: "white",
      cursor: "pointer",
    },
    height: "70px",
    width: "200px",
  },

  mainContent: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "15px",
    alignItems: "flex-end",
    paddingRight: "10px",
  },
}));
const Dializer = ({ sum4, dialyzer }) => {
  const classes = useStyle();

  const header = [
    {
      label: "Hospital Name",
      key: "hospital_info.hospital_name",
      size: "200px",
    },
    {
      label: "Equipment Name",
      key: "equipment_type",
    },
    {
      label: "Unit",
      key: "unit",
    },
    {
      label: "Equipment Status",
      key: "eqiupment_status",
    },
  ];

  const csvReport = {
    filename: "Dialyzer.csv",
    headers: header,
    data: dialyzer,
  };
  return (
    <tippy title="click to download data">
      <div className={classes.root}>
        <img
          src={"/dialyzer.png"}
          alt="logo"
          style={{ padding: 5, height: "40px" }}
        />
        <CSVLink {...csvReport} className={classes.mainContent}>
          <div className={classes.content}>
            <h5 style={{ marginBottom: 0 }}>{sum4}</h5>
            <p style={{ marginTop: 0 }}>Dialyzer</p>
          </div>
        </CSVLink>
      </div>
    </tippy>
  );
};

export default Dializer;
