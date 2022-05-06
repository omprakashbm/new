import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { fetchURL } from "../apiComponents/FetchComponent";
import ReactPlayer from "react-player";

const useStyle = makeStyles((theme) => ({
  main: {
    padding: "20px",
  },
  cards: {
    display: "flex",
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
  videoTitle: {
    marginTop: 0,
    color: "hsl(205,78%,33%)",
  },
}));

const News = () => {
  const classes = useStyle();
  const [video, setVideo] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data, loading } = await fetchURL(
        "https://backend.motdev.ran.org.np/about/api/resource/video/en/"
      );
      setVideo(data);
      setLoading(loading);
    };
    getData();
  }, []);

  return (
    <div className={classes.main}>
      {loading && <h5>Loading...</h5>}
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
          Videos
        </Typography>

        <p
          style={{
            marginTop: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          MOT members are actively engaged in different activities, This page
          shows the different videos.
        </p>
      </div>
      <div className={classes.cards}>
        {video.results &&
          video.results.map((item) => {
            return (
              <Grid className={classes.container} key={item.id}>
                {/* <YouTube vifeoId={item.video_link} size="10px"></YouTube> */}
                {/* <iframe src={item.video_link}> </iframe> */}
                <ReactPlayer
                  width="220px"
                  height="125px"
                  url={item.video_link}
                ></ReactPlayer>
                <div className={classes.datecontainer}>
                  <img
                    src="https://img.icons8.com/small/32/000000/timeline-week.png"
                    alt="date"
                    className={classes.datelogo}
                  />
                  <p style={{ paddingTop: "16px", paddingLeft: "5px" }}>
                    {item.created_date}
                  </p>
                </div>
                <div className={classes.videoTitle}>
                  <a
                    href={item.video_link}
                    target="blank"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <b style={{ fontWeight: "20rem" }}>{item.title}</b>
                  </a>
                </div>
              </Grid>
            );
          })}
      </div>
    </div>
  );
};

export default News;
