import React from "react";
import { makeStyles } from "@material-ui/core";
import { CSVLink } from "react-csv";

import "tippy.js/animations/perspective.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "hsl(205, 78%, 35%)",
    color: "white",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: " 0 5px 20px rgba(0, 0, 0, 0.4)",
    rsor: "pointer",

    height: "70px",
    width: "200px",
  },

  mainContent: {
    textDecoration: "none",
    color: "white",
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
const Ventilator = ({ sum2, ventilator }) => {
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
    filename: "Ventilator.csv",
    headers: header,
    data: ventilator,
  };
  return (
    <Tippy animation="perspective" content={"click to download Agg. data"}>
      <div className={classes.root}>
        <img
          src={"/ventilator.png"}
          alt="logo"
          style={{ padding: 5, height: "40px" }}
        />

        <CSVLink {...csvReport} className={classes.mainContent}>
          <div className={classes.content}>
            <h5 style={{ marginBottom: 0 }}>{sum2}</h5>
            <p style={{ marginTop: 0 }}>Ventilator</p>
          </div>
        </CSVLink>
      </div>
    </Tippy>
  );
};

export default Ventilator;
