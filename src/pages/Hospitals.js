import React, { useContext, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { fetchURL } from "../apiComponents/FetchComponent";
import { LanguageContext } from "../App";
import Typography from "@material-ui/core/Typography";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
          background: row.value === "Operational" ? "green" : "red",
          borderRadius: "15px",
          width: "130px",
          textAlign: "center",
          color: "white",
          // height: "47px",
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

  const classe = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classe.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      
    </div>
  );


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
        `https://mot.naxa.com.np/about/api/hospital/np/`
        // `https://mot.naxa.com.np/about/api/hospital/${language}/`
        // `https://backend.motdev.ran.org.np/about/api/hospital/${language}/`
      );
      let {
        data: edata,
        loading: eloading,
        dataIndex: edataIndex,
      } = await fetchURL(
        `https://mot.naxa.com.np/about/api/equipment/np/`
        // `https://mot.naxa.com.np/about/api/equipment/${language}/`
        // `https://backend.motdev.ran.org.np/about/api/equipment/${language}/`
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

  const equipmentShow = (id) =>  {
    // console.log(id);
    // console.log(equipemntData.results.filter(value => value.hospital==id));
    setFilterEquipmentData(equipemntData.results.filter(value => value.hospital==id))
    handleOpen();
  }

  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            Hospital Data
          </Typography>
          {hospitalData &&
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={hospitalData.results}
              columns={columnsHospital}
              pageSize={10}
              onCellClick={(event) => {
                equipmentShow(event.id);
              }}
            />
          </div>}
        </CardContent>  
      </Card>

      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={
        {
          top:'10%',
          left: '10%',
          width: '75%'
        }
      }
      >
      <Card className={classes.root}>
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
                Equipments Data
          </Typography>
           {equipemntData &&
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={filterEquipmentData}
              columns={columnsEquipment}
              pageSize={10}
              
            />
          </div>}
        </CardContent>  

      </Card>

      </Modal>

    </div>
  );
}
