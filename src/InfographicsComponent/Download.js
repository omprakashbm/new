import React from "react";
import { makeStyles } from "@material-ui/core";
import { CSVLink } from "react-csv";
import { BiDownload } from "react-icons/bi";

import "tippy.js/animations/perspective.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    borderRadius: 3,
    backgroundColor: "hsl(205, 78%, 35%)",
    color: "white",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    marginBottom: 10,
    boxShadow: " 0 5px 20px rgba(0, 0, 0, 0.4)",
    "&:hover": {
      color: "white",
    },
  },
}));

const Download = ({ all }) => {
  const classes = useStyles();

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
    filename: "AllEquipmentData.csv",
    headers: header,
    data: all,
  };
  return (
    <Tippy
      animation="perspective"
      content={"click to download all equipment data"}
    >
      <div className="container">
        <CSVLink {...csvReport} className={classes.root}>
          Download All Equipment Data &nbsp;
          <BiDownload />
        </CSVLink>
      </div>
    </Tippy>
  );
};

export default Download;
