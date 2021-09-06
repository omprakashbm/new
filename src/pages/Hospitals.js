import React, { useContext, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { fetchURL } from "../apiComponents/FetchComponent";
import { LanguageContext } from "../App";
import Typography from "@material-ui/core/Typography";
import { Dialog } from "@material-ui/core";
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
    field: "name",
    headerName: "Name",
    width: 400,
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
    field: "address",
    headerName: "Address",
    width: 500,
  },
];
const columnsEquipment = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "hospital_id",
    headerName: "Hospital ID",
    width: 150,
  },
  {
    field: "hospital_name",
    headerName: "Hospital Name",
    width: 400,
  },
  {
    field: "equipment_type",
    headerName: "Equipment Type",
    width: 300,
  },
  {
    field: "unit",
    headerName: "Unit",
    width: 150,
  },
  {
    field: "company_name",
    headerName: "Company",
    width: 500,
  },
  {
    field: "suppliers",
    headerName: "Suppliers",
    width: 500,
  },
  {
    field: "remarks",
    headerName: "Remarks",
    width: 1000,
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

  // console.log("selected", selected);
  // console.log("equipemntData", equipemntData);
  // console.log("filterData", filterData);

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
        `https://backend.motdev.ran.org.np/about/api/hospital/${language}/`
      );
      let {
        data: edata,
        loading: eloading,
        dataIndex: edataIndex,
      } = await fetchURL(
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
                  setSelected(item);
                  setOpen(true);
                }}
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
          <CardContent className={classes.root}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary"
            >
              Equipments Data {selected?.row?.name}
            </Typography>
            {/* {equipemntData && (
              <div style={{ height: 600, width: "100%" }}>
                <DataGrid
                  rows={equipemntData.results}
                  columns={columnsEquipment}
                  pageSize={10}
                />
              </div>
            )} */}

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
            )}
          </CardContent>
        </Dialog>
      </Card>
    </div>
  );
}
