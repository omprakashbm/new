import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { fetchURL } from "../apiComponents/FetchComponent";
import OxygenConcentrator from "../InfographicsComponent/OxygenConcentrator";
import Dialyzer from "../InfographicsComponent/Dialyzer";
import Ventilator from "../InfographicsComponent/Ventilator";
import OxygenCylinder from "../InfographicsComponent/OxygenCylinder";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { ScaleLoader } from "react-spinners";

import ChartOxygenConcentrator from "../InfographicsComponent/ChartOxygenConcentrator";
import ChartDializer from "../InfographicsComponent/ChartDialyzer";
import ChartOxygenCylinder from "../InfographicsComponent/ChartOxygenCylinder";
import ChartVentilator from "../InfographicsComponent/ChartVentilator";
import Download from "../InfographicsComponent/Download";
import More from "../InfographicsComponent/More";
import Map from "../InfographicsComponent/Map/Map";
import LineChart from "../InfographicsComponent/LineChart";

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "15px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "space-evenly",

    // "&:hover": {
    //   border: "1px solid hsl(205, 78%, 35%)",
    //   paddingTop: "30px",
    //   paddingBottom: "30px",
    // },
  },

  head: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "hsl(205, 78%, 35%)",
      color: "white",
    },
    //   [theme.breakpoints.down("sm")]: {
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   },
    //   [theme.breakpoints.down("md")]: {
    //     marginLeft: "12%",
    //   },
    //   [theme.breakpoints.up("md")]: {
    //     marginLeft: "3%",
    //   },
    //   [theme.breakpoints.up("lg")]: {
    //     marginLeft: "5%",
    //   },
  },

  top: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  main1: {
    marginRight: "0px",
  },

  AggrigateandChart: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.only("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.only("lg")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const URL1 = "https://backend.motdev.ran.org.np/about/api/equipment/en/";
const URL2 = "http://127.0.0.1:8000/api/api/resource/detail/";
const URL3 = "http://127.0.0.1:8000/about/api/hospital/info/en/";

const Infographics = () => {
  const classes = useStyles();

  const [hospital, setHospital] = useState([""]);
  const [information, setInformation] = useState({ results: [] });
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  let sum1 = 0;

  let sum2 = 0;

  let sum3 = 0;

  let sum4 = 0;

  let sum5 = 0;

  useEffect(() => {
    const gethospitalData = async () => {
      try {
        let { data } = await fetchURL(URL3);
        setHospital(data);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    const getData = async () => {
      try {
        let { data } = await fetchURL(URL1);
        setInformation(data);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    };

    const getChartData = async () => {
      try {
        const resp = await fetch(URL2);
        const chartData = resp.json();
        setChartData(chartData);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    gethospitalData();
    getData();
    getChartData();
  }, []);

  console.log(hospital);

  const OCO = [];
  const OCNO = [];

  const VO = [];
  const VNO = [];

  const DO = [];
  const DNO = [];

  const ORO = [];
  const ORNO = [];

  let oxygen = [];
  let ventilator = [];
  let dialyzer = [];
  let cylinder = [];
  let more = [];
  let all = [];

  return (
    <div style={{ height: "85vh" }}>
      {loading && (
        <Typography variant="body2" color="textSecondary" component="p">
          <ScaleLoader color={"#1673B6"} />
        </Typography>
      )}
      {information &&
        information.results.map((deta) => {
          all.push(deta);
          if (
            deta.equipment_type === "Oxygen Concentrator" ||
            deta.equipment_type === "oxygen concentrators"
          ) {
            sum1 = sum1 + deta.unit;
            oxygen.push(deta);
          } else if (
            deta.equipment_type === "Ventilators" ||
            deta.equipment_type === "Ventilator"
          ) {
            sum2 = sum2 + deta.unit;
            ventilator.push(deta);
          } else if (
            deta.equipment_type === "Oxygen Cylinder and Regulator" ||
            deta.equipment_type === "Oxygen Cylinders" ||
            deta.equipment_type === "Oxygen Plant"
          ) {
            sum3 = sum3 + deta.unit;
            cylinder.push(deta);
          } else if (
            deta.equipment_type === "Dialyzer" ||
            deta.equipment_type === "Dialyzers"
          ) {
            sum4 = sum4 + deta.unit;
            dialyzer.push(deta);
          } else {
            sum5 = sum5 + deta.unit;
            more.push(deta);
          }
        })}
      {chartData &&
        chartData.map((equipment) => {
          if (equipment.Equipment === "oxygen concentrator") {
            OCO.push(parseInt(equipment.Operational));
            OCNO.push(parseInt(equipment.Nonoperational));
          }
          if (equipment.Equipment === "Vantilaor") {
            VO.push(parseInt(equipment.Operational));
            VNO.push(parseInt(equipment.Nonoperational));
          }
          if (equipment.Equipment === "dializer") {
            DO.push(parseInt(equipment.Operational));
            DNO.push(parseInt(equipment.Nonoperational));
          }
          if (equipment.Equipment === "oxygen and  Regulator") {
            ORO.push(parseInt(equipment.Operational));
            ORNO.push(parseInt(equipment.Nonoperational));
          }
        })}

      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className={classes.top}>
              <div>
                <div
                  style={{
                    display: "flex",

                    justifyContent: "center",
                  }}
                >
                  <h5 style={{ color: "hsl(205,78%,35%" }}>Aggregate data</h5>
                </div>

                <div className={classes.main}>
                  <OxygenConcentrator sum1={sum1} oxygen={oxygen} />
                  <Ventilator sum2={sum2} ventilator={ventilator} />
                  <OxygenCylinder sum3={sum3} cylinder={cylinder} />
                  <Dialyzer sum4={sum4} dialyzer={dialyzer} />
                  <More sum5={sum5} more={more} />
                </div>
              </div>

              {/* <div style={{ marginTop: "20px" }}>
                <FilterDownload />
              </div> */}

              <div style={{ marginTop: "3px" }}>
                <Download all={all} />
              </div>
            </div>

            {/* <div>
              <Map />
            </div> */}
          </div>
          <div className="col-md-5">
            <div
              style={{
                marginTop: "5px",

                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <LineChart
                sum1={sum1}
                oxygen={oxygen}
                sum2={sum2}
                ventilator={ventilator}
                sum3={sum3}
                cylinder={cylinder}
                sum4={sum4}
                dialyzer={dialyzer}
                sum5={sum5}
                more={more}
              />
              {/* <Grid className={classes.main1}>
                <ChartOxygenConcentrator
                  OCO={OCO}
                  OCNO={OCNO}
                  className={classes.chart}
                />
                <ChartVentilator VO={VO} VNO={VNO} className={classes.chart} />
                <ChartDializer DO={DO} DNO={DNO} className={classes.chart} />
                <ChartOxygenCylinder
                  ORO={ORO}
                  ORNO={ORNO}
                  className={classes.chart}
                />
              </Grid> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographics;
