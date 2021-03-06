/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { fetchURL } from "../apiComponents/FetchComponent";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import Modal from "@material-ui/core/Modal";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

// import { LanguageContext } from "../App";

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
    minWidth: 400,
    maxWidth: 425,

    // 535
    minHeight: 500,

    display: "flex",
    flexDirection: "column",

    alignItems: "center",

    padding: ".25rem",
    margin: "2rem",
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  field: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  button: {
    background: "transparent",
    borderColor: "transparent",
    textTransform: "capitalize",
    fontSize: ".9rem",
    color: "hsl(205, 78%, 60%)",
    cursor: "pointer",
    paddingLeft: "0.25rem",
  },
  img: {
    display: "block",
    margin: "0 auto",
    height: "250px",
    width: "350px",
  },
  Doc: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
    alignItems: "center",
    border: "1px solid hsl(205, 78%, 40%)",
    color: "hsl(205, 78%, 40%)",
    width: "160px",
    height: "35px",
    borderRadius: 9,
  },
  head: {
    fontWeight: "600",
    color: "hsl(205, 78%, 40%)",
    padding: "1px",
  },

  paper: {
    height: "660",
    position: "fixed",
    margin: "5%",
    width: "80%",
    marginLeft: "10%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: "5%",
  },
  // Doc1: {
  //   margin: "0 auto",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: "3rem",
  //   marginBottom: "3rem",
  //   border: "1px solid hsl(205, 78%, 40%)",
  //   color: "hsl(205, 78%, 40%)",
  //   width: "160px",
  //   height: "35px",
  //   borderRadius: 9,
  // },
  scrolll: { maxHeight: "200px", overFlow: "hidden", overFlowY: "scroll" },
}));

export default function RequestSolved() {
  const classes = useStyles();
  const [info, setInfo] = useState({ results: [] });
  const [loading, setloading] = useState(true);
  const [dataIndex, setdataIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState({});

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // created_date: "2021-09-12T12:29:57.501846Z"
  // document: "https://docs.google.com/document/d/1n0ugFP0cYm8alNjE8LAQG9aIk2Te-pcS/edit?usp=drive_web&ouid=110948504301113125867&rtpof=true"
  // edited_date: "2021-09-13T03:14:54.047593Z"
  // id: 1
  // image: "http://backend.motdev.ran.org.np/about/solve/1/c0e15fc5b0a8751878fb7ccf17c4fa89.jpg"
  // request_for: "kljaklsdjkl"
  // request_from: "kasdklj"
  // support_provided: "jaklsjdkl"

  //   useEffect(() => {
  //     const getData = async () => {
  //       let { data, loading, dataIndex } = await fetchURL(
  //         `http://backend.motdev.ran.org.np/about/api/solve/en//${language}/`
  //       );
  //       setAchievementData(data);
  //     };
  //     getData();
  //   }, [language]);

  // let expandCount = [];
  // if (dataIndex) {
  //   for (let i = 0; i <= dataIndex; i++) {
  //     expandCount.push(false);
  //   }
  // }

  useEffect(() => {
    const getData = async () => {
      let { data, loading, dataIndex } = await fetchURL(
        "https://backend.motdev.ran.org.np/about/api/solve/en/"
      );
      setInfo(data);
      setloading(loading);
      setdataIndex(dataIndex);
      setModalIndex(info.results[0]);
    };
    getData();
  }, []);

  const body = (
    <div className={classes.main}>
      {modalIndex && (
        <Card
          className={classes.paper}
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
            <div className={classes.field}>
              <h5 className={classes.head}>Request From:</h5>
              <Typography
                align="justify"
                variant="body1"
                color="textSecondary"
                component="p"
                style={{
                  paddingTop: "3%",
                }}
              >
                <p style={{ paddingLeft: "1rem" }}>{modalIndex.request_from}</p>
              </Typography>
            </div>
            <div className={classes.field}>
              <h5 className={classes.head}>Request For:</h5>
              <Typography
                align="justify"
                variant="body1"
                color="textSecondary"
                component="p"
                style={{
                  paddingTop: "3%",
                }}
              >
                <p style={{ paddingLeft: "1rem" }}>{modalIndex.request_for}</p>
              </Typography>
            </div>
            <div className={classes.field}>
              <h5 className={classes.head}>Service Provided:</h5>
              <Typography
                align="justify"
                variant="body1"
                color="textSecondary"
                component="p"
                style={{
                  paddingTop: "2.5%",
                }}
              >
                <p style={{ paddingLeft: "1rem" }}>
                  {modalIndex.support_provided}
                </p>
              </Typography>
            </div>

            <img src={modalIndex.image} alt="img" className={classes.img} />

            {modalIndex.document ? (
              <a
                style={{ textDecoration: "none" }}
                href={modalIndex.document}
                className={classes.Doc}
                target="_blank"
              >
                View Document.
              </a>
            ) : (
              ""
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );

  const cardClicked = (id) => {
    setModalIndex(info.results.filter((data) => data.id == id)[0]);
    console.log(modalIndex);
    setOpen(true);
  };

  return (
    <div className={classes.container}>
      <div>
        {modalIndex && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {modalIndex && body}
          </Modal>
        )}
      </div>

      {loading && (
        <Typography variant="body2" color="textSecondary" component="p">
          Loading...
        </Typography>
      )}
      {info &&
        info.results.map((solved) => {
          return (
            <div onClick={() => cardClicked(solved.id)} key={solved.id}>
              <Card className={classes.root}>
                <CardContent>
                  <div className={classes.field}>
                    <h5 className={classes.head}>Request From:</h5>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                      style={{
                        paddingTop: "3%",
                      }}
                    >
                      <p style={{ paddingLeft: "1rem" }}>
                        {solved.request_from}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.field}>
                    <h5 className={classes.head}>Request For:</h5>
                    <Typography
                      align="justify"
                      variant="body1"
                      color="textSecondary"
                      component="p"
                      style={{
                        paddingTop: "3%",
                      }}
                    >
                      <p style={{ paddingLeft: "1rem" }}>
                        {solved.request_for}
                      </p>
                    </Typography>
                  </div>
                  <div>
                    <div>
                      <img
                        src={solved.image}
                        alt="img"
                        className={classes.img}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
