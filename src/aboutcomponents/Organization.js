import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { fetchURL } from "../apiComponents/FetchComponent";
import { LanguageContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    height: "auto",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  media: {
    minHeight: 250,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Organization() {
  let language = useContext(LanguageContext);
  const [loading, setloading] = useState(true);
  const [allMembers, setallMembers] = useState({ results: [] });

  useEffect(() => {
    const getData = async () => {
      let { data, loading } = await fetchURL(
        `https://backend.motdev.ran.org.np/about/api/get_organization/${language}/`
      );
      setallMembers(data);
      setloading(loading);
      console.log(data);
      console.log(loading);
    };
    getData();
  }, [language]);

  const classes = useStyles();

  return (
    <>
      {loading && (
        <Typography variant="body2" color="textSecondary" component="p">
          Loading...
        </Typography>
      )}
      <h2
        style={{
          margin: "30px",
          color: "hsl(205, 78%, 33%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Lead Organiztions:
      </h2>

      <div className={classes.container}>
        {allMembers &&
          allMembers.results.map((member, index) => {
            if (
              member.category === "L"
              // member.title === "Robotics Association of Nepal"
            )
              return (
                <Card className={classes.root} key={member.id}>
                  <CardActionArea
                    onClick={() =>
                      window.open("https://" + member.contact_website, "_blank")
                    }
                  >
                    <CardMedia className={classes.media} image={member.logo} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {member.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {member.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
          })}
      </div>

      <h2
        style={{
          margin: "30px",
          color: "hsl(205, 78%, 33%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Supporting Organizations:
      </h2>

      <div className={classes.container}>
        {allMembers &&
          allMembers.results.map((member, index) => {
            if (member.category === "S")
              return (
                <Card className={classes.root} key={member.id}>
                  <CardActionArea
                    onClick={() =>
                      window.open("https://" + member.contact_website, "_blank")
                    }
                  >
                    <CardMedia className={classes.media} image={member.logo} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {member.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {member.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
          })}
      </div>

      <h2
        style={{
          margin: "30px",
          color: "hsl(205, 78%, 33%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Partners Organizations:
      </h2>

      <div className={classes.container}>
        {allMembers &&
          allMembers.results.map((member, index) => {
            if (member.category !== "S" && member.category !== "L")
              return (
                <Card className={classes.root} key={member.id}>
                  <CardActionArea
                    onClick={() =>
                      window.open("https://" + member.contact_website, "_blank")
                    }
                  >
                    <CardMedia className={classes.media} image={member.logo} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {member.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {member.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
          })}
      </div>
    </>
  );
}
