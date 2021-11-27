import React from "react";
import { makeStyles } from "@material-ui/core";
import { CSVLink } from "react-csv";
import { Label } from "@material-ui/icons";
import tippy from "react-tippy";

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

const OxygenConcentrator = ({ sum1, oxygen }) => {
  const classes = useStyle();

  console.log(oxygen);
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
    filename: "OxygenConcentrator.csv",
    headers: header,
    data: oxygen,
  };
  // var data = [
  //   {
  //     hospitaName: hospitalName1,
  //     equipmentName: equipmentName1,
  //     unit: unit1,
  //     EuipmentStatus: eqiupmentStatus1,
  //   },
  // ];

  // const csvReport = {
  //   filename: "oxygenconcentrator.csv",
  //   headers: headers,
  //   data: data,
  // };

  // const exportCsv = () => {
  //   var csvRow = [];
  //   var A = [
  //     ["id", "Hospital Name", "Equipment Name", "Unit", "Equipment Status"],
  //   ];
  //   for (var i = 1; i <= hospitalName1.length; i++) {
  //     A.push([
  //       i,
  //       hospitalName1[i],
  //       equipmentName1[i],
  //       unit1[i],
  //       equipmentStatus1[i],
  //     ]);
  //   }

  //   console.log(A);
  //   for (var j = 0; j < A.lngth; j++) {
  //     csvRow.push(A[i].join(","));
  //   }
  // };

  return (
    <tippy title="click to download data">
      <div className={classes.root}>
        <img
          src={"/concentrator.png"}
          alt="logo"
          style={{ padding: 5, height: "40px" }}
        />

        <CSVLink {...csvReport} className={classes.mainContent}>
          <div className={classes.content}>
            <h5 style={{ marginBottom: 0 }}>{sum1}</h5>
            <p style={{ marginTop: 0 }}>Oxygen Concentrator</p>
          </div>
        </CSVLink>
      </div>
    </tippy>
  );
};

export default OxygenConcentrator;
