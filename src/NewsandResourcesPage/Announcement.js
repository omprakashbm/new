import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { fetchURL } from "../apiComponents/FetchComponent";

import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyle = makeStyles((theme) => ({
  container: {
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",
    padding: "15px",
    margin: "20px",
  },
  head: {
    display: "flex",
  },
  date: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(205,55%,50%)",
    width: "60px",
    height: "60px",
    color: "white",
  },
  arrow: {
    paddingLeft: "5px",
    "&:hover": {
      color: "hsl(205,78%,33%)",
      transform: "translateX(.25rem)",
    },
  },
  schedule: {
    display: "flex",
    justifyContent: "space-between",
  },
  main: {
    position: "fixed",
    width: "80%",
    margin: "5%",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 12,
  },
}));

const Announcement = () => {
  const classes = useStyle();
  const [artics, setArtics] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [modalIndex, setModalIndex] = useState({});
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let { loading, data } = await fetchURL(
        "https://backend.motdev.ran.org.np/about/api/resource/announcement/en/"
      );

      setArtics(data);
      setLoading(loading);
    };

    getData();
  }, []);

  const handleClick = (id) => {
    setModalIndex(artics.results.filter((data) => data.id == id)[0]);
    setModalShow(true);
    console.log(modalIndex);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const body = (
    <div>
      {modalIndex && (
        <Grid
          key={modalIndex.id}
          className={classes.main}
          style={{ height: "80%", overflowY: "scroll" }}
        >
          <div className="container">
            <CardContent className={classes.scroll}>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                style={{ float: "right" }}
              >
                <CloseIcon />
              </IconButton>
            </CardContent>
            <div className={classes.head}>
              <div className={classes.date}>
                <span>{modalIndex.created_date}</span>
              </div>
              <div
                style={{
                  paddingLeft: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <b>{modalIndex.title}</b>
              </div>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <p>{modalIndex.content}</p>
            </div>
            <div className={classes.schedule}>
              <div>
                {/* time duretion */}

                <span>{modalIndex.slug}</span>
              </div>
            </div>
          </div>
        </Grid>
      )}
    </div>
  );

  const date = [];

  return (
    <div className={classes.root}>
      <div>
        {modalIndex && (
          <Modal open={modalShow} onClose={handleClose}>
            {modalIndex && body}
          </Modal>
        )}
      </div>

      {loading && <Typography> Loading...</Typography>}
      <Typography
        variant="h5"
        style={{
          color: "hsl(205,78%,33%)",
          display: "flex",
          justifyContent: "center",
          margin: "2% 0",
        }}
      >
        Announcements
      </Typography>

      {artics.results.map((item) => {
        if (
          item.title !== "सहयोगको लागि कसरी निवेदन दिने" &&
          item.category === "AN"
        ) {
          date.push(item.created_date);
          return (
            <Grid key={item.id} className={classes.container}>
              <div className={classes.head}>
                <div className={classes.date}>
                  <span>{item.created_date}</span>
                </div>
                <div
                  style={{
                    paddingLeft: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <b>{item.title}</b>
                </div>
              </div>
              <div style={{ paddingTop: "10px" }}>
                <p>{item.content}</p>
              </div>
              <div
                className={classes.schedule}
                onClick={() => handleClick(item.id)}
              >
                <div
                  className={classes.arrow}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {/* <Link
                    to="/newsresource/announcement/allannouncement"
                    style={{ textDecoration: "none" }}
                  > */}
                  Learn More.
                  <ArrowRightAltIcon style={{ paddingTop: "2px" }} />
                  {/* </Link> */}
                </div>
                <div>
                  {/* time duretion */}

                  <span>{item.slug}</span>
                </div>
              </div>
            </Grid>
          );
        }
      })}
    </div>
  );
};

export default Announcement;
