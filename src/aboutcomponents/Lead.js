import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fetchURL } from '../apiComponents/FetchComponent';
import { LanguageContext } from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  media: {

    height: "200px",
    width: "200px"

  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    '& > *': {
      margin: theme.spacing(1),

    },

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  imageSize:  {
    width: '100%',
    height:'80%',
    borderRadius: '16px',
    marginBottom: '1vh'
  }

}));

export default function Lead() {

  let language = useContext(LanguageContext);
  const [loading, setloading] = useState(true);
  const [dataIndex, setdataIndex] = useState(0);
  const [allMembers, setallMembers] = useState({ results: [] });

  useEffect(() => {
    const getData = async () => {
      let { data, loading, dataIndex } = await fetchURL(`https://backend.motdev.ran.org.np/about/api/get_team_leads/${language}/`);
      setallMembers(data);
      setdataIndex(dataIndex);
      setloading(loading);
    }
    getData();

  }, [language]);

  const classes = useStyles();
  let expandCount = [];

  if (dataIndex) {

    for (let i = 0; i <= dataIndex; i++) {
      expandCount.push(false);
    }
    console.log(expandCount);
  }

  const [expanded, setExpanded] = React.useState(expandCount);


  const handleExpandClick = (id) => {
    let newExpand = [...expanded];
    newExpand[id] = !newExpand[id];
    setExpanded(newExpand);
  };

  return (
    <div>
      <img src={'/BOD.jpg'} alt="ecg" className={classes.imageSize} /> <br></br> 
      <img src={'/techteam.png'} alt="ecg" className={classes.imageSize} />  <br></br> 
      <img src={'/Portal Launch.jpg'} alt="ecg" className={classes.imageSize} />  <br></br> 
      <img src={'/management.jpg'} alt="ecg" className={classes.imageSize} />  <br></br> 

    </div>
  );
}

