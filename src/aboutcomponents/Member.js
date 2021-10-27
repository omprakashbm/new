import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fetchURL } from "../apiComponents/FetchComponent";
import { LanguageContext } from "../App";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",
    },
  },
  media: {
    height: "200px",
    width: "200px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    cursor: "pointer",

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  modal: {
    display: "flex",
    justifyContent: "center",
  },
  main: {
    position: "fixed",
    width: "80%",
    margin: "5%",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 12,
  },
  modalContent: {
    display: "block",
  },
  head: {
    color: "hsl(205, 78%, 40%)",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "8%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "2%",
    },
  },
}));

export default function Member() {
  let language = useContext(LanguageContext);
  const [loading, setloading] = useState(true);
  const [dataIndex, setdataIndex] = useState(0);
  const [allMembers, setallMembers] = useState({ results: [] });
  const [open, setOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState({});

  // const leadName = [];
  // const leadImage = [];
  // const leadPosition = [];
  // const leadQualificatoin = [];
  // const LeadDescription = [];

  useEffect(() => {
    const getData = async () => {
      let { data, loading, dataIndex } = await fetchURL(
        `https://backend.motdev.ran.org.np/about/api/get_team_members/${language}/`
      );
      setallMembers(data);
      setdataIndex(dataIndex);
      setloading(loading);
    };
    getData();
  }, [language]);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const cardCLicked = (id) => {
    setModalIndex(allMembers.results.filter((data) => data.id == id)[0]);
    console.log(modalIndex);
    setOpen(true);
  };

  const content = (
    <div className={classes.modal}>
      {modalIndex && (
        <Card
          className={classes.main}
          key={modalIndex.id}
          style={{ height: "80%", overflowY: "scroll" }}
        >
          <CardContent className={classes.scroll}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              style={{ float: "right" }}
            >
              <CloseIcon />
            </IconButton>

            <div className={classes.modalContent}>
              <h5>Province:</h5>
              <Typography
                align="justify"
                variant="body1"
                color="textSecondary"
                component="p"
              >
                <p style={{ paddingLeft: "1rem" }}>{modalIndex.province}</p>
              </Typography>
            </div>

            <div className={classes.modalContent}>
              <h5>Qualification:</h5>
              <Typography
                align="justify"
                variant="body1"
                color="textSecondary"
                component="p"
              >
                <p style={{ paddingLeft: "1rem" }}>
                  {modalIndex.qualifications}
                </p>
              </Typography>
            </div>

            <div className={classes.modalContent}>
              <h5>Description:</h5>
              <Typography
                align="justify"
                variant="body1"
                color="textSecondary"
                component="p"
              >
                <p style={{ paddingLeft: "1rem" }}>{modalIndex.description}</p>
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  return (
    <div>
      <div>
        {modalIndex && (
          <Modal open={open} onClose={handleClose}>
            {modalIndex && content}
          </Modal>
        )}
      </div>
      {loading && (
        <Typography
          className={classes.container}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Loading...
        </Typography>
      )}

      <h3 className={classes.head}>Leads:</h3>

      <div className={classes.container}>
        {allMembers &&
          allMembers.results.map((member, index) => {
            if (
              member.position === "Oxygen Plant Lead" ||
              member.position === "Communication and Documentation Lead" ||
              member.position === "Provincial Lead"
            ) {
              // leadImage.push(member.profile_picture);
              // leadName.push(member.full_name);
              // leadPosition.push(member.position);
              // leadQualificatoin.push(member.qualifications);
              // LeadDescription.push(member.description);
              return (
                <Card
                  className={classes.root}
                  key={member.id}
                  onClick={() => cardCLicked(member.id)}
                >
                  <CardMedia
                    className={classes.media}
                    image={member.profile_picture}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Name</b> : {member.full_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Position</b> : {member.position}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p"> secondary
            Contacts : {member.primary_contact}({member.secondary_contact})
          </Typography> */}
                  </CardContent>
                </Card>
              );
            }
          })}
      </div>
      <h3 className={classes.head}>Co-Leads and Others:</h3>
      <div className={classes.container}>
        {allMembers &&
          allMembers.results.map((member) => {
            if (
              member.position === "Co-Lead" ||
              member.position === "Co-Lead Research and Development" ||
              member.position === "MOT Portal Backend"
            ) {
              return (
                <Card
                  className={classes.root}
                  key={member.id}
                  onClick={() => cardCLicked(member.id)}
                >
                  <CardMedia
                    className={classes.media}
                    image={member.profile_picture}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Name</b> : {member.full_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Position</b> : {member.position}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p"> secondary
            Contacts : {member.primary_contact}({member.secondary_contact})
          </Typography> */}
                  </CardContent>
                </Card>
              );
            }
          })}
      </div>

      <h3 className={classes.head}>Members:</h3>
      <div className={classes.container}>
        {allMembers &&
          allMembers.results.map((member) => {
            if (member.position === "Member") {
              return (
                <Card
                  className={classes.root}
                  key={member.id}
                  onClick={() => cardCLicked(member.id)}
                >
                  <CardMedia
                    className={classes.media}
                    image={member.profile_picture}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Name</b> : {member.full_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Position</b> : {member.position}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p"> secondary
            Contacts : {member.primary_contact}({member.secondary_contact})
          </Typography> */}
                  </CardContent>
                </Card>
              );
            }
          })}
      </div>
    </div>
  );
}
