import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { CSVLink } from "react-csv";
import { BiDownload } from "react-icons/bi";
import tippy from "react-tippy";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    color: "black",
    borderRadius: 3,
    backgroundColor: "#ededed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    margin: "10px",
    boxShadow: " 0 5px 20px rgba(0, 0, 0, 0.4)",
    "&:hover": {
      boxShadow: " 0 5px 20px rgba(0, 0, 0, 0.4)",
      backgroundColor: "hsl(205, 78%, 35%)",
      color: "white",
      cursor: "pointer",
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
    <tippy title="click to download data">
      <div className="container">
        <CSVLink {...csvReport} className={classes.root}>
          <Typography variant="h6" component="h2">
            Download All Equipment Data &nbsp;
            <BiDownload />
          </Typography>
        </CSVLink>
      </div>
    </tippy>
  );
};

export default Download;
