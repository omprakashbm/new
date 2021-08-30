import React,{useContext,useState,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { fetchURL } from '../apiComponents/FetchComponent';
import { LanguageContext } from '../App';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'column',
    
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(2),

    },
  },
}));


const columnsHospital = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 90 },
    { 
    field: 'name', 
    headerName: 'Name', 
    width: 400 },
  {
    field: 'contact_number',
    headerName: 'Number',
    width:130,
  },
  {
    field: 'contact_email',
    headerName: 'Email',
    width: 300,
  },
  {
    field: 'province',
    headerName: 'Province',
    width: 150,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 500,
  },
];
const columnsEquipment = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 90 },
  {
    field: 'hospital_id',
    headerName: 'Hospital ID',
    width:150,
  },
  {
    field: 'hospital_name',
    headerName: 'Hospital Name',
    width:400,
  },
  {
    field: 'equipment_type',
    headerName: 'Equipment Type',
    width: 300,
  },
  {
    field: 'unit',
    headerName: 'Unit',
    width: 150,
  },
  {
    field: 'company_name',
    headerName: 'Company',
    width: 500,
  },
  {
    field: 'suppliers',
    headerName: 'Suppliers',
    width: 500,
  },
  {
    field: 'remarks',
    headerName: 'Remarks',
    width: 1000,
  },
];


export default function Hospital() {
  const classes = useStyles();
  let language = useContext(LanguageContext);
  const [hospitalData, setHospitalData] = useState({ results: [] });
  const [equipemntData, setEquipemntData] = useState({ results: [] });


  useEffect(() => {
    const getData = async () => {
      let { data:hdata, loading:hloading, dataIndex:hdataIndex } = await fetchURL(`https://backend.motdev.ran.org.np/about/api/hospital/${language}/`);
      let { data:edata, loading:eloading, dataIndex:edataIndex } = await fetchURL(`https://backend.motdev.ran.org.np/about/api/equipment/${language}/`);
      // console.log(edata);
      if(!(edata==null)){
        let equipmentAllData= await convertData(edata.results);
        setEquipemntData({ results: equipmentAllData });
      }
      
      setHospitalData(hdata);
      

    }
    getData();

  }, [language]);

  const convertData= async(data) =>{
    let dataCopy = [];
    for (let i = 0; i < data.length; i++) {
      dataCopy[i]={...data[i],'hospital_name':data[i]['hospital_info']['hospital_name'],'hospital_id':data[i]['hospital_info']['hospital_id']}
    }
    return dataCopy;
    

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
            />
          </div>}
        </CardContent>  
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
                Equipments Data
          </Typography>
           {equipemntData &&
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={equipemntData.results}
              columns={columnsEquipment}
              pageSize={10}
            />
          </div>}
        </CardContent>  
      </Card>
    </div>
  );
}
