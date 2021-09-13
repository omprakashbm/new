import React, { useContext, useState, useEffect } from "react";
import { fetchURL } from "../apiComponents/FetchComponent";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { Dialog, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

// import { LanguageContext } from "../App";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

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
    minHeight: 590,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: ".25rem",
    margin: "2rem",
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    flexWrap: "wrap",
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
    alignSelf: "center",
    height: "220px",
    width: "300px",
  },
  Doc: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem",
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

  main: {
    marginTop: "5%",
    width: "80%",
    minHeight: "60%",
    marginLeft: "10%",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    minHeight: "60%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modelRoot: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "100%",
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",
  },
}));

export default function RequestSolved() {
  const classes = useStyles();
  const [info, setInfo] = useState({ results: [] });
  const [readMore, setReadMore] = useState(false);
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
  let expandCount = [];
  if (dataIndex) {
    for (let i = 0; i <= dataIndex; i++) {
      expandCount.push(false);
    }
  }

  useEffect(() => {
    const getData = async () => {
      let { data, loading, dataIndex } = await fetchURL(
        "http://backend.motdev.ran.org.np/about/api/solve/en/"
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
        {modalIndex && (
          <Card className={classes.modelRoot} key={modalIndex.id}>
            <CardContent>
              <div className={classes.field}>
                <h3 className={classes.head}>Request From:</h3>
                <Typography
                  align="justify"
                  variant="body1"
                  color="textSecondary"
                  component="p"
                >
                  <p style={{ paddingLeft: "1rem" }}>
                    {modalIndex.request_from}
                  </p>
                </Typography>
              </div>
              <div className={classes.field}>
                <h3 className={classes.head}>Request For:</h3>
                <Typography
                  align="justify"
                  variant="body1"
                  color="textSecondary"
                  component="p"
                >
                  <p style={{ paddingLeft: "1rem" }}>
                    {modalIndex.request_for}
                  </p>
                </Typography>
              </div>
              <div className={classes.field}>
                <h3 className={classes.head}>Service Provided:</h3>
                <Typography
                  align="justify"
                  variant="body1"
                  color="textSecondary"
                  component="p"
                >
                  <p style={{ paddingLeft: "1rem" }}>
                    {modalIndex.support_provided}
                  </p>
                </Typography>
              </div>
              {/* <div className={classes.field}>
                    <h3 className={classes.head}>Details:</h3>
                    <Typography variant="body1" color="textSecondary">
                      <p style={{ paddingLeft: "1rem" }}>{modalIndex.de}</p>
                    </Typography>
                  </div> */}
              <div>
                <div>
                  <img
                    src={modalIndex.image}
                    alt="img"
                    className={classes.img}
                  />
                </div>
                {modalIndex.document ? (
                  <div>
                    <a
                      style={{ textDecoration: "none" }}
                      href={modalIndex.document}
                      className={classes.Doc}
                      target="_blank"
                    >
                      View Document.
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </Dialog>
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
            <div onClick={() => cardClicked(solved.id)}>
              <Card className={classes.root} key={solved.id}>
                <CardContent>
                  <div className={classes.field}>
                    <h3 className={classes.head}>Request From:</h3>
                    <Typography
                      align="justify"
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      <p style={{ paddingLeft: "1rem" }}>
                        {solved.request_from}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.field}>
                    <h3 className={classes.head}>Request For:</h3>
                    <Typography
                      align="justify"
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      <p style={{ paddingLeft: "1rem" }}>
                        {solved.request_for}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.field}>
                    <h3 className={classes.head}>Service Provided:</h3>
                    <Typography
                      align="justify"
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      <p style={{ paddingLeft: "1rem" }}>
                        {readMore
                          ? solved.support_provided
                          : `${solved.support_provided.substring(0, 100)}...`}
                        <button
                          className={classes.button}
                          onClick={() => setReadMore(!readMore)}
                        >
                          {/* for toggle !  */}
                          {readMore ? "show less" : "  read more"}
                        </button>
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.field}>
                    <h3 className={classes.head}>Details:</h3>
                    <Typography variant="body1" color="textSecondary">
                      <p style={{ paddingLeft: "1rem" }}>{solved.details}</p>
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
                    {solved.document ? (
                      <div>
                        <a
                          style={{ textDecoration: "none" }}
                          href={solved.document}
                          className={classes.Doc}
                          target="_blank"
                        >
                          View Document.
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
