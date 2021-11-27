import React, { useContext } from "react";
import { LanguageContext } from "../App";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  circleProps: {
    margin: "1.5rem",
    backgroundImage: "linear-gradient(#0099e6,#005580)",
    width: "25rem",
    height: "10rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "3rem",
    borderRadius: 10,

    "&:hover": {
      boxShadow: " 0 5px 20px rgba(0, 0, 0, 0.4)",
    },
  },
}));
const circleprops2 = {
  style: {
    display: "flex",
    flexGrow: 1,
    color: "#0D6199",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    flexWrap: "wrap",

    textAlign: "center",
    fontSize: "3rem",
  },
};

const Contact = () => {
  const classes = useStyles();
  const language = useContext(LanguageContext);
  let homeData = {
    titleen: "eng title",
    titlenp: "np title",
  };
  return (
    <div style={{ minHeight: "552px" }}>
      {/* {homeData[`title${language}`]} */}

      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        padding="2rem"
      >
        <Typography gutterBottom variant="h4" component="h5">
          Contact Us
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Box display="flex" {...circleprops2}>
          <Box className={classes.circleProps}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              Rishav Raj - Manager
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              +977-9860478881
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              ran.rishav@gmail.com
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              Lalitpur
            </Typography>
          </Box>
          <Box borderRadius="5%" className={classes.circleProps}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              Bikash Gurung - Executive Director
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              +977-9851208879
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              ran.bikashgurung@gmail.com
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              Lalitpur
            </Typography>
          </Box>
          <Box borderRadius="5%" className={classes.circleProps}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              Nabin Munankarm - Country Director
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              +977-9841585197
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              nabin2045@gmail.com
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              color="inherit"
            >
              Bhaktapur
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
