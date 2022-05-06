import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { fetchURL } from "../apiComponents/FetchComponent";

const useStyle = makeStyles((theme) => ({
  main: {
    padding: "20px",
  },
  cards: {
    display: "flex",

    flexWrap: "wrap",
    justifyContent: "space-evenly",
    cursor: "pointer",
  },

  container: {
    boxShadow: " 0 15px 20px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",
    },
    padding: "15px",
    width: "250px",
    margin: "20px",
  },
  image: {
    height: "150px",
    width: "220px",
  },
  datelogo: {
    paddingTop: "18px",
    height: "40px",
    width: "20px",
  },
  datecontainer: {
    display: "flex",
  },
  newsTitle: {
    color: "hsl(205,78%,33%)",
  },
}));

const News = () => {
  const classes = useStyle();

  const [news, setNews] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data, loading } = await fetchURL(
        "https://backend.motdev.ran.org.np/about/api/resource/news/en/"
      );
      setNews(data);
      setLoading(loading);
    };
    getData();
  }, []);
  return (
    <div className={classes.main}>
      {loading && <Typography> Loading...</Typography>}
      <div>
        <Typography
          variant="h5"
          style={{
            color: "hsl(205,78%,33%)",
            display: "flex",
            justifyContent: "center",
            margin: "2% 0",
          }}
        >
          News
        </Typography>

        <p
          className="container"
          style={{
            marginTop: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          MOT members are actively engaged in different activities, This page
          shows the different events, activities, and news related to MOT
          operation
        </p>
      </div>

      <div className={classes.cards}>
        {news.results &&
          news.results.map((item) => {
            return (
              <div className={classes.container} key={item.id}>
                <img src={item.image} alt="img" className={classes.image} />
                <div className={classes.datecontainer}>
                  <img
                    src="https://img.icons8.com/small/32/000000/date-span.png"
                    alt="date"
                    className={classes.datelogo}
                  />
                  <p style={{ paddingTop: "15px" }}>{item.created_date}</p>
                </div>
                <div className={classes.newsTitle}>
                  <b style={{ fontWeight: "20rem" }}>{item.title}</b>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
