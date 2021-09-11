import React, { useContext, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { fetchURL } from "../apiComponents/FetchComponent";
import { LanguageContext } from "../App";
import Typography from "@material-ui/core/Typography";
import { Dialog, Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(2),
    },
  },
}));

const columnsHospital = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },

  {
    field: "date",
    headerName: "View Detail",
    renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          View Detail
        </Button>
      </strong>
    ),
    width: 150,
  },

  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "contact_number",
    headerName: "Number",
    width: 130,
  },
  {
    field: "contact_email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "province",
    headerName: "Province",
    width: 150,
  },
  {
    field: "district",
    headerName: "District",
    width: 200,
  },
  {
    field: "ward",
    headerName: "Ward",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
  },
];

const columnsEquipment = [
  {
    field: "id",
    headerName: "ID",
    flexGrow: 1,
  },

  {
    field: "hospital_name",
    headerName: "Hospital Name",
    width: 180,
  },
  {
    field: "equipment_type",
    headerName: "Equipment Type",
    width: 180,
  },
  {
    field: "eqiupment_status",
    headerName: "Eqiupment Status",
    // renderCell: (row) => console.log(row),
    renderCell: (row) => (
      <div
        style={{
          background:
            row.value === "Operational"
              ? "#0e80008c"
              : row.value === "Not Operational"
              ? "#ff000075"
              : row.value === "In Maintenance"
              ? "rgb(187 187 36 / 84%)"
              : "",
          borderRadius: "25px",
          width: "112px",
          textAlign: "center",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          height: "34px",
          display: "flex",
        }}
      >
        {row.value}
      </div>
    ),
    width: 190,
  },
  {
    field: "unit",
    headerName: "Unit",
    width: 110,
  },

  {
    field: "company_name",
    headerName: "Company",
    width: 150,
  },

  {
    field: "suppliers",
    headerName: "Suppliers",
    width: 150,
  },
  {
    field: "remarks",
    headerName: "Remarks",
    width: 200,
  },
];

export default function Hospital() {
  const classes = useStyles();
  let language = useContext(LanguageContext);
  const [hospitalData, setHospitalData] = useState({ results: [] });
  const [equipemntData, setEquipemntData] = useState({ results: [] });
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState(columnsEquipment);

  const handleClose = (value) => {
    setOpen(false);
    // setSelected(value);
  };

  useEffect(() => {
    setFilterData(
      equipemntData.results.filter((dt) => dt?.hospital === selected?.id)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    const getData = async () => {
      let {
        data: hdata,
        loading: hloading,
        dataIndex: hdataIndex,
      } = await fetchURL(
        // `https://mot.naxa.com.np/about/api/hospital/np/`
        // `https://mot.naxa.com.np/about/api/hospital/${language}/`
        `https://backend.motdev.ran.org.np/about/api/hospital/${language}/`
      );
      let {
        data: edata,
        loading: eloading,
        dataIndex: edataIndex,
      } = await fetchURL(
        // `https://mot.naxa.com.np/about/api/equipment/np/`
        // `https://mot.naxa.com.np/about/api/equipment/${language}/`
        `https://backend.motdev.ran.org.np/about/api/equipment/${language}/`
      );

      if (!(edata == null)) {
        let equipmentAllData = await convertData(edata.results);
        setEquipemntData({ results: equipmentAllData });
      }

      setHospitalData(hdata);
    };
    getData();
  }, [language]);

  const convertData = async (data) => {
    let dataCopy = [];
    for (let i = 0; i < data.length; i++) {
      dataCopy[i] = {
        ...data[i],
        hospital_name: data[i]["hospital_info"]["hospital_name"],
        hospital_id: data[i]["hospital_info"]["hospital_id"],
      };
    }
    return dataCopy;
  };

  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            Hospital Data
          </Typography>
          {hospitalData && (
            <div style={{ height: 600, width: "100%" }}>
              <DataGrid
                onRowClick={(item) => {
                  console.log(item);
                  setSelected(item);
                  setOpen(true);
                }}
                style={{ cursor: "pointer" }}
                rows={hospitalData.results}
                columns={columnsHospital}
                pageSize={10}
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <Dialog
          onClose={handleClose}
          // aria-labelledby="simple-dialog-title"
          open={open}
          fullWidth={true}
          maxWidth={"lg"}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>
          <CardContent className={classes.root}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary"
            >
              Equipments Data {selected?.row?.name}
            </Typography>
            {equipemntData && (
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={filterData}
                  columns={columnsEquipment}
                  pageSize={10}
                />
              </div>
            )}
            {/* 
            {equipemntData ? (
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={filterData}
                  // rows={equipemntData.results}
                  columns={columnsEquipment}
                  pageSize={10}
                />
              </div>
            ) : (
              <tr>No data Available</tr>
            )} */}
          </CardContent>
        </Dialog>
      </Card>
    </div>
  );
}
