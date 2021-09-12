import React, { useContext, useState, useEffect } from "react";
import { fetchURL } from "../apiComponents/FetchComponent";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

// import { LanguageContext } from "../App";

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
  },
  field: {
    display: "flex",
    alignItems: "center",
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
    height: "200px",
    width: "200px",
  },
  Doc: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem",
  },
  head: {
    fontWeight: "600",
    color: "hsl(205, 78%, 40%)",
  },
}));

export default function RequestSolved() {
  const classes = useStyles();
  const [info, setInfo] = useState({ results: [] });
  const [readMore, setReadMore] = useState(false);
  const [loading, setloading] = useState(true);

  //   useEffect(() => {
  //     const getData = async () => {
  //       let { data, loading, dataIndex } = await fetchURL(
  //         `http://backend.motdev.ran.org.np/about/api/solve/en//${language}/`
  //       );
  //       setAchievementData(data);
  //     };
  //     getData();
  //   }, [language]);

  //   useEffect(() => {
  //     const getData = async () => {
  //       let { data, loading } = await fetchURL(
  //         "http://backend.motdev.ran.org.np/about/api/solve/en/"
  //       );
  //       setInfo(data);
  //       setloading(loading);
  //     };
  //     getData();
  //   }, []);

  const getData = async () => {
    const resp = await fetch(
      "http://backend.motdev.ran.org.np/about/api/solve/en/"
    );
    setInfo(await resp.json());
    setloading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={classes.container}>
      {/* {loading && (
        <Typography variant="body2" color="textSecondary" component="p">
          Loading...
        </Typography>
      )} */}
      {info &&
        info.results.map((solved) => {
          return (
            <div>
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
                      <img src={solved.img} alt="img" className={classes.img} />
                    </div>
                    {solved.document ? (
                      <div className={classes.Doc}>
                        <Button
                          variant="outlined"
                          color="primary"
                          sizes="medium"
                          download=""
                          href={solved.document}
                        >
                          View Document.
                        </Button>
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
